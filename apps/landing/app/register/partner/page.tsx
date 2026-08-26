'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { validateStep } from '@/lib/validators/registration';
import { uploadProviderDocument, type DocumentCategory } from '@/lib/upload-documents';
import { LocationStep } from './_components/location-step';
import { ExpertiseStep } from './_components/expertise-step';
import { ScheduleStep } from './_components/schedule-step';
import { PersonalStep } from './_components/personal-step';
import { PhoneStep } from './_components/phone-step';
import { ProgressSummary } from './_components/progress-summary';
import { ReviewStep } from './_components/review-step';
import { SignupShell } from './_components/signup-shell';
import { StepFooter, STEP_REGISTRY, TOTAL_STEPS } from './_components/step-config';
import { SuccessScreen } from './_components/success-screen';
import { VerificationStep } from './_components/verification-step';

type FormData = {
  phone: string;
  fullName: string;
  nicNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  languageCode: string;
  address: string;
  province: string;
  district: string;
  serviceZones: string[];
  primaryCategory: string;
  experienceLevel: string;
  subCategories: string[];
  bio: string;
  nightService: boolean;
  serviceDays: string[];
  workStartTime: string;
  workEndTime: string;
  nicFrontImage: File | null;
  nicBackImage: File | null;
  selfieImage: File | null;
  portfolio: File | null;
  agreeTerms: boolean;
  agreeCommission: boolean;
};

const INITIAL: FormData = {
  phone: '',
  fullName: '',
  nicNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
  languageCode: 'en',
  address: '',
  province: '',
  district: '',
  serviceZones: [],
  primaryCategory: '',
  experienceLevel: 'BEGINNER',
  subCategories: [],
  bio: '',
  nightService: false,
  serviceDays: [],
  workStartTime: '08:00',
  workEndTime: '18:00',
  nicFrontImage: null,
  nicBackImage: null,
  selfieImage: null,
  portfolio: null,
  agreeTerms: false,
  agreeCommission: false,
};

/** Maps a screen id (1..7) to the validator step number (1..5).
 *  Steps 1 & 2 in the new flow (phone + personal) both validate against the old
 *  step 1 schema; steps 3-7 in the new flow map to old 2-5 (skipping phone since
 *  the OTP screen handles that gate). */
function validatorStepFor(screen: number): number {
  if (screen === 1 || screen === 2) return 1;
  return screen - 1;
}

function validatorDataFor(screen: number, f: FormData): Record<string, unknown> {
  if (screen === 1 || screen === 2) {
    return {
      fullName: f.fullName,
      nicNumber: f.nicNumber,
      mobileNumber: f.phone,
      whatsappNumber: '',
      address: f.address,
      languageCode: f.languageCode,
      email: f.email,
      password: f.password,
      confirmPassword: f.confirmPassword,
    };
  }
  if (screen === 3) {
    return {
      province: f.province,
      district: f.district,
      serviceZones: f.serviceZones,
    };
  }
  if (screen === 4) {
    return {
      primaryCategory: f.primaryCategory,
      experienceLevel: f.experienceLevel,
      subCategories: f.subCategories,
      bio: f.bio,
    };
  }
  if (screen === 5) {
    return {
      nightService: f.nightService,
      serviceDays: f.serviceDays,
      workStartTime: f.workStartTime,
      workEndTime: f.workEndTime,
    };
  }
  return {
    nicFrontImage: f.nicFrontImage,
    nicBackImage: f.nicBackImage,
    selfieImage: f.selfieImage,
    portfolio: f.portfolio,
    agreeTerms: f.agreeTerms,
    agreeCommission: f.agreeCommission,
  };
}

const SESSION_KEY = 'instaFixdPartnerSignup';

