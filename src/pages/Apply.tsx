import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPurpose, getRequirements } from "@/lib/apis/dashboard_apis";
import { LoadingScreen } from "@/components/loading-screen";
import { Checkbox } from "@/components/ui/checkbox";
import StylizedServerError from "@/components/Error_Screen";

export default function Apply() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(2000);
  const [purpose, setPurpose] = useState<string>("");
  const minAmount = 2000;
  const maxAmount = 70000;

  const handlePackages = () => {
    navigate("/packages");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setAmount(value);
  };

  const handleBlur = () => {
    const numericValue = Number(amount);
    if (numericValue < minAmount) setAmount(minAmount);
    else if (numericValue > maxAmount) setAmount(maxAmount);
  };

  const togglePurpose = (id: string) => {
    setPurpose((prev: any) =>
      prev.includes(id)
        ? prev.filter((item: any) => item !== id)
        : [...prev, id]
    );
  };

  const requirements = useQuery({
    queryKey: ["requirements"],
    queryFn: getRequirements,
  });

  const purposes = useQuery({
    queryKey: ["purpose"],
    queryFn: getPurpose,
  });

  if (requirements.isLoading || purposes.isLoading) {
    return <LoadingScreen message="Preparing your dashboard ..." />;
  }

  if (requirements.isError || purposes.isError) {
    return <StylizedServerError query="requirements" />;
  }

  return (
    <div className="flex flex-col mx-auto p-6 space-y-8">
      <div className="self-center space-y-4">
        <h2 className="text-xl font-semibold">To get a loan you need to be:</h2>
        <ul className="space-y-2">
          {requirements.data?.requirements.map((req: any, index: any) => (
            <li className="flex items-center gap-2" key={index}>
              <svg
                className="w-5 h-5 text-sky-500"
                fill="none"
                strokeWidth="2"
                stroke="#15151c"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {req.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:w-[800px] self-center">
        <h1 className="text-2xl font-bold">Hi Adugna!</h1>

        <Card className="flex flex-col justify-center md:h-[250px] p-8 mt-4">
          <h2 className="text-xl font-bold text-center mb-4">
            How much would you like to borrow?
          </h2>
          <Input
            type="number"
            value={amount}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-3xl text-center text-[#15151c] font-bold mb-2"
          />
          <p className="text-center text-sm text-muted-foreground">
            $2,000 to $70,000 – $25 increments
          </p>
        </Card>
      </div>

      <div className="md:w-[80%] self-center space-y-4">
        <h2 className="text-xl font-bold">What will you use the money for?</h2>
        <RadioGroup defaultValue="business1" className="grid grid-cols-2 gap-4">
          {purposes.data?.purpose?.map((purp, i) => (
            <Label
              key={purp.id}
              className="border rounded-lg p-4 cursor-pointer [&:has(:checked)]:bg-muted"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={purpose.includes(`business${i + 1}`)}
                  value={`business${i + 1}`}
                  className="mt-0"
                  onCheckedChange={() => togglePurpose(`business${i + 1}`)}
                />
                <Store className="w-6 h-6 text-[#15151c]" />
                <span>{purp.title}</span>
              </div>
            </Label>
          ))}
        </RadioGroup>

        {/* <Collapsible className="w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4">
            <span>More loan purposes</span>
            <svg
              className="w-4 h-4"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md p-4">Additional purposes here...</div>
          </CollapsibleContent>
        </Collapsible> */}
        <Button
          onClick={() => handlePackages()}
          className="w-full text-lg py-6"
          size="lg"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}
