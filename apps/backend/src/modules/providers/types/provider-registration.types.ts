export interface ProviderRegistrationResult {
  id: string;
  fullName: string;
  mobileNumber: string;
  email: string | null;
  nicNumber: string;
  province: string | null;
  district: string | null;
  isActive: boolean;
  createdAt: Date;
}
