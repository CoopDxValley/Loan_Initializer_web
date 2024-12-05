import axios from "axios";

//types.ts
type SignUpRequest = {
  fullName: string; // User's full name
  phoneNumber: string; // User's phone number
  email: string; // User's email address
  password: string; // User's password
  confirmPassword: string; // User's confirmation of the password
  dateOfBirth: string; // User's date of birth (in MM/DD/YYYY format)
};

export const Signup = async (paramaters: SignUpRequest) => {
  const data = {
    fullName: paramaters.fullName,
    phoneNumber: paramaters.phoneNumber,
    email: paramaters.email,
    password: paramaters.password,
    confirmPassword: paramaters.confirmPassword,
    dateOfBirth: paramaters.dateOfBirth,
  };

  const response = await axios.post(
    "http://localhost:3000/api/auth/signup",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Signup Failed");
  }
  return response.data;
};
