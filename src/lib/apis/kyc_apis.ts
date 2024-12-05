// types.ts
export interface KycFormPayload {
  fullName: string;
  gender: "male" | "female";
  dateOfBirth: string; // Ensure it's formatted as YYYY-MM-DD
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  phoneNumber: string;
  email: string;
  residentialAddress: {
    street: string;
    city: string;
    subCity: string;
    woreda: string;
  };
  mailingAddress?: {
    street?: string;
    city?: string;
    subCity?: string;
    woreda?: string;
  };
  idType: "nationalId" | "passport";
  idNumber: string;
  issuingAuthority: string;
  expiryDate: string; // Ensure it's formatted as YYYY-MM-DD
  occupation: string;
  employerName: string;
  employerAddress: string;
  income: number;
  incomeFrequency: "monthly" | "annual";
  sourceOfIncome: string;
  tin: string;
  sameAsResidential: boolean;
  passportPhotos?: FileList | File[];
  signatureSpecimen?: FileList | File[];
  idScan?: FileList | File[];
}

// apis.ts
import axios from "axios";
import { KYCFormData } from "../../../types/kyc-form";

export const submitKycForm = async (payload: KYCFormData): Promise<void> => {
  const formData = new FormData();

  // Append primitive fields
  Object.entries(payload).forEach(([key, value]) => {
    if (
      typeof value !== "object" ||
      value instanceof FileList ||
      Array.isArray(value)
    ) {
      formData.append(key, value as string | Blob);
    }
  });

  // Append nested objects like residentialAddress and mailingAddress
  if (payload.residentialAddress) {
    Object.entries(payload.residentialAddress).forEach(([key, value]) => {
      formData.append(`residentialAddress[${key}]`, value);
    });
  }
  if (payload.mailingAddress) {
    Object.entries(payload.mailingAddress).forEach(([key, value]) => {
      if (value) {
        formData.append(`mailingAddress[${key}]`, value);
      }
    });
  }

  // Append file uploads
  if (payload.passportPhotos) {
    Array.from(payload.passportPhotos).forEach((file, index) => {
      formData.append(`passportPhotos[${index}]`, file);
    });
  }
  if (payload.signatureSpecimen) {
    Array.from(payload.signatureSpecimen).forEach((file, index) => {
      formData.append(`signatureSpecimen[${index}]`, file);
    });
  }
  if (payload.idScan) {
    Array.from(payload.idScan).forEach((file, index) => {
      formData.append(`idScan[${index}]`, file);
    });
  }

  const response = await axios.post("http://localhost:3000/api/kyc", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status !== 200) {
    throw new Error("KYC form submission failed");
  }
};
