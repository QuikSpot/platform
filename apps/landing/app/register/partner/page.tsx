'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { useLocations } from '@/hooks/use-locations';
import { validateMicroStep } from '@/lib/validators/registration';
import { PageChrome } from './page-chrome';
import { WizardShell } from './wizard-shell';
import type { WizardSection } from './progress-bar';
import type { RegistrationFormData, Category } from './types';
import { PhoneStep } from './steps/phone-step';
import { OtpStep } from './steps/otp-step';
import { AccountStep } from './steps/account-step';
import { AddressStep } from './steps/address-step';
import { LocationStep } from './steps/location-step';
import { TradeStep } from './steps/trade-step';
import { SpecializationsStep } from './steps/specializations-step';
import { AvailabilityStep } from './steps/availability-step';
import { DocumentsStep } from './steps/documents-step';
import { ReviewStep } from './steps/review-step';

type MicroStepId =
  | 'phone' | 'otp' | 'account' | 'address'
  | 'location'
  | 'trade' | 'specializations'
  | 'availability'
  | 'documents' | 'review';

const SECTION_META: { id: string; label: string; steps: MicroStepId[] }[] = [
  { id: 'basic-info', label: 'Basic Info', steps: ['phone', 'otp', 'account', 'address'] },
  { id: 'location', label: 'Location', steps: ['location'] },
  { id: 'expertise', label: 'Expertise', steps: ['trade', 'specializations'] },
  { id: 'availability', label: 'Availability', steps: ['availability'] },
  { id: 'verification', label: 'Verification', steps: ['documents', 'review'] },
];

const MICRO_STEPS: MicroStepId[] = SECTION_META.flatMap(s => s.steps);

const SECTIONS: WizardSection[] = SECTION_META.map(s => ({ id: s.id, label: s.label, stepCount: s.steps.length }));

function getSectionInfo(index: number) {
  let cursor = 0;
  for (const section of SECTION_META) {
    if (index < cursor + section.steps.length) {
      return { label: section.label, stepInSection: index - cursor + 1, stepsInSection: section.steps.length };
    }
    cursor += section.steps.length;
  }
  return { label: '', stepInSection: 1, stepsInSection: 1 };
}

const INITIAL_FORM: RegistrationFormData = {
  fullName: '',
  nicNumber: '',
  mobileNumber: '',
  whatsappNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
  address: '',
  province: '',
  district: '',
  serviceZones: [],
  primaryCategory: '',
  experienceLevel: 'Entry Level (1–2 years)',
  subCategories: [],
  bio: '',
  nightService: false,
  serviceDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  workStartTime: '08:00',
  workEndTime: '18:00',
  nicFrontImage: null,
  nicBackImage: null,
  selfieImage: null,
  portfolio: null,
  agreeTerms: false,
  agreeCommission: false,
};

