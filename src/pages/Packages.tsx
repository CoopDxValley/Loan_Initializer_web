import { LoadingScreen } from "@/components/loading-screen";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getKYCDetails } from "@/lib/apis/kyc_apis";
import { getPackages } from "@/lib/apis/package_apis";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Packages() {
  const [loanAmount, setLoanAmount] = useState("70000");
  const [loanTerm, setLoanTerm] = useState("24");
  const [selectedLoans, setSelectedLoans] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLoanSelection = (loanId: string) => {
    setSelectedLoans((prev: any) =>
      prev.includes(loanId)
        ? prev.filter((id: any) => id !== loanId)
        : [...prev, loanId]
    );
  };

  useEffect(() => {
    filterPackages.mutate({});
  }, []);

  const filterPackages = useMutation({
    mutationFn: ({ amount, term }: { amount?: string; term?: string }) =>
      getPackages(amount, term),
    onSuccess: () => {},
    onError: (err) => {
      console.log(err);
    },
  });

  const kyc = useQuery({
    queryKey: ["kyc"],
    queryFn: async () => getKYCDetails(),
  });

  const handleSubmit = () => {
    console.log("Applying for loans:", selectedLoans);
    // Handle multiple loan applications here
    navigate("/kyc", { state: { kycData: kyc.data[0] } });
  };

  const handleUpdateResults = () => {
    filterPackages.mutate({ amount: loanAmount, term: loanTerm });
  };

  if (filterPackages.isPending || kyc.isLoading) {
    return <LoadingScreen message="Preparing your packages ..." />;
  }

  return (
    <div className="mx-auto p-6 space-y-6">
      <div className="grid md:grid-cols-2 gap-6 items-end">
        <div className="space-y-2">
          <Label htmlFor="loan-amount">Loan amount</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
            <Input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="pl-7"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="loan-term">Loan term</Label>
          <div className="flex gap-4 items-center">
            <Input
              id="loan-term"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
            <span className="text-gray-600">months</span>
          </div>
        </div>
        <Button
          onClick={handleUpdateResults}
          className="md:col-span-2 w-full md:w-auto md:ml-auto"
        >
          Update results
        </Button>
      </div>

      <div className="space-y-4">
        {filterPackages.data?.map((loan) => (
          <div
            key={loan.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg space-y-4 md:space-y-0"
          >
            <div className="flex items-center gap-4">
              <Checkbox
                id={`loan-${loan.id}`}
                checked={selectedLoans.includes(loan.id)}
                onCheckedChange={() => handleLoanSelection(loan.id)}
              />
              <div>
                <h3 className="font-medium">{loan.name}</h3>
                <p className="text-sm text-gray-600">Loan Name</p>
                <p className="font-semibold">{loan.apr}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-sm w-full md:w-auto">
              <div>
                <p className="text-gray-600">Loan Category</p>
                <p className="font-semibold">{loan.type}</p>
              </div>
              <div>
                <p className="text-gray-600">Apr</p>
                <p className="font-semibold">{loan.apr}%</p>
              </div>
              <div>
                <p className="text-gray-600">Maximum Amount</p>
                <p className="font-semibold">{loan.max}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={selectedLoans.length === 0}
        className="w-full md:w-auto"
      >
        Apply for {selectedLoans.length}{" "}
        {selectedLoans.length === 1 ? "loan" : "loans"}
      </Button>
    </div>
  );
}
