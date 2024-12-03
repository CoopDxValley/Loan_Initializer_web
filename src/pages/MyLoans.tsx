"use client";

import { useState } from "react";
import { CreditCard, DollarSign, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getLoans,
  getTotalLoanAmount,
  getTotalPendingRequests,
} from "@/lib/apis/myloans_apis";
import { LoadingScreen } from "@/components/loading-screen";
import StylizedServerError from "@/components/Error_Screen";

const loanRequests = [
  {
    id: 1,
    type: "Personal Loan",
    amount: 5000,
    status: "Under Review",
    date: "2023-04-01",
  },
  {
    id: 2,
    type: "Home Loan",
    amount: 200000,
    status: "Pending Approval",
    date: "2023-03-28",
  },
  {
    id: 3,
    type: "Auto Loan",
    amount: 15000,
    status: "Processing",
    date: "2023-04-05",
  },
  {
    id: 4,
    type: "Business Loan",
    amount: 50000,
    status: "Under Review",
    date: "2023-04-02",
  },
  {
    id: 5,
    type: "Education Loan",
    amount: 25000,
    status: "Processing",
    date: "2023-04-03",
  },
];

export default function MyLoans() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [status, setStatus] = useState("All Statuses");

  const filteredLoans = loanRequests.filter(
    (loan) =>
      (loan.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loan.status.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (loan.status === status || status === "All Statuses")
  );

  // const myloans = useQuery({
  //   queryKey: ["myloans"],
  //   queryFn: () => getLoans,
  // });

  // const totalAmount = useQuery({
  //   queryKey: ["myloans", { type: "totalAmount" }],
  //   queryFn: async () => await getTotalLoanAmount(1),
  // });

  // const totalPending = useQuery({
  //   queryKey: ["myloans", { type: "totalPending" }],
  //   queryFn: async () => await getTotalPendingRequests(1),
  // });

  // if (myloans.isLoading || totalAmount.isLoading || totalPending.isLoading) {
  //   return <LoadingScreen message="Preparing your loans ..." />;
  // }

  // if (myloans.isError || totalAmount.isError || totalPending.isLoading) {
  //   return <StylizedServerError query={"myloans"} />;
  // }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <h1 className="text-2xl font-bold">Loan Dashboard</h1>
      </header>

      <main className="flex-1 p-6 bg-gray-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Loan Amount
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">295,000 ETB</div>
                <p className="text-xs text-muted-foreground">
                  Across all pending loans
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Requests
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">
                  Loan applications in process
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Loan Requests</CardTitle>
              <CardDescription>
                A list of your pending loan applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Search loans..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[300px]"
                  />
                  <Button variant="secondary">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                <Select onValueChange={(value: string) => setStatus(value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Statuses">All Statuses</SelectItem>
                    <SelectItem value="Under Review">Under Review</SelectItem>
                    <SelectItem value="Pending Approval">
                      Pending Approval
                    </SelectItem>
                    <SelectItem value="Processing">Processing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Loan Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Requested</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLoans.map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell className="font-medium">{loan.type}</TableCell>
                      <TableCell>{loan.amount.toLocaleString()} ETB</TableCell>
                      <TableCell>{loan.status}</TableCell>
                      <TableCell>{loan.date}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() =>
                            navigate("/loan_details", {
                              state: { loan_id: loan.id },
                            })
                          }
                          variant="ghost"
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
