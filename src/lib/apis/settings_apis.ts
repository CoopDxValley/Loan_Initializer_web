import axios from "axios";

interface PersonalInformation {
  fullName: string;
  dateOfBirth: string; // Preferably in ISO format (e.g., YYYY-MM-DD)
  email: string;
  phoneNumber: string;
}

interface PasswordUpdate {
  currentPassword: string;
  newPassword: string;
}

export const updatePersonalInformation = async (
  personalInfo: PersonalInformation
): Promise<void> => {
  const response = await axios.put(
    "http://localhost:3000/api/personal-info",
    personalInfo
  );
  if (response.status !== 200) {
    throw new Error("Failed to update personal information");
  }
};

export const updatePassword = async (data: PasswordUpdate) => {
  return new Promise<{ success: boolean }>((resolve, reject) => {
    setTimeout(() => {
      if (data.newPassword === "password123") resolve({ success: true });
      else reject(new Error("Failed to update password"));
    }, 1000);
  });
};
