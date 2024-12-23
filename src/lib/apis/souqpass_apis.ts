// types.ts

export interface LoanCalculationParameters {
  amount?: number;
  duration: number; // in months
  revenue?: { [key: string]: string }; // e.g., { "Jan": "10000", "Feb": "12000" }
}

export interface MinMax {
  min: number; // Mininum Loan Amount
  max: number; //Max Loan Amount
}

export interface Amount {
  Amount: number; // Loan Amount
  interestRate: number; // Total interest charge
  monthlyRepayment: number; // Monthly repayment amount
  totalRepayable: number; // Total amount to repay
}

type LoanContractDetails = {
  name: string;
  address: string;
  city: string;
  contact: string; // email or phone Number
  idPassportNumber: string;
};

// apis.ts

export const calculateLoanBracket = async (
  params: LoanCalculationParameters
): Promise<MinMax> => {
  const response = await fetch(`/api/calculate-loan-bracket`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error("Failed to calculate loan packages");
  }

  return response.json();
};

export const calculateLoanPackage = async (
  params: LoanCalculationParameters
): Promise<Amount> => {
  const response = await fetch(`/api/calculate-loan-offer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error("Failed to calculate loan packages");
  }

  return response.json();
};

export const getKYCDetails = async (): Promise<LoanContractDetails> => {
  const response = await fetch(`/api/kyc-details`);

  if (!response.ok) {
    throw new Error("Failed to fetch loan contract details");
  }

  return response.json();
};
