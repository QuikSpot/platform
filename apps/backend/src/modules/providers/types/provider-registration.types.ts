export interface ProviderRegistrationResult {
  id: string;
  fullName: string;
  mobileNumber: string;
  email: string | null;
  nicNumber: string;
  province: string | null;
  district: string | null;
  languageCode: string;
  isActive: boolean;
  createdAt: Date;
}
