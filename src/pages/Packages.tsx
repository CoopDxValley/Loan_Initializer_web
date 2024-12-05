import { LoadingScreen } from "@/components/loading-screen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getPackages } from "@/lib/apis/package_apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { XCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Packages() {
  const [term, setTerm] = useState("24");
  const [amount, setAmount] = useState("70000");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleApplication = (title: string) => {
    // if (title === "1") {
    // navigate("/Souq");
    navigate("/kyc");
    // }
  };

  // const queryClient = useQueryClient();

  // const packages = useQuery({
  //   queryKey: ["packages"],
  //   queryFn: async () => getPackages(amount, term),
  // });

  // const filterPackages = useMutation({
  //   mutationFn: ({ amount, term }: { amount: string; term: string }) =>
  //     getPackages(amount, term),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["packages"] });
  //   },
  //   onError: () => {
  //     console.log("called");
  //     setIsOpen(true);
  //   },
  // });

  // if (packages.isLoading || filterPackages.isPending) {
  //   return <LoadingScreen message="Preparing your packages ..." />;
  // }

  return (
    <div className="w-full">
      <div className="bg-[#09090b] text-white p-8 mb-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Find your perfect loan</h1>
          <p className="text-xl">
            Compare loans and see the lowest rate available to you
          </p>
        </div>
      </div>
      <div className=" w-full mx-auto px-4">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-[1fr,1fr,auto] items-end">
              <div>
                <Label htmlFor="amount">Loan amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    className="pl-7"
                    id="amount"
                    defaultValue="70000"
                    type="number"
                    onChange={(event) => setAmount(event.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="term">Loan term</Label>
                <div className="relative">
                  <Input
                    id="term"
                    type="number"
                    defaultValue="24"
                    onChange={(event) => setTerm(event.target.value)}
                    // style={{ zIndex: 10 }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    months
                  </span>
                </div>
              </div>
              <Button
                onClick={() => {
                  // filterPackages.mutate({ amount, term });
                }}
                className="bg-[#000] hover:bg-blue-700"
              >
                Update results
              </Button>
            </div>
          </CardContent>
        </Card>

        {[1, 2, 3, 4].map((index) => (
          <Card key={index} className="mb-4">
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-[auto,1fr,auto] items-center">
                <div className="flex items-center relative">
                  {/* <img
                    src="/assets/myGuarantor.svg"
                    alt="Guarantor MyLoan"
                    width={120}
                    height={80}
                    className="object-contain"
                  /> */}
                  <div className="flex flex-col">
                    <span className="font-medium">Souqpass Financing Loan</span>
                    <span className="text-[#73738C]">RFB Loan</span>
                  </div>
                  {/* <div className="absolute -top-2 -right-2">
                    <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                      CASHBACK!
                    </div>
                  </div> */}
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  <div>
                    <div className="text-sm text-gray-500">
                      Representative APR (fixed)
                    </div>
                    <div className="font-bold">9.9% APR</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">
                      Monthly repayment
                    </div>
                    <div className="font-bold">£183.62</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">
                      Total charge for credit
                    </div>
                    <div className="font-bold">£406.88</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">
                      Total amount repayable
                    </div>
                    <div className="font-bold">£4,406.88</div>
                  </div>
                </div>
                <Button
                  onClick={() => handleApplication(String(index))}
                  className="bg-[#000] hover:bg-blue-700 min-w-[100px]"
                >
                  Apply
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <XCircle className="h-5 w-5" />
              Invalid Search Parameters
            </DialogTitle>
            <DialogDescription>
              Your loan search contains invalid parameters. Please review and
              correct the following:
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <ul className="list-disc pl-5 space-y-2">
              <li>Loan amount must be a positive number</li>
              <li>Loan term must be at least 1 month</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
