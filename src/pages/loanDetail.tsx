"use client";

import React, { useRef, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  FileText,
  User,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getLoanDetail,
  getLoanMessage,
  getLoanStages,
  uploadFile,
} from "@/lib/apis/loandetail_apis";
import { LoadingScreen } from "@/components/loading-screen";
import StylizedServerError from "@/components/Error_Screen";

const loanStages = {
  data: [
    { name: "Application Submitted", status: "completed" },
    { name: "Initial Review", status: "completed" },
    { name: "Credit Check", status: "in-progress" },
    { name: "Final Approval", status: "pending" },
    { name: "Loan Disbursement", status: "pending" },
  ],
};

export default function LoanDetails() {
  const [isDocumentDialogOpen, setIsDocumentDialogOpen] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const location: any = useLocation();
  const loan_id = location?.state?.loan_id;
  const [fileSuccess, setFileSuccess] = useState<boolean>(false);
  const [showFileSuccess, setShowFileSuccess] = useState<boolean>(false);

  if (!loan_id) {
    return <Navigate to="/myloans" replace />;
  }

  // const {
  //   isLoading,
  //   isError,
  //   data: loan,
  // } = useQuery({
  //   queryKey: ["loanDetail"],
  //   queryFn: () => getLoanDetail(loan_id),
  // });

  // const loanStages = useQuery({
  //   queryKey: ["loanDetail", { type: "stages" }],
  //   queryFn: () => getLoanStages(loan_id),
  // });

  // const loanMessage = useQuery({
  //   queryKey: ["loanDetail", { type: "message" }],
  //   queryFn: () => getLoanMessage(loan_id),
  // });

  // const upload = useMutation({
  //   mutationFn: ({ file, loanId }: { file: File; loanId: string }) =>
  //     uploadFile(file, loanId),
  //   onSuccess: () => {
  //     setFileSuccess(true);
  //     setShowFileSuccess(true);
  //   },
  //   onError: () => {
  //     setFileSuccess(false);
  //     setShowFileSuccess(true);
  //   },
  // });

  // if (isLoading || loanStages.isLoading || loanMessage.isLoading) {
  //   return <LoadingScreen message="Preparing your loan detail ..." />;
  // }

  // if (isError || loanStages.isError || loanMessage.isError) {
  //   return <StylizedServerError query={"loanDetail"} />;
  // }

  // if (upload.isPending) {
  //   return <LoadingScreen message="Uploading Document ..." />;
  // }

  const handleFilePick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger the file input click
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file: any = files[0];
      // upload.mutate({ file: file, loanId: loan_id });
      setIsDocumentDialogOpen(false);
      // alert(`File Selected: \nName: ${file.name}\nSize: ${file.size} bytes`);
    }
  };

  const handleEmailRedirect = () => {
    const recipient = "example@example.com";
    const subject = "Hello!";
    const body = "I wanted to reach out to you.";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink; // Redirect to the email app
  };

  // Mock loan data
  const loan = {
    id: "L12345",
    type: "Personal Loan",
    amount: 50000,
    status: "Under Review",
    date: "2023-04-01",
    applicant: "John Doe",
    purpose: "Debt Consolidation",
    interestRate: 7.5,
    term: 36,
  };

  const getProgressPercentage = (data: any) => {
    if (data) {
      const completedStages = data.filter(
        (stage: any) => stage.status === "completed"
      ).length;
      const inProgressStages = data.filter(
        (stage: any) => stage.status === "in-progress"
      ).length;
      return ((completedStages + inProgressStages * 0.5) / data.length) * 100;
    }
    return 0;
  };

  const getStatusColor = (status: string = "none"): string => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-500";
      case "Pending Approval":
        return "bg-blue-500";
      case "Processing":
        return "bg-purple-500";
      case "Approved":
        return "bg-green-500";
      default:
        return "bg-gray-400"; // Default color for unknown statuses
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Button onClick={() => navigate("/myloans")} variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Loans
          </Button>
          <div className="text-sm font-medium text-muted-foreground">
            Loan ID: {loan?.id}
          </div>
        </div>
        <CardTitle className="text-2xl mt-4">{loan?.type} Details</CardTitle>
        <CardDescription>
          Review the details and current progress of your loan application
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Loan Amount</Label>
            <div className="flex items-center text-2xl font-bold">
              <DollarSign className="h-5 w-5 mr-1 text-muted-foreground" />
              {loan?.amount.toLocaleString()} ETB
            </div>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <div className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(
                  loan?.status
                )}`}
              />
              {loan?.status}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Date Requested</Label>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              {loan?.date}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Applicant</Label>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-muted-foreground" />
              {loan?.applicant}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Interest Rate</Label>
            <div className="flex items-center">
              <span className="font-semibold">{loan?.interestRate}%</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Loan Term</Label>
            <div className="flex items-center">
              <span className="font-semibold">{loan?.term} months</span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <Label>Application Progress</Label>
          <Progress
            value={getProgressPercentage(loanStages?.data)}
            className="w-full"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loanStages.data?.map((stage: any, index: any) => (
              <div key={index} className="flex items-center space-x-2">
                {stage.status === "completed" && (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                )}
                {stage.status === "in-progress" && (
                  <Clock className="h-5 w-5 text-yellow-500" />
                )}
                {stage.status === "pending" && (
                  <AlertTriangle className="h-5 w-5 text-gray-300" />
                )}
                <span
                  className={
                    stage.status === "completed"
                      ? "text-green-700"
                      : stage.status === "in-progress"
                      ? "text-yellow-700"
                      : "text-gray-500"
                  }
                >
                  {stage.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Message from Loan Officer
          </h3>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm mb-2">
                Hello John, we need additional information about your income
                sources. Please upload your latest pay stubs or bank statements.
                {/* {loanMessage?.data?.message} */}
              </p>
              <span className="text-xs text-muted-foreground">
                Received: 2024-01-08 10:30 AM
                {/* Received: {loanMessage?.data?.date} */}
              </span>
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog
          open={isDocumentDialogOpen}
          onOpenChange={setIsDocumentDialogOpen}
        >
          <DialogTrigger asChild>
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Upload Additional Documents
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Additional Documents</DialogTitle>
              <DialogDescription>
                If requested, please upload any additional documents for your
                loan application.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button onClick={handleFilePick}>Select Files</Button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </DialogContent>
        </Dialog>
        <Button onClick={() => handleEmailRedirect()}>
          Contact Loan Officer
        </Button>
        <Dialog open={showFileSuccess} onOpenChange={setShowFileSuccess}>
          {fileSuccess ? (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Successful</DialogTitle>
                <DialogDescription>
                  Your loan document has been successfully uploaded. Our team
                  will review it shortly.
                </DialogDescription>
              </DialogHeader>
              <Button onClick={() => setShowFileSuccess(false)}>Close</Button>
            </DialogContent>
          ) : (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Failed</DialogTitle>
                <DialogDescription>
                  We encountered an error while uploading your loan document.
                  Please try again or contact support if the problem persists.
                </DialogDescription>
              </DialogHeader>
              <Button
                onClick={() => setShowFileSuccess(false)}
                variant="destructive"
              >
                Close
              </Button>
            </DialogContent>
          )}
        </Dialog>
      </CardFooter>
    </Card>
  );
}
