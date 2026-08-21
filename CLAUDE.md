# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`platform` is an Nx monorepo (pnpm workspaces) containing the InstaFixd product surface:

- `apps/backend` — NestJS API (global prefix `/api/v1`), backed by Supabase (Postgres + Auth + Storage). No ORM/ Prisma — all DB access goes through `SupabaseService` and raw Supabase-JS queries.
- `apps/landing` — Next.js 16 (App Router) marketing site + provider portal (registration, login, profile). Talks to the backend over `NEXT_PUBLIC_BACKEND_URL`.
- `apps/frontend` — currently empty (only a stray `.env`); not a working app.
- `packages/*` — reserved by the pnpm workspace glob, empty at present.

InstaFixd connects customers to local home-service professionals ("providers": electricians, plumbers, AC techs, etc.) primarily via a WhatsApp-based booking flow, with this repo as the web app + API side of that product. AI features (category prediction from free text, bio enhancement, WhatsApp message understanding) are provided by **external Python/Flask microservices that live outside this repo** — the backend's `AiModule` is a thin proxy to them, never calling them from the frontend directly.

## Commands

All commands run through Nx from the repo root. Package manager is **pnpm** (`packageManager: pnpm@10.28.2` — don't use npm/yarn).

```sh
pnpm install                    # install all workspace deps

# Backend (NestJS, apps/backend)
pnpm nx dev backend             # nest start --watch, http://localhost:3001/api/v1
pnpm nx build backend           # tsc build -> dist/apps/backend
pnpm nx start backend           # run built output (depends on build)
pnpm nx typecheck backend

# Landing (Next.js, apps/landing) — project name is "landing", not "frontend"
pnpm nx dev landing             # next dev
pnpm nx build landing
pnpm nx typecheck landing

# Generic Nx task runner
pnpm nx <target> <project-name>
pnpm nx run-many -t typecheck   # across all projects
```

There is no root-level `package.json` script wiring (`scripts` is `{}`) — always go through `nx`. There are currently no test files in the repo (`*.spec.ts`/`*.test.ts`) despite Jest being configured via `@nx/jest/plugin`; don't assume test infrastructure works until tests actually exist.

Both `apps/backend` and `apps/landing` read from their own `.env` file (not committed; `.gitignore` excludes `.env*` except `.env.example`). When adding a new required backend env var, add it to `apps/backend/src/config/app.config.ts`'s Joi schema — startup will fail fast if it's missing.

## Backend architecture (`apps/backend`)

- **Bootstrap** (`src/main.ts`): global `ValidationPipe` (whitelist + forbidNonWhitelisted + transform), CORS locked to a fixed origin allowlist (production domains + `localhost:3000`), global prefix `api/v1`.
- **Global providers** (`src/app.module.ts`): every request passes through, in order, `JwtAuthGuard` → `RolesGuard` → `LoggingInterceptor` → `TransformInterceptor` → `AllExceptionsFilter`.
  - **Auth is opt-out, not opt-in.** `JwtAuthGuard` is global; routes are public only via `@Public()` (`modules/auth/decorators/public.decorator.ts`), which sets metadata `JwtAuthGuard` checks. When adding a new controller, decide explicitly whether it needs `@Public()`.
  - **Every successful response is auto-wrapped** by `TransformInterceptor` into `{ success: true, data: <handler return value>, timestamp }`. Frontend fetches must unwrap `body.data`, not read fields off the raw JSON root — this has been a recurring bug source (see `ai.service.ts` / `register/partner/page.tsx` handling).
  - `RolesGuard` reads `@Roles(...)` metadata (`modules/auth/decorators/roles.decorator.ts`) and checks `request.user.roles`; no-op if a route declares no required roles.
- **Config** (`src/config/`): `ConfigModule` is `isGlobal: true` and validates `process.env` against a Joi schema in `app.config.ts` at startup. Read typed values via `AppConfigService` (has `.port`, `.jwtSecret`, `.appName`, etc.) rather than injecting `ConfigService` directly, except for one-off external-service URLs (e.g. `AiService` uses `ConfigService.getOrThrow('AI_API_URL')` directly, matching the `otp` module's `TEXT_LK_API_KEY` pattern).
- **Data access**: `SupabaseModule`/`SupabaseService` (`src/shared/supabase/`) wraps `@supabase/supabase-js` using the **service role key** (admin-level, bypasses RLS) — this is the only DB client in the backend. Exposes `.db` (query builder), `.admin` (Supabase Auth admin API — used to create/delete auth users), `.storage`, and `.verifyToken()`.
- **Auth model**: Supabase Auth is the identity provider. `ProvidersService.register()` creates a Supabase Auth user (`supabase.admin.createUser`) *and* a `service_provider` row, and links them via `app_metadata.provider_id` so a login can resolve which provider a JWT belongs to. `JwtStrategy` validates bearer tokens against `JWT_SECRET`/`JWT_EXPIRES_IN` (this repo's own JWT, separate from Supabase's session tokens — check both `auth.service.ts` and `auth-context.tsx` before assuming which token is in play for a given flow).
- **Provider registration is a multi-step write with manual compensation**: `ProvidersService.register()` inserts `service_provider`, then `provider_service_zone` / `provider_service` / `provider_availability(_day)` / `provider_agreement` rows; if any later step fails it deletes the `service_provider` row and the just-created auth user (no DB transactions — Supabase-JS doesn't give you one, so cleanup is manual and best-effort). Follow this same "insert, and manually unwind on failure" shape if you extend registration.
- **File uploads** (`ProvidersService.uploadDocuments`): NIC front/back, selfie, and portfolio files go to the private Supabase Storage bucket `private-documents` under `providers/{providerId}/...`, with a matching row inserted into `verification_document` or `portfolio_document`. Multer handles the multipart parsing at the controller layer.
- **Modules present**: `auth`, `users`, `categories`, `providers`, `locations` (province → district → service_zone cascading lookups, all Supabase-backed), `otp` (SMS OTP via TextLK, see `TEXT_LK_API_KEY`), `ai` (proxy to the external AI microservice — see below), `health`.
- **AI proxy module** (`src/modules/ai/`): `AiController` exposes `POST /api/v1/ai/predict-category` and `POST /api/v1/ai/improve-text`, both `@Public()`. `AiService` forwards the request body to `${AI_API_URL}/predict-category` / `/improve-text` (a separate, externally-hosted AI microservice — not part of this repo) and returns its JSON response. **The frontend must never call the AI service directly** — always route through this backend proxy, which is the only place `AI_API_URL` and any AI-service credentials should live.

## Frontend architecture (`apps/landing`)

- Next.js App Router; almost every page is `'use client'` (heavy `useState`/`useEffect` fetch-on-mount pages rather than server components/server actions). Path alias `@/*` maps to the `apps/landing/` root (see `tsconfig.json`).
- **No shared API client.** Every backend call is a raw inline `fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/...`)` inside the component that needs it, wrapped in `try/catch/finally` with local `useState` for loading/error — there's no axios, no react-query, no `lib/api.ts`. Match this pattern for new calls rather than introducing a new abstraction. Remember to unwrap the backend's `{ data }` envelope (see above).
- **Auth**: `context/auth-context.tsx` (`AuthProvider`/`useAuth`) holds the provider's session — logs in via `supabase.auth.signInWithPassword` (Supabase JS client, `lib/supabase.ts`), then exchanges the Supabase access token for the provider profile via `GET /api/v1/provider/me`, and persists the raw Supabase access token in `localStorage` under `provider_token`. `Navbar` and profile pages read `useAuth()` for the logged-in state.
- **UI kit**: `components/ui/*` is a full shadcn/ui-style component set (Radix primitives + `class-variance-authority` + `tailwind-merge`) — reuse these instead of hand-rolling new primitives. Custom app components (`navbar.tsx`, `whatsapp-chat-preview.tsx`, `chat-preview-section.tsx`) sit alongside at `components/`.
- **Styling**: Tailwind v4, CSS-first config (no `tailwind.config.js` — theme/utilities live in `app/globals.css` under `@theme inline` / `@layer utilities`). Custom animations follow a fixed pattern: define `@keyframes fooBar` then a `.animate-foo-bar` utility class in `globals.css`, and reference the class name from components — don't use Tailwind's arbitrary `animate-[...]` syntax inline.
- **Brand colors** used consistently across pages: `#1aae74` (primary green), `#114b2e` / `#1a3d2b` (dark green, CTAs/hover), `emerald-50` (light icon chips), `slate-*` for grayscale text/borders. Card shape conventions: `bg-white rounded-3xl p-8 shadow-sm`; field labels are `block text-xs font-semibold text-slate-500 tracking-widest uppercase mb-2`; inputs are `rounded-xl border border-slate-200 bg-slate-50 ... focus:ring-2 focus:ring-[#1aae74]/30`.
- **Key flows**:
  - `app/get-started/page.tsx` — role picker (hire help vs. become a provider).
  - `app/register/partner/page.tsx` — the main multi-step (5-step: Basic Info → Location → Expertise → Availability → Verification) provider registration form. Location dropdowns are powered by `hooks/use-locations.ts` (province → district → service_zone cascading fetches). The Expertise step includes an AI-assisted bio: blurring the bio field or clicking "Enhance" calls the backend's `/api/v1/ai/*` endpoints and merges predicted categories into the selected list without ever clearing manually-picked ones.
  - `app/profile/page.tsx` — logged-in provider's editable profile (tabs), using the same `service_provider`/`provider_service` shape as registration.
  - `app/services/page.tsx` + `lib/services-data.ts` — the real 12-category service taxonomy (Vehicle Repairs, Plumbing, Masonry & Construction, Carpentry & Woodwork, Electrical Work, Painting & Finishing, AC & Appliance Repair, Gardening & Landscaping, Cleaning Services, Security & Safety, IT & Electronics, Moving & Transport), each with real sub-categories and an image under `public/services/`. Treat this list as the source of truth for category names — they must match the `main_category`/`sub_category` rows in Supabase exactly (registration and the AI category-prediction flow both key off these names).
- Env vars: `NEXT_PUBLIC_BACKEND_URL` (backend base URL), `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Supabase JS client for auth). There is intentionally no `NEXT_PUBLIC_AI_API_URL` — AI calls go through the backend proxy, not directly from the browser.

## Working across the two apps

Because the frontend and backend evolve together (e.g. registration DTOs, category names, response envelope shape), when changing one, grep the other for matching field names/route paths before assuming a change is isolated. The `service_provider` / `provider_service` / `main_category` / `sub_category` / `service_zone` Supabase table shapes are defined only implicitly, through the queries in `providers.service.ts`, `categories.service.ts`, and `locations.service.ts` — there's no schema file in this repo to check against.
