// types.ts
export interface LoanCalculationParameters {
  amount: number;
  duration: number; // in months
  revenue: { [key: string]: string }; // e.g., { "Jan": "10000", "Feb": "12000" }
}

export interface LoanPackage {
  id: string;
  name: string;
  apr: number; // Annual Percentage Rate
  monthlyRepayment: number; // Monthly repayment amount
  totalCharge: number; // Total interest charge
  totalRepayable: number; // Total amount to repay
}

// apis.ts

export const calculateLoanPackages = async (
  params: LoanCalculationParameters
): Promise<LoanPackage[]> => {
  const response = await fetch(`/api/calculate-loan`, {
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
