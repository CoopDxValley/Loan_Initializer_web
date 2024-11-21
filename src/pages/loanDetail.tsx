"use client";

import { useRef, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const loanStages = [
  { name: "Application Submitted", status: "completed" },
  { name: "Initial Review", status: "completed" },
  { name: "Credit Check", status: "in-progress" },
  { name: "Final Approval", status: "pending" },
  { name: "Loan Disbursement", status: "pending" },
];

export default function LoanDetails() {
  const [isDocumentDialogOpen, setIsDocumentDialogOpen] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFilePick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger the file input click
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0]; // Get the first selected file
      setSelectedFile(file);
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

  const getProgressPercentage = () => {
    const completedStages = loanStages.filter(
      (stage) => stage.status === "completed"
    ).length;
    const inProgressStages = loanStages.filter(
      (stage) => stage.status === "in-progress"
    ).length;
    return (
      ((completedStages + inProgressStages * 0.5) / loanStages.length) * 100
    );
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
            Loan ID: {loan.id}
          </div>
        </div>
        <CardTitle className="text-2xl mt-4">{loan.type} Details</CardTitle>
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
              {loan.amount.toLocaleString()} ETB
            </div>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2 bg-yellow-500" />
              {loan.status}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Date Requested</Label>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              {loan.date}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Applicant</Label>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-muted-foreground" />
              {loan.applicant}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Interest Rate</Label>
            <div className="flex items-center">
              <span className="font-semibold">{loan.interestRate}%</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Loan Term</Label>
            <div className="flex items-center">
              <span className="font-semibold">{loan.term} months</span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <Label>Loan Purpose</Label>
          <p className="text-sm text-muted-foreground">{loan.purpose}</p>
        </div>
        <Separator />
        <div className="space-y-4">
          <Label>Application Progress</Label>
          <Progress value={getProgressPercentage()} className="w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loanStages.map((stage, index) => (
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
              </p>
              <span className="text-xs text-muted-foreground">
                Received: 2024-01-08 10:30 AM
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
      </CardFooter>
    </Card>
  );
}
