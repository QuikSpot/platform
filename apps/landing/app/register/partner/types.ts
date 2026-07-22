export interface RegistrationFormData {
  fullName: string;
  nicNumber: string;
  mobileNumber: string;
  whatsappNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
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
}

export interface Category {
  id: string;
  name: string;
  subCategories: { id: string; name: string }[];
}

export type SetField = <K extends keyof RegistrationFormData>(
  key: K,
  value: RegistrationFormData[K],
) => void;

export interface BaseStepProps {
  form: RegistrationFormData;
  set: SetField;
  errors: Record<string, string>;
}
