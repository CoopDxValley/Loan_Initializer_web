import { z } from "zod";

export const kycFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  gender: z.enum(["male", "female", "other"]),
  dateOfBirth: z.date(),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"]),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  residentialAddress: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    subCity: z.string().min(1, "Sub-city is required"),
    woreda: z.string().min(1, "Woreda is required"),
  }),
  mailingAddress: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    subCity: z.string().optional(),
    woreda: z.string().optional(),
  }),
  idType: z.enum(["nationalId", "passport"]),
  idNumber: z.string().min(1, "ID number is required"),
  issuingAuthority: z.string().min(1, "Issuing authority is required"),
  expiryDate: z.date(),
  occupation: z.string().min(1, "Occupation is required"),
  employerName: z.string().min(1, "Employer name is required"),
  employerAddress: z.string().min(1, "Employer address is required"),
  income: z.number().positive("Income must be a positive number"),
  incomeFrequency: z.enum(["monthly", "annual"]),
  sourceOfIncome: z.string().min(1, "Source of income is required"),
  tin: z.string().min(1, "TIN is required"),
  sameAsResidential: z.boolean().default(false),
  passportPhotos: z
    .instanceof(FileList)
    .optional()
    .or(z.array(z.instanceof(File)).optional()),
  signatureSpecimen: z
    .instanceof(FileList)
    .optional()
    .or(z.array(z.instanceof(File)).optional()),
  idScan: z
    .instanceof(FileList)
    .optional()
    .or(z.array(z.instanceof(File)).optional()),
});

export type KYCFormData = z.infer<typeof kycFormSchema>;
