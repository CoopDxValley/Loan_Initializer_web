"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";

export default function Component() {
  const [loanAmount, setLoanAmount] = useState("20000");
  const [loanTerm, setLoanTerm] = useState("5");
  const [creditHistory, setCreditHistory] = useState("excellent");
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");

  // Simple interest calculation (in reality, would be more complex)
  const calculateRepayment = () => {
    const amount = parseFloat(loanAmount);
    const years = parseInt(loanTerm);
    const rate = 0.1849; // 18.49% APR
    const monthlyRate = rate / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    if (paymentFrequency === "weekly") return (monthlyPayment * 12) / 52;
    if (paymentFrequency === "fortnightly") return (monthlyPayment * 12) / 26;
    return monthlyPayment;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-primary text-primary-foreground p-8 rounded-t-lg">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Personal loan calculator</h2>
          <p>Work out your repayments</p>
          <p className="text-sm">Get a quick estimate of your repayments</p>
        </div>
      </div>

      <Card className="p-6 border-t-0 rounded-t-none">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="loan-amount">
                Loan amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5">$</span>
                <Input
                  id="loan-amount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="pl-7 border-2"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4" />
                <span>You can apply to borrow $2,000 — $70,000</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Loan term</label>
              <div className="grid grid-cols-3 gap-2 border-2 rounded-md p-1">
                {["3", "5", "7"].map((term) => (
                  <Button
                    key={term}
                    variant={loanTerm === term ? "default" : "ghost"}
                    onClick={() => setLoanTerm(term)}
                    className={`${
                      loanTerm === term
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground"
                    } border-none`}
                  >
                    {term} years
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Credit history</label>
              <div className="grid grid-cols-3 gap-2 border-2 rounded-md p-1">
                {["excellent", "good", "average"].map((credit) => (
                  <Button
                    key={credit}
                    variant={creditHistory === credit ? "default" : "ghost"}
                    onClick={() => setCreditHistory(credit)}
                    className={`${
                      creditHistory === credit
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground"
                    } capitalize border-none`}
                  >
                    {credit}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4" />
                <span>Example interest rate 18.49%</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 border-2 rounded-md p-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Your repayment estimate
              </h3>
              <Tabs
                value={paymentFrequency}
                onValueChange={setPaymentFrequency}
              >
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="fortnightly">Fortnightly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-[#4a0e0e]">
                ${calculateRepayment().toFixed(2)}
              </div>
              <div className="text-muted-foreground">
                {paymentFrequency.charAt(0).toUpperCase() +
                  paymentFrequency.slice(1)}{" "}
                direct debit
              </div>
            </div>

            <Button className="w-full" size="lg">
              Apply now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
