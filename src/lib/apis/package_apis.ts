import axios from "axios";

// types.ts
export interface Package {
  id: string;
  name: string;
  type: string;
  apr: number;
  max: number;
}

// apis.ts
export const getPackages = async (
  amount?: string,
  term?: string
): Promise<Package[]> => {
  const url =
    amount && term
      ? `http://localhost:4000/api/packages/${amount}/${term}`
      : `http://localhost:4000/api/packages`;

  const response = await axios.get(url);
  if (response.status !== 200) {
    throw new Error("Failed to fetch packages");
  }
  return response.data;
};
