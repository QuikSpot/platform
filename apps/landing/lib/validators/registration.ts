import { z } from 'zod';

const SL_PHONE = /^(\+94|0)[0-9]{9}$/;
const NIC_PATTERN = /^(\d{9}[VXvx]|\d{12})$/;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_PORTFOLIO_BYTES = 10 * 1024 * 1024;

export const step1Schema = z
  .object({
    fullName: z
      .string()
      .min(2, 'Full name must be at least 2 characters')
      .max(100, 'Full name is too long'),
    nicNumber: z
      .string()
      .min(1, 'NIC number is required')
      .regex(NIC_PATTERN, 'Enter a valid NIC (e.g. 987654321V or 200012345678)'),
    mobileNumber: z
      .string()
      .min(1, 'Mobile number is required')
      .regex(SL_PHONE, 'Enter a valid Sri Lankan mobile number (e.g. +94771234567)'),
    whatsappNumber: z.union([
      z.string().regex(SL_PHONE, 'Enter a valid Sri Lankan mobile number'),
      z.literal(''),
    ]),
    address: z.string().min(10, 'Address must be at least 10 characters'),
    email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Must include at least one uppercase letter')
      .regex(/[0-9]/, 'Must include at least one number')
      .regex(/[^A-Za-z0-9]/, 'Must include at least one special character'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine(d => d.password === d.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const step2Schema = z.object({
  province: z.string().min(1, 'Please select a province'),
  district: z.string().min(1, 'Please select a district'),
  serviceZones: z.array(z.string()).min(1, 'Select at least one service zone'),
});

export const step3Schema = z.object({
  primaryCategory: z.string().min(1, 'Please select a primary category'),
  experienceLevel: z.string().min(1, 'Please select your experience level'),
  subCategories: z.array(z.string()).min(1, 'Select at least one sub-category'),
  bio: z
    .string()
    .min(50, 'Bio must be at least 50 characters')
    .max(500, 'Bio must be under 500 characters'),
});

export const step4Schema = z
  .object({
    nightService: z.boolean(),
    serviceDays: z.array(z.string()).min(1, 'Select at least one service day'),
    workStartTime: z.string(),
    workEndTime: z.string(),
  })
  .refine(d => d.nightService || d.workStartTime < d.workEndTime, {
    message: 'End time must be after start time',
    path: ['workEndTime'],
  });

export const step5Schema = z
  .object({
    nicFrontImage: z.instanceof(File, { message: 'NIC front image is required' }),
    nicBackImage: z.instanceof(File, { message: 'NIC back image is required' }),
    selfieImage: z.instanceof(File, { message: 'Verification selfie is required' }),
    portfolio: z.instanceof(File).nullable().optional(),
    agreeTerms: z.boolean().refine(v => v, 'You must agree to the Terms & Conditions'),
    agreeCommission: z
      .boolean()
      .refine(v => v, 'You must acknowledge the platform commission'),
  })
  .superRefine((d, ctx) => {
    if (d.nicFrontImage instanceof File && d.nicFrontImage.size > MAX_IMAGE_BYTES)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Image must be under 5 MB',
        path: ['nicFrontImage'],
      });
    if (d.nicBackImage instanceof File && d.nicBackImage.size > MAX_IMAGE_BYTES)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Image must be under 5 MB',
        path: ['nicBackImage'],
      });
    if (d.selfieImage instanceof File && d.selfieImage.size > MAX_IMAGE_BYTES)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Image must be under 5 MB',
        path: ['selfieImage'],
      });
    if (d.portfolio instanceof File && d.portfolio.size > MAX_PORTFOLIO_BYTES)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Portfolio must be under 10 MB',
        path: ['portfolio'],
      });
  });

const STEP_SCHEMAS = [step1Schema, step2Schema, step3Schema, step4Schema, step5Schema];

export function validateStep(stepNumber: number, data: unknown): Record<string, string> {
  const schema = STEP_SCHEMAS[stepNumber - 1];
  if (!schema) return {};
  const result = schema.safeParse(data);
  if (result.success) return {};
  const errs: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = issue.path.join('.');
    if (!errs[key]) errs[key] = issue.message;
  }
  return errs;
}
