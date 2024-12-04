import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  MessageSquare,
  PiggyBank,
  Star,
  Phone,
  Video,
  Send,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { pullFunds, setMeeting, setRating } from "@/lib/apis/rm_apis";
import { LoadingScreen } from "@/components/loading-screen";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function RM() {
  const [activeTab, setActiveTab] = useState("messages");
  const [feedback, setFeedback] = useState("");
  const [rate, setRate] = useState(0);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [sourceBank, setSourceBank] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [showMeeting, setShowMeeting] = useState<boolean>(false);
  const [showFund, setShowFund] = useState<boolean>(false);
  const [showRating, setShowRating] = useState<boolean>(false);
  const [meetingSuccess, setMeetingSuccess] = useState<boolean>(false);
  const [fundSuccess, setFundSuccess] = useState<boolean>(false);
  const [ratingSuccess, setRatingSuccess] = useState<boolean>(false);

  const handleRating = (value: number) => {
    setRate(value);
  };

  const meeting = useMutation({
    mutationFn: async ({
      date,
      time,
      purpose,
    }: {
      date: string;
      time: string;
      purpose: string;
    }) => setMeeting({ date, time, purpose }),
    onSuccess: () => {
      setShowMeeting(true);
      setMeetingSuccess(true);
    },
    onError: () => {
      setShowMeeting(true);
      setMeetingSuccess(true);
    },
  });

  const fund = useMutation({
    mutationFn: async ({
      sourceBank,
      amount,
      purpose,
    }: {
      sourceBank: string;
      amount: string;
      purpose: string;
    }) => pullFunds({ sourceBank, amount, purpose }),
    onSuccess: () => {
      setShowFund(true);
      setFundSuccess(true);
    },
    onError: () => {
      setShowFund(true);
      setFundSuccess(false);
    },
  });

  const rating = useMutation({
    mutationFn: async ({
      rating,
      feedback,
    }: {
      rating: number;
      feedback: string;
    }) => setRating({ rating, feedback }),
    onSuccess: () => {
      setShowRating(true);
      setRatingSuccess(true);
    },
    onError: () => {
      setShowRating(true);
      setRatingSuccess(false);
    },
  });

  if (meeting.isPending) {
    return <LoadingScreen message="Setting your meeting ..." />;
  }
  if (fund.isPending) {
    return <LoadingScreen message="Process your fund pulling request ..." />;
  }
  if (rating.isPending) {
    return <LoadingScreen message="Submitting your rating ..." />;
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Client Dashboard
            </CardTitle>
            <CardDescription>
              Manage your account and communicate with your RM
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt="Client"
                />
                <AvatarFallback>CL</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">Alice Johnson</h2>
              <p className="text-sm text-muted-foreground">Premium Client</p>
            </div>
            <div className="mt-6 space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setActiveTab("messages")}
              >
                <MessageSquare className="mr-2 h-4 w-4" /> Messages
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setActiveTab("meetings")}
              >
                <Calendar className="mr-2 h-4 w-4" /> Meetings
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setActiveTab("requests")}
              >
                <PiggyBank className="mr-2 h-4 w-4" /> Requests
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => setActiveTab("feedback")}
              >
                <Star className="mr-2 h-4 w-4" /> Feedback
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="md:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Your Relationship Manager</CardTitle>
              <CardDescription>John Doe is here to assist you</CardDescription>
            </div>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="RM" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="meetings">Meetings</TabsTrigger>
                <TabsTrigger value="requests">Requests</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>
              <TabsContent value="messages" className="mt-4">
                <Card>
                  <CardContent className="p-4">
                    <ScrollArea className="h-[400px] w-full pr-4">
                      <div className="space-y-4">
                        <div className="flex justify-end">
                          <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[80%]">
                            Hello, I need information about my loan application.
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-muted rounded-lg p-2 max-w-[80%]">
                            I'd be happy to help. Could you please provide your
                            application number?
                          </div>
                        </div>
                        {/* Add more messages here */}
                      </div>
                    </ScrollArea>
                    <div className="mt-4">
                      <form className="flex space-x-2">
                        <Input
                          className="flex-1"
                          placeholder="Type a message..."
                        />
                        <Button type="submit">
                          <Send className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="meetings" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule a Meeting</CardTitle>
                    <CardDescription>
                      Set up a meeting with your Relationship Manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="date" className="text-sm font-medium">
                            Date
                          </label>
                          <Input
                            id="date"
                            type="date"
                            onChange={(event) => setDate(event.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="time" className="text-sm font-medium">
                            Time
                          </label>
                          <Input
                            id="time"
                            type="time"
                            onChange={(event) => setTime(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="purpose"
                          className="text-sm font-medium"
                        >
                          Meeting Purpose
                        </label>
                        <Input
                          id="purpose"
                          placeholder="Briefly describe the purpose of the meeting"
                          onChange={(event) => setPurpose(event.target.value)}
                        />
                      </div>
                      <Button
                        className="w-full"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {
                          event.preventDefault();
                          meeting.mutate({ date, time, purpose });
                        }}
                      >
                        Request Meeting
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="requests" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Fund Pulling Request</CardTitle>
                    <CardDescription>
                      Request to pull funds from other banks
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="sourceBank"
                          className="text-sm font-medium"
                        >
                          Source Bank
                        </label>
                        <Input
                          id="sourceBank"
                          placeholder="Enter the name of the source bank"
                          onChange={(event) =>
                            setSourceBank(event.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="amount" className="text-sm font-medium">
                          Amount
                        </label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Enter the amount to transfer"
                          onChange={(event) => setAmount(event.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="purpose"
                          className="text-sm font-medium"
                        >
                          Purpose
                        </label>
                        <Input
                          id="purpose"
                          placeholder="Briefly describe the purpose of the transfer"
                          onChange={(event) => setPurpose(event.target.value)}
                        />
                      </div>
                      <Button
                        className="w-full"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {
                          event.preventDefault();
                          fund.mutate({ sourceBank, amount, purpose });
                        }}
                      >
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="feedback" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>RM Performance Feedback</CardTitle>
                    <CardDescription>
                      Provide feedback on your Relationship Manager's
                      performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Rating</label>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleRating(star)}
                              className="focus:outline-none  focus:ring-primary rounded-full"
                              aria-label={`Rate ${star} stars`}
                            >
                              <Star
                                className={`h-6 w-6 ${
                                  star <= rate
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                } cursor-pointer`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="feedback"
                          className="text-sm font-medium"
                        >
                          Your Feedback
                        </label>
                        <textarea
                          id="feedback"
                          className="w-full h-32 p-2 border rounded-md"
                          placeholder="Please provide your detailed feedback..."
                          onChange={(
                            event: React.ChangeEvent<HTMLTextAreaElement>
                          ) => setFeedback(event.target.value)}
                        ></textarea>
                      </div>
                      <Button
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {
                          event.preventDefault();
                          rating.mutate({ rating: rate, feedback });
                        }}
                        className="w-full"
                      >
                        Submit Feedback
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Modals */}
        <Dialog open={showMeeting} onOpenChange={setShowMeeting}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex items-center gap-4">
                {meetingSuccess ? (
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-500" />
                )}
                <div className="grid gap-1">
                  <DialogTitle>
                    {meetingSuccess ? "Meeting Scheduled" : "Scheduling Failed"}
                  </DialogTitle>
                  <DialogDescription>
                    {meetingSuccess
                      ? "Your meeting has been successfully scheduled. You'll receive a confirmation email shortly."
                      : "We couldn't schedule your meeting at this time. Please try again later."}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog open={showFund} onOpenChange={setShowFund}>
          <DialogContent className=" sm:max-w-md">
            <DialogHeader className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                {fundSuccess ? (
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-500" />
                )}
                <div className="grid gap-1">
                  <DialogTitle className="text-xl font-semibold">
                    {fundSuccess
                      ? "Fund Transfer Request Successful"
                      : "Fund Transfer Request Failed"}
                  </DialogTitle>
                  <DialogDescription className="">
                    {fundSuccess
                      ? `Your fund pulling request for ${amount} from ${sourceBank} has been successfully submitted. You will receive a confirmation email shortly.`
                      : "There was an error processing your fund pulling request. Please try again later."}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog open={showRating} onOpenChange={setShowRating}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                {ratingSuccess ? (
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-500" />
                )}
                <div className="grid gap-1">
                  <DialogTitle className="text-xl font-semibold">
                    {ratingSuccess ? "Feedback Submitted" : "Submission Failed"}
                  </DialogTitle>
                  <DialogDescription className="">
                    {ratingSuccess
                      ? `  Thank you for providing your feedback on your Relationship
                    Manager's performance.`
                      : "We encountered an error while submitting your feedback. Please try again."}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
