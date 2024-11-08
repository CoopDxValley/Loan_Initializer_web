"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export default function Component() {
  const [duration, setDuration] = React.useState("3");
  const [revenue, setRevenue] = React.useState({
    feb: "",
    mar: "",
    apr: "",
  });
  const [showResults, setShowResults] = React.useState(false);
  const [showLoanOffer, setShowLoanOffer] = React.useState(false);
  const [amount, setAmount] = React.useState(2000);
  const navigate = useNavigate();

  const handleRevenueChange = (month: string, value: string) => {
    setRevenue((prev) => ({
      ...prev,
      [month]: value,
    }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className=" mx-auto p-6 md:px-40 space-y-8">
      <h1 className="text-2xl font-bold text-center">
        Souqpass Financing Loan
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">
            Request For Loan
          </h2>

          <RadioGroup defaultValue="can-provide">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="can-provide" id="can-provide" />
              <Label htmlFor="can-provide">I Can Provide Monthly Revenue</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cannot-provide" id="cannot-provide" />
              <Label htmlFor="cannot-provide">
                I Can Provide Monthly Revenue
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <h3 className="text-base font-semibold">Select Duration</h3>
            <span className="text-red-500 ml-1">*</span>
          </div>

          <div className="flex gap-2">
            {["3", "6", "9"].map((months) => (
              <Button
                key={months}
                variant={duration === months ? "default" : "secondary"}
                onClick={() => setDuration(months)}
                className="flex-1"
              >
                {months} Months
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Input
              placeholder="Feb, 2024 Revenue"
              value={revenue.feb}
              onChange={(e) => handleRevenueChange("feb", e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Mar, 2024 Revenue"
              value={revenue.mar}
              onChange={(e) => handleRevenueChange("mar", e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Apr, 2024 Revenue"
              value={revenue.apr}
              onChange={(e) => handleRevenueChange("apr", e.target.value)}
            />
          </div>
        </div>

        {/* <div className="text-sm">This Months Revenue: 189,072 Birr</div> */}

        <div className="space-y-4">
          <div className="flex items-center">
            <Label htmlFor="loan-term">Loan Term</Label>
            <span className="text-red-500 ml-1">*</span>
          </div>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3">3 Months</SelectItem>
              <SelectItem value="6">6 Months</SelectItem>
              <SelectItem value="9">9 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={() => setShowLoanOffer(true)}
          className="w-full"
          size="lg"
        >
          Calculate
        </Button>
      </div>

      <Dialog open={showLoanOffer} onOpenChange={setShowLoanOffer}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Select Loan Amount
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-2">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-center">
                  {formatCurrency(amount)}
                </div>
              </div>

              <div className="space-y-2">
                <Slider
                  value={[amount]}
                  min={2000}
                  max={70000}
                  step={25}
                  onValueChange={(value) => setAmount(value[0])}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatCurrency(2000)}</span>
                  <span>{formatCurrency(70000)}</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Move the slider to adjust your loan amount
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button
                onClick={() => {
                  setShowLoanOffer(false);
                  setShowResults(true);
                }}
                className="w-full"
              >
                Proceed
              </Button>
            </CardFooter>
          </Card>
        </DialogContent>
      </Dialog>

      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Loan Calculation Results</DialogTitle>
            <DialogDescription>
              Review your loan details and repayment schedule below.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Loan Amount:</h3>
                <p>10000 Birr</p>
              </div>
              <div>
                <h3 className="font-semibold">Interest Rate:</h3>
                <p>{(0.07 * 100).toFixed(2)}%</p>
              </div>
              <div>
                <h3 className="font-semibold">Monthly Payment:</h3>
                <p>{1000} Birr</p>
              </div>
              <div>
                <h3 className="font-semibold">Total Repayment:</h3>
                <p>{12000} Birr</p>
              </div>
            </div>
            {/* <div>
                <h3 className="font-semibold mb-2">Repayment Schedule:</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Remaining Balance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.schedule.map((item) => (
                      <TableRow key={item.month}>
                        <TableCell>{item.month}</TableCell>
                        <TableCell>{item.payment} Birr</TableCell>
                        <TableCell>{item.remainingBalance} Birr</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div> */}
          </div>

          <DialogFooter>
            <Button onClick={() => navigate("/contract")}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
