"use client";

import { FormEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KYCFormData, kycFormSchema } from "../../../types/kyc-form";
import { PersonalInfo } from "./personal-info";
import { AddressInfo } from "./address-info";
import { IdentificationInfo } from "./identification-info";
import { EmploymentInfo } from "./employement-info";
import { FinancialInfo } from "./financial-info";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "./breadcrumps";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { submitKycForm } from "@/lib/apis/kyc_apis";
import { LoadingScreen } from "../loading-screen";
import { useNavigate } from "react-router-dom";

export function KYCForm() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<KYCFormData>({
    // resolver: zodResolver(kycFormSchema),
    defaultValues: {
      residentialAddress: {},
      mailingAddress: {},
    },
  });

  const totalSteps = 5;

  const submitKyc = useMutation({
    mutationFn: (data: KYCFormData) => submitKycForm(data),
    onSuccess: () => {
      toast({
        title: "KYC Form Submitted",
        description: "Your KYC information has been successfully submitted.",
      });
      navigate("/Souq");
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Kyc Form submission failed",
        description:
          "An error occurred while submitting your KYC information. Please try again later.",
      });
      // navigate("/Souq");
    },
  });

  function onSubmit(data: KYCFormData) {
    // console.log(data);
    submitKyc.mutate(data);
  }

  if (submitKyc.isPending) {
    return <LoadingScreen message="Submitting kyc info ..." />;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <Card className="w-full sm:w-[80%] border-0">
        <CardHeader>
          <CardTitle>KYC Form</CardTitle>
          <CardDescription>
            Please fill out all required information for your loan application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Breadcrumbs
                currentStep={step}
                totalSteps={totalSteps}
                onStepClick={setStep}
              />
              {step === 1 && <PersonalInfo />}
              {step === 2 && <AddressInfo />}
              {step === 3 && <IdentificationInfo />}
              {step === 4 && <EmploymentInfo />}
              {step === 5 && <FinancialInfo />}

              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep((prev) => prev - 1)}
                  >
                    Previous
                  </Button>
                )}
                {step < totalSteps && (
                  <Button
                    type="button"
                    onClick={() => setStep((prev) => prev + 1)}
                  >
                    Next
                  </Button>
                )}
                {step === totalSteps && <Button type="submit">Submit</Button>}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
