import axios from "axios";

// types.ts
export interface Loans {
  id: string;
  loan_Type: string;
  amount: number;
  status: string;
  date_requested: string;
}

// apis.ts
export const getLoans = async () => {
  console.log("fetched");
  const response = await axios.get(`http://localhost:3000/api/loans`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch Loans");
  }
  return response.data;
};

export const getTotalLoanAmount = async (
  parameters: any = ""
): Promise<{ totalAmount: Number }> => {
  const response = await axios.get(
    `http://localhost:3000/api/loans/totalAmount/${parameters}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch total loan amount");
  }
  return response.data;
};

export const getTotalPendingRequests = async (
  parameters: any = ""
): Promise<{ totalPending: Number }> => {
  const response = await axios.get(
    `http://localhost:3000/api/loans/totalPending/${parameters}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch total pending amount");
  }
  return response.data;
};
