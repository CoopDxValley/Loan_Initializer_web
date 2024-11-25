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
  parameters: any = "All"
): Promise<Package[]> => {
  const response = await fetch(`/api/packages/${parameters}`);
  if (!response.ok) {
    throw new Error("Failed to fetch packages");
  }
  return response.json();
};