export default function PartnerRegistration() {
  const [microStepIndex, setMicroStepIndex] = useState(0);
  const [form, setForm] = useState<RegistrationFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [otpValue, setOtpValue] = useState('');
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  const [zoneSearch, setZoneSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const [enhancingBio, setEnhancingBio] = useState(false);
  const [bioError, setBioError] = useState<string | null>(null);
  const [predictingCategory, setPredictingCategory] = useState(false);
  const lastPredictedBio = useRef('');

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${backendUrl}/api/v1/categories`, { signal: controller.signal })
      .then(r => r.json())
      .then((res: { data?: Category[] }) => {
        setCategories(res.data ?? []);
      })
      .catch(err => { if (err.name !== 'AbortError') setCategoriesLoading(false); })
      .finally(() => setCategoriesLoading(false));
    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setTimeout(() => setResendCooldown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCooldown]);

  const { provinces, districts, zones, provincesLoading, districtsLoading, zonesLoading } =
    useLocations(form.province, form.district);

  const set = <K extends keyof RegistrationFormData>(key: K, value: RegistrationFormData[K]) => {
    setForm(f => ({ ...f, [key]: value }));
    setErrors(prev => { const e = { ...prev }; delete e[key as string]; return e; });
  };

  const toggleZone = (zone: string) =>
    set('serviceZones', form.serviceZones.includes(zone)
      ? form.serviceZones.filter(z => z !== zone)
      : [...form.serviceZones, zone]);

  const toggleSubCategory = (cat: string) =>
    set('subCategories', form.subCategories.includes(cat)
      ? form.subCategories.filter(c => c !== cat)
      : [...form.subCategories, cat]);

  const handleSendOtp = async () => {
    const phoneErrors = validateMicroStep('phone', { mobileNumber: form.mobileNumber });
    if (Object.keys(phoneErrors).length > 0) {
      setErrors(phoneErrors);
      return;
    }
    setSendingOtp(true);
    setApiError(null);
    try {
      const res = await fetch(`${backendUrl}/api/v1/otp/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber: form.mobileNumber }),
      });
      if (!res.ok) {
        const body = await res.json() as { message?: string };
        setApiError(body?.message ?? 'Failed to send OTP. Please try again.');
        return;
      }
      setOtpValue('');
      setOtpError(null);
      setResendCooldown(30);
      setErrors({});
      setMicroStepIndex(i => (MICRO_STEPS[i] === 'phone' ? i + 1 : i));
    } catch {
      setApiError('Unable to send OTP. Please check your connection.');
    } finally {
      setSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otpValue.length < 6) return;
    setOtpLoading(true);
    setOtpError(null);
    try {
      const res = await fetch(`${backendUrl}/api/v1/otp/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber: form.mobileNumber, code: otpValue }),
      });
      if (!res.ok) {
        const body = await res.json() as { message?: string };
        setOtpError(body?.message ?? 'Invalid OTP. Please try again.');
        return;
      }
      setPhoneVerified(true);
      setMicroStepIndex(i => i + 1);
    } catch {
      setOtpError('Unable to verify. Please try again.');
    } finally {
      setOtpLoading(false);
    }
  };

  const applyPredictedCategories = (predictions: { main_category_name: string; sub_category_name: string }[]) => {
    if (predictions.length === 0) return;
    const predictedSubs = predictions.map(p => p.sub_category_name);
    setForm(f => ({
      ...f,
      subCategories: Array.from(new Set([...f.subCategories, ...predictedSubs])),
    }));
  };

  const predictCategoryFromBio = async (bioText: string) => {
    if (!bioText.trim() || bioText === lastPredictedBio.current) return;
    lastPredictedBio.current = bioText;
    setPredictingCategory(true);
    try {
      const res = await fetch(`${backendUrl}/api/v1/ai/predict-category`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: bioText }),
      });
      if (!res.ok) return;
      const body = await res.json() as { data?: { main_category_name: string; sub_category_name: string }[] };
      applyPredictedCategories(body.data ?? []);
    } catch {
      // Silent — category prediction is a background convenience, not a blocking action.
    } finally {
      setPredictingCategory(false);
    }
  };

  const handleBioBlur = () => {
    void predictCategoryFromBio(form.bio);
  };

  const handleEnhanceBio = async () => {
    if (!form.bio.trim()) {
      setBioError('Write a short bio first, then enhance it.');
      return;
    }
    setEnhancingBio(true);
    setBioError(null);
    try {
      const res = await fetch(`${backendUrl}/api/v1/ai/improve-text`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: form.bio }),
      });
      if (!res.ok) {
        setBioError('Unable to enhance your bio right now. Please try again.');
        return;
      }
      const body = await res.json() as { data?: { improved?: string } };
      const enhanced = body.data?.improved;
      if (enhanced) {
        set('bio', enhanced);
        await predictCategoryFromBio(enhanced);
      }
    } catch {
      setBioError('Unable to reach the enhancement service. Please try again.');
    } finally {
      setEnhancingBio(false);
    }
  };

  const mapExperienceLevel = (level: string): string => {
    const map: Record<string, string> = {
      'Entry Level (1–2 years)': 'BEGINNER',
      'Intermediate (3–5 years)': 'INTERMEDIATE',
      'Expert (5–10 years)': 'EXPERT',
      'Master (10+ years)': 'EXPERT',
    };
    return map[level] ?? 'BEGINNER';
  };

  const getStepData = (id: MicroStepId): unknown => {
    switch (id) {
      case 'phone': return { mobileNumber: form.mobileNumber };
      case 'account': return { fullName: form.fullName, nicNumber: form.nicNumber, email: form.email, password: form.password, confirmPassword: form.confirmPassword };
      case 'address': return { address: form.address, whatsappNumber: form.whatsappNumber };
      case 'location': return { province: form.province, district: form.district, serviceZones: form.serviceZones };
      case 'trade': return { primaryCategory: form.primaryCategory };
      case 'specializations': return { experienceLevel: form.experienceLevel, subCategories: form.subCategories, bio: form.bio };
      case 'availability': return { nightService: form.nightService, serviceDays: form.serviceDays, workStartTime: form.workStartTime, workEndTime: form.workEndTime };
      case 'documents': return { nicFrontImage: form.nicFrontImage, nicBackImage: form.nicBackImage, selfieImage: form.selfieImage, portfolio: form.portfolio };
      case 'review': return { agreeTerms: form.agreeTerms, agreeCommission: form.agreeCommission };
      default: return {};
    }
  };

  const goNext = () => {
    const id = MICRO_STEPS[microStepIndex];
    const newErrors = validateMicroStep(id, getStepData(id));
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setMicroStepIndex(i => i + 1);
  };

  const goBack = () => setMicroStepIndex(i => Math.max(0, i - 1));

  const goToStep = (id: string) => {
    const idx = MICRO_STEPS.indexOf(id as MicroStepId);
    if (idx >= 0) {
      setErrors({});
      setMicroStepIndex(idx);
    }
  };

  const handleSubmit = async () => {
    const reviewErrors = validateMicroStep('review', { agreeTerms: form.agreeTerms, agreeCommission: form.agreeCommission });
    if (Object.keys(reviewErrors).length > 0) {
      setErrors(reviewErrors);
      return;
    }
    setIsLoading(true);
    setApiError(null);
    try {
      // ── Step 1: Register provider (JSON) ────────────────────────
      const res = await fetch(`${backendUrl}/api/v1/provider/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          mobileNumber: form.mobileNumber,
          whatsappNumber: form.whatsappNumber || undefined,
          email: form.email,
          password: form.password,
          nicNumber: form.nicNumber,
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

      const body = await res.json() as { data?: { id: string }; message?: string };
      if (!res.ok) {
        setApiError(body?.message ?? 'Registration failed. Please try again.');
        return;
      }

      const providerId: string = body.data!.id;

      // ── Step 2: Upload documents to private storage ──────────────
      const hasFiles = form.nicFrontImage || form.nicBackImage || form.selfieImage || form.portfolio;

      if (hasFiles) {
        const uploadData = new FormData();
        uploadData.append('providerId', providerId);
        if (form.nicFrontImage) uploadData.append('nicFrontImage', form.nicFrontImage);
        if (form.nicBackImage) uploadData.append('nicBackImage', form.nicBackImage);
        if (form.selfieImage) uploadData.append('selfieImage', form.selfieImage);
        if (form.portfolio) uploadData.append('portfolio', form.portfolio);

        const docRes = await fetch(`${backendUrl}/api/v1/provider/documents`, {
          method: 'POST',
          body: uploadData,
        });

        if (!docRes.ok) {
          console.warn('Document upload failed. Registration was still successful.');
        }
      }

      setForm(INITIAL_FORM);
      setMicroStepIndex(0);
      setErrors({});
      setPhoneVerified(false);
      setOtpValue('');
      setOtpError(null);
      setSubmitted(true);
    } catch {
      setApiError('Unable to reach the server. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <PageChrome>
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md text-center">
          <div className="w-20 h-20 rounded-full bg-[#1aae74]/15 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#1aae74]" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#114b2e] mb-3">Application Submitted!</h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            Our curation team will review your application within 48 hours and reach out to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-[#1a3d2b] text-white font-semibold text-sm hover:bg-[#114b2e] transition-colors"
            >
              Register Another Partner
            </button>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </PageChrome>
    );
  }

  const stepId = MICRO_STEPS[microStepIndex];
  const { label: sectionLabel, stepInSection, stepsInSection } = getSectionInfo(microStepIndex);

  let primaryLabel = 'Continue';
  let onPrimary = goNext;
  let primaryDisabled = false;
  let primaryLoading = false;
  let secondaryAction: ReactNode = null;
  let maxWidth: 'md' | 'lg' | 'xl' | '2xl' = 'md';

  switch (stepId) {
    case 'phone':
      primaryLabel = 'Send code';
      onPrimary = handleSendOtp;
      primaryLoading = sendingOtp;
      primaryDisabled = !form.mobileNumber.trim();
      break;
    case 'otp':
      primaryLabel = 'Verify & continue';
      onPrimary = handleVerifyOtp;
      primaryLoading = otpLoading;
      primaryDisabled = otpValue.length < 6;
      secondaryAction = (
        <button
          type="button"
          onClick={handleSendOtp}
          disabled={sendingOtp || resendCooldown > 0}
          className="text-sm text-[#1aae74] font-medium hover:underline disabled:opacity-50 disabled:no-underline"
        >
          {resendCooldown > 0 ? `Resend code in ${resendCooldown}s` : sendingOtp ? 'Sending…' : 'Resend code'}
        </button>
      );
      break;
    case 'account':
      maxWidth = 'xl';
      primaryDisabled = !form.fullName.trim() || !form.nicNumber.trim() || !form.email.trim() || !form.password || !form.confirmPassword;
      break;
    case 'address':
      primaryDisabled = !form.address.trim();
      break;
    case 'location':
      maxWidth = 'xl';
      primaryDisabled = !form.province || !form.district || form.serviceZones.length === 0;
      break;
    case 'trade':
      maxWidth = '2xl';
      primaryDisabled = !form.primaryCategory;
      break;
    case 'specializations':
      maxWidth = 'xl';
      primaryDisabled = form.subCategories.length === 0 || !form.bio.trim();
      break;
    case 'availability':
      maxWidth = 'xl';
      primaryDisabled = form.serviceDays.length === 0;
      break;
    case 'documents':
      maxWidth = '2xl';
      primaryDisabled = !form.nicFrontImage || !form.nicBackImage || !form.selfieImage;
      break;
    case 'review':
      maxWidth = '2xl';
      primaryLabel = 'Submit Application';
      onPrimary = handleSubmit;
      primaryLoading = isLoading;
      primaryDisabled = !form.agreeTerms || !form.agreeCommission;
      break;
  }

  function renderStep() {
    switch (stepId) {
      case 'phone':
        return <PhoneStep form={form} set={set} errors={errors} apiError={apiError} />;
      case 'otp':
        return <OtpStep mobileNumber={form.mobileNumber} value={otpValue} onChange={setOtpValue} error={otpError} />;
      case 'account':
        return <AccountStep form={form} set={set} errors={errors} />;
      case 'address':
        return <AddressStep form={form} set={set} errors={errors} />;
      case 'location':
        return (
          <LocationStep
            form={form} set={set} errors={errors}
            provinces={provinces} districts={districts} zones={zones}
            provincesLoading={provincesLoading} districtsLoading={districtsLoading} zonesLoading={zonesLoading}
            zoneSearch={zoneSearch} setZoneSearch={setZoneSearch} toggleZone={toggleZone}
          />
        );
      case 'trade':
        return <TradeStep form={form} set={set} errors={errors} categories={categories} categoriesLoading={categoriesLoading} />;
      case 'specializations':
        return (
          <SpecializationsStep
            form={form} set={set} errors={errors} categories={categories}
            toggleSubCategory={toggleSubCategory}
            predictingCategory={predictingCategory}
            enhancingBio={enhancingBio}
            bioError={bioError}
            onEnhanceBio={handleEnhanceBio}
            onBioBlur={handleBioBlur}
          />
        );
      case 'availability':
        return <AvailabilityStep form={form} set={set} errors={errors} />;
      case 'documents':
        return <DocumentsStep form={form} set={set} errors={errors} />;
      case 'review':
        return <ReviewStep form={form} set={set} errors={errors} phoneVerified={phoneVerified} apiError={apiError} onEdit={goToStep} />;
      default:
        return null;
    }
  }

  return (
    <WizardShell
      sections={SECTIONS}
      globalStepIndex={microStepIndex}
      sectionLabel={sectionLabel}
      stepInSection={stepInSection}
      stepsInSection={stepsInSection}
      hero={microStepIndex === 0 ? {
        title: 'Become an InstaFixd Expert',
        subtitle: 'Join our ecosystem of premium service providers. Grow your local business with the support of a lush community.',
      } : undefined}
      onBack={microStepIndex > 0 ? goBack : undefined}
      primaryLabel={primaryLabel}
      onPrimary={onPrimary}
      primaryDisabled={primaryDisabled}
      primaryLoading={primaryLoading}
      secondaryAction={secondaryAction}
      maxWidth={maxWidth}
    >
      {renderStep()}
    </WizardShell>
  );
}
