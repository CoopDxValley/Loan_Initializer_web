import axios from "axios";

export const verifyOtp = async (data: {
  otp: string;
}): Promise<{ success: boolean }> => {
  const response = await axios.post(
    "https://your-ajpi-domain.com/verify-otp",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to give ratings");
  }
  return response.data;
};
