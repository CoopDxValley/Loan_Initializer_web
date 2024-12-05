import axios from "axios";

// types.ts
type LoginRequest = {
  email: string; // User's email address
  password: string; // User's password
};

type LoginResponse = {
  token?: string; // JWT or session token (if login is successful)
};

// apis.ts
export const SignIn = async (
  paramaters: LoginRequest
): Promise<LoginResponse> => {
  const data = {
    email: paramaters.email,
    password: paramaters.password,
  };

  const response = await axios.post(
    `http://localhost:3000/api/auth/login`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to login");
  }
  return response.data;
};