export default function PartnerRegistration() {
  const [screen, setScreen] = useState<number>(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  // Hydrate from sessionStorage so the user can resume after closing the tab
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { screen?: number; form?: Partial<FormData>; completed?: number[] };
        if (parsed.screen && parsed.screen >= 1 && parsed.screen <= TOTAL_STEPS) {
          setScreen(parsed.screen);
        }
        if (parsed.completed) {
          setCompleted(new Set(parsed.completed));
        }
        if (parsed.form) {
          // Files can't be restored from JSON — start fresh for those
          setForm((f) => ({ ...f, ...parsed.form, nicFrontImage: null, nicBackImage: null, selfieImage: null, portfolio: null }));
        }
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      const { nicFrontImage: _a, nicBackImage: _b, selfieImage: _c, portfolio: _d, ...persistable } = form;
      void _a; void _b; void _c; void _d;
      sessionStorage.setItem(
        SESSION_KEY,
        JSON.stringify({ screen, form: persistable, completed: Array.from(completed) }),
      );
    } catch {
      /* storage may be full or disabled */
    }
  }, [form, screen, completed]);

  const set = useMemo(
    () =>
      function <K extends keyof FormData>(key: K, value: FormData[K]) {
        setForm((f) => ({ ...f, [key]: value }));
        setErrors((prev) => {
          if (!prev[key as string]) return prev;
          const next = { ...prev };
          delete next[key as string];
          return next;
        });
      },
    [],
  );

  /** Re-typeset `set` for a step's partial form shape. Subset of FormData
   *  is structurally compatible at runtime; the type just needs a nudge. */
  const setFor = <V extends Record<string, unknown>>(): ((
    key: keyof V,
    value: V[keyof V],
  ) => void) => set as unknown as (key: keyof V, value: V[keyof V]) => void;

  const stepTitle = STEP_REGISTRY[screen - 1]?.title ?? '';
  const stepSubtitle = STEP_REGISTRY[screen - 1]?.subtitle;

  const goNext = () => {
    const vStep = validatorStepFor(screen);
    const vData = validatorDataFor(screen, form);
    const stepErrors = validateStep(vStep, vData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCompleted((prev) => new Set([...prev, screen]));
    setScreen((s) => Math.min(s + 1, TOTAL_STEPS));
    // Scroll to top for the new screen
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setErrors({});
    setScreen((s) => Math.max(1, s - 1));
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goTo = (target: number) => {
    setErrors({});
    setScreen(target);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhoneVerified = (phone: string) => {
    set('phone', phone);
    setCompleted((prev) => new Set([...prev, 1]));
    setScreen(2);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Submit handler ─────────────────────────────────────────────
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setApiError(null);
    try {
      const mapExperienceLevel = (level: string): string => {
        const map: Record<string, string> = {
          'Entry Level (1–2 years)': 'BEGINNER',
          'Intermediate (3–5 years)': 'INTERMEDIATE',
          'Expert (5–10 years)': 'EXPERT',
          'Master (10+ years)': 'EXPERT',
        };
        return map[level] ?? 'BEGINNER';
      };

      const res = await fetch(`${backendUrl}/api/v1/provider/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          mobileNumber: form.phone,
          whatsappNumber: undefined,
          email: form.email,
          password: form.password,
          nicNumber: form.nicNumber,
          languageCode: form.languageCode,
          province: form.province,
          district: form.district,
          serviceZones: form.serviceZones,
          services: form.subCategories.map((sub) => ({
            mainCategory: form.primaryCategory,
            subCategory: sub,
            experienceLevel: mapExperienceLevel(form.experienceLevel),
            description: form.bio || undefined,
          })),
          availability: {
            nightService: form.nightService,
            serviceDays: form.serviceDays.join(','),
            workStartTime: form.workStartTime,
            workEndTime: form.workEndTime,
          },
          agreements: {
            agreeTerms: form.agreeTerms,
            agreeCommission: form.agreeCommission,
          },
        }),
      });

      const body = (await res.json().catch(() => ({}))) as { data?: { id: string }; message?: string };
      if (!res.ok) {
        setApiError(body?.message ?? 'Registration failed. Please try again.');
        return;
      }
      const providerId = body.data!.id;

      const filesToUpload: { category: DocumentCategory; file: File }[] = [
        ...(form.nicFrontImage ? [{ category: 'NIC_FRONT' as const, file: form.nicFrontImage }] : []),
        ...(form.nicBackImage ? [{ category: 'NIC_BACK' as const, file: form.nicBackImage }] : []),
        ...(form.selfieImage ? [{ category: 'SELFIE' as const, file: form.selfieImage }] : []),
        ...(form.portfolio ? [{ category: 'PORTFOLIO' as const, file: form.portfolio }] : []),
      ];

      if (filesToUpload.length > 0) {
        try {
          const confirmed = await Promise.all(
            filesToUpload.map(({ category, file }) =>
              uploadProviderDocument(backendUrl, providerId, category, file),
            ),
          );

          await fetch(`${backendUrl}/api/v1/provider/documents`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ providerId, documents: confirmed }),
          });
        } catch (docErr) {
          console.warn('Document upload failed. Registration was still successful.', docErr);
        }
      }

      // Clean up state
      setForm(INITIAL);
      setCompleted(new Set());
      setErrors({});
      setScreen(1);
      try {
        sessionStorage.removeItem(SESSION_KEY);
      } catch {
        /* noop */
      }
      setSubmitted(true);
    } catch {
      setApiError('Unable to reach the server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterAnother = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return <SuccessScreen onRegisterAnother={handleRegisterAnother} />;
  }

  // ── Render the active screen ───────────────────────────────────
  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <PhoneStep initialValue={form.phone} onVerified={handlePhoneVerified} backendUrl={backendUrl} />;
      case 2:
        return (
          <PersonalStep
            values={{
              fullName: form.fullName,
              nicNumber: form.nicNumber,
              email: form.email,
              password: form.password,
              confirmPassword: form.confirmPassword,
              languageCode: form.languageCode,
              address: form.address,
            }}
            errors={errors}
            onChange={setFor()}
            onSubmit={goNext}
            primaryLabel="Continue"
            primaryIcon={<ArrowRight className="w-4 h-4" />}
          />
        );
      case 3:
        return (
          <LocationStep
            values={{
              province: form.province,
              district: form.district,
              serviceZones: form.serviceZones,
            }}
            errors={errors}
            onChange={setFor()}
            onSubmit={goNext}
          />
        );
      case 4:
        return (
          <ExpertiseStep
            values={{
              primaryCategory: form.primaryCategory,
              experienceLevel: form.experienceLevel,
              subCategories: form.subCategories,
              bio: form.bio,
            }}
            errors={errors}
            onChange={setFor()}
            onSubmit={goNext}
            backendUrl={backendUrl}
          />
        );
      case 5:
        return (
          <ScheduleStep
            values={{
              nightService: form.nightService,
              serviceDays: form.serviceDays,
              workStartTime: form.workStartTime,
              workEndTime: form.workEndTime,
            }}
            errors={errors}
            onChange={setFor()}
            onSubmit={goNext}
          />
        );
      case 6:
        return (
          <VerificationStep
            values={{
              nicFrontImage: form.nicFrontImage,
              nicBackImage: form.nicBackImage,
              selfieImage: form.selfieImage,
              portfolio: form.portfolio,
              agreeTerms: form.agreeTerms,
              agreeCommission: form.agreeCommission,
            }}
            errors={errors}
            onChange={setFor()}
            onSubmit={goNext}
          />
        );
      case 7:
        return (
          <ReviewStep
            fullName={form.fullName}
            mobileNumber={form.phone}
            email={form.email}
            province={form.province}
            district={form.district}
            serviceZones={form.serviceZones}
            primaryCategory={form.primaryCategory}
            subCategories={form.subCategories}
            experienceLevel={form.experienceLevel}
            bio={form.bio}
            nightService={form.nightService}
            serviceDays={form.serviceDays}
            workStartTime={form.workStartTime}
            workEndTime={form.workEndTime}
            nicFrontImage={form.nicFrontImage}
            nicBackImage={form.nicBackImage}
            selfieImage={form.selfieImage}
            portfolio={form.portfolio}
            isSubmitting={isSubmitting}
            apiError={apiError}
            onEdit={goTo}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  // Phone screen has its own submit button (it triggers the OTP).
  // Review screen has its own submit button (final submit).
  // All other screens get a generic mobile "Continue" sticky CTA + desktop "Continue" in footer.
  const showShellFooter = screen !== 1 && screen !== 7;

  const primaryAction =
    showShellFooter ? (
      <StepFooter
        primaryLabel={screen === 6 ? 'Review application' : 'Continue'}
        primaryAction={goNext}
        primaryIcon={<ArrowRight className="w-4 h-4" />}
      />
    ) : screen === 7 ? (
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#1a3d2b] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm hover:bg-[#114b2e] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Submit application
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    ) : null;

  return (
    <SignupShell
      step={screen}
      totalSteps={TOTAL_STEPS}
      stepTitle={stepTitle}
      stepSubtitle={stepSubtitle}
      canGoBack={screen > 1}
      onBack={goBack}
      primaryAction={primaryAction ?? <div />}
      summary={<ProgressSummary currentStep={screen} completedSteps={completed} />}
    >
      {renderScreen()}
    </SignupShell>
  );
}
