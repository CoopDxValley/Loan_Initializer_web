import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function Apply() {
  const navigate = useNavigate();

  const handlePackages = () => {
    navigate("/packages");
  };

  return (
    <div className="flex flex-col mx-auto p-6 space-y-8">
      <div className="self-center space-y-4">
        <h2 className="text-xl font-semibold">To get a loan you need to be:</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
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
            18+ years
          </li>
          <li className="flex items-center gap-2">
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
            A permanent resident or citizen of ET
          </li>
          <li className="flex items-center gap-2">
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
            Earning a stable income
          </li>
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
            value="70000"
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
          {[...Array(6)].map((_, i) => (
            <Label
              key={i}
              className="border rounded-lg p-4 cursor-pointer [&:has(:checked)]:bg-muted"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value={`business${i + 1}`} className="mt-0" />
                <Store className="w-6 h-6 text-[#15151c]" />
                <span>Growing my business</span>
              </div>
            </Label>
          ))}
        </RadioGroup>

        <Collapsible className="w-full">
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
        </Collapsible>
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
