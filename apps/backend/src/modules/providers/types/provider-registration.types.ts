export interface ProviderRegistrationResult {
  id: string;
  fullName: string;
  mobileNumber: string;
  email: string | null;
  nicNumber: string;
  isActive: boolean;
  createdAt: Date;
}
