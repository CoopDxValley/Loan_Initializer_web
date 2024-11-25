import { LoadingScreen } from "@/components/loading-screen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getPackages } from "@/lib/apis/package_apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Packages() {
  const { kyc } = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  const handleApplication = (title: string) => {
    if (!!kyc) {
      if (title === "1") {
        navigate("/Souq");
      }
    } else {
      navigate("/kyc1");
    }
  };

  const queryClient = useQueryClient();

  const packages = useQuery({
    queryKey: ["packages"],
    queryFn: async () => getPackages,
  });

  const filterPackages = useMutation({
    mutationFn: getPackages,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages"] });
    },
  });

  if (packages.isLoading) {
    return <LoadingScreen message="Preparing your packages ..." />;
  }

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
                  <Input className="pl-7" id="amount" defaultValue="70000" />
                </div>
              </div>
              <div>
                <Label htmlFor="term">Loan term</Label>
                <div className="relative">
                  <Input id="term" defaultValue="24" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    months
                  </span>
                </div>
              </div>
              <Button
                onClick={() => {
                  filterPackages.mutate({ amount: "", term: "" });
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
    </div>
  );
}
