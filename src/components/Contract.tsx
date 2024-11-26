import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Component() {
  const [showResult, setShowResult] = useState<"success" | "failure" | null>(
    null
  );
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Contract of Souq pass Digital lending Term Loan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-sm dark:prose-invert">
            <p className="text-sm">
              Now, therefore, the parties have entered these digital loan
              contract to be processed and disbursed digitally as per this
              contract and terms and conditions made an annex and integral part
              of this contract.
            </p>

            <p className="text-sm">
              This contract is made and entered into this 6 day of June the year
              2024 between Mr/Ms Motuma Gishu whose address is in AA City/Town,
              Contact motumagishu27@gmail.com ID / passport No. 54658784564
            </p>

            <p className="text-sm">and</p>

            <p className="text-sm">
              Cooperative Bank of Oromia S.C. whose address is Addis Ababa City,
              Kirkos Sub-city, Africa Avenue, Flamingo Area, Get House Building
              Tel: +251 115150229 P.O. Box: 16936.
            </p>

            <div className="space-y-4">
              <h3 className="text-base font-semibold">
                Article 1. Loan amount and its disbursement
              </h3>
              <p className="text-sm">
                1.1. The bank has agreed to grant a digital loan to the
                borrower, and the latter has agreed to borrow a loan amount of
                birr 100000.0
              </p>
              <p className="text-sm">
                1.2. The loan shall be disbursed to the borrower account
                maintained at the bank.
              </p>

              <h3 className="text-base font-semibold">
                Article 2. Interest Rate
              </h3>
              <p className="text-sm">
                The bank shall charge an interest rate of 7.0% per month on the
                daily outstanding principal loan balance.
              </p>

              <h3 className="text-base font-semibold">
                Article 3. Loan Repayment
              </h3>
              <p className="text-sm">
                3.1. The loan with its interest and other costs shall be totally
                repaid in 6 months.
              </p>
              <p className="text-sm">
                3.2. The repayment schedule will be provided over the platform.
              </p>
              <p className="text-sm">
                3.3. In the event of default, without prejudice to any rights
                and remedies the bank is entitled to under the law, the bank has
                the right to set off any outstanding loan, including interest,
                costs, and expenses, against any account of the borrower kept
                with any branch of the bank, cheques payable to the borrower,
                and money transfers made to the borrower through the bank.
                Additionally, it is understood that the bank will consistently
                block the amount equivalent to this month's repayment in the
                borrower's account as a preventive measure.
              </p>

              <h3 className="text-base font-semibold">
                Article 4. Applicable Law
              </h3>
              <p className="text-sm">
                This contract shall be subject to, governed by, and constructed
                in accordance with the relevant provision of Ethiopian Law.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="agreement"
              checked={agreed}
              onCheckedChange={(checked: boolean) => setAgreed(checked)}
            />
            <Label
              htmlFor="agreement"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the banks loan agreement
            </Label>
          </div>

          <Button
            onClick={() => setShowResult("success")}
            disabled={!agreed}
            className="w-full sm:w-auto"
          >
            Apply
          </Button>
        </CardContent>
      </Card>
      <Dialog
        open={showResult !== null}
        onOpenChange={() => setShowResult(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          {showResult === "success" ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-center flex flex-col items-center gap-2">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  Loan Application Successful!
                </DialogTitle>
                <DialogDescription className="text-center">
                  Your loan application has been received and is being
                  processed.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Loan Details:</h4>
                  <p className="text-sm">Amount: 100,000 birr</p>
                  <p className="text-sm">Interest Rate: 7.0% per month</p>
                  <p className="text-sm">Term: 6 months</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Next Steps:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Review your email for confirmation</li>
                    <li>Prepare necessary documents</li>
                    <li>Wait for our call for further instructions</li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-center flex flex-col items-center gap-2">
                  <AlertCircle className="h-12 w-12 text-red-500" />
                  Loan Application Unsuccessful
                </DialogTitle>
                <DialogDescription className="text-center">
                  We're sorry, but we couldn't process your loan application at
                  this time.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Possible Reasons:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Insufficient credit score</li>
                    <li>Incomplete or incorrect information</li>
                    <li>Recent loan applications or existing debts</li>
                    <li>Income requirements not met</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">What You Can Do:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Review your application for any errors</li>
                    <li>Check your credit report for discrepancies</li>
                    <li>Consider improving your credit score</li>
                    <li>Speak with our financial advisor for guidance</li>
                  </ul>
                </div>
              </div>
            </>
          )}
          <DialogFooter>
            {showResult === "success" ? (
              <Button className="w-full" onClick={() => navigate("/myloans")}>
                Close
              </Button>
            ) : (
              <Button className="w-full" onClick={() => setShowResult(null)}>
                Try Again
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
