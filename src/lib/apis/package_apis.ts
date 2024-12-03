import axios from "axios";

// types.ts
export interface Package {
  id: string;
  name: string;
  type: string;
  apr: number;
  monthlyRepayment: number;
  totalCharge: number;
  totalRepayable: number;
}

// apis.ts
export const getPackages = async (
  amount: string,
  term: string
): Promise<Package[]> => {
  const response = await axios.get(
    `http://localhost:3000/api/packages/${amount}/${term}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch packages");
  }
  return response.data;
};
