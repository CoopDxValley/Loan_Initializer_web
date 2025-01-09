import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { ArrowLeft, CalendarIcon, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updatePersonalInformation } from "@/lib/apis/settings_apis";
import { verifyOtp } from "@/lib/apis/otp_api";
import { useState } from "react";
import { LoadingScreen } from "../loading-screen";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
});

export default function PersonalInformation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
  });
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showOtp, setShowOtp] = useState(true);
  const [error, setError] = useState("");

  function onSubmit() {
    // console.log(values);
    setShowOtp(true);
    setError("");
    setModalVisible(true);
  }

  // Mutation for the API call
  const updateInfo = useMutation({
    mutationFn: (data: any) => updatePersonalInformation(data),

    onSuccess: () => {
      setSuccess(true);
      setModalVisible(true);
    },
    onError: (error: Error) => {
      setModalVisible(true);
    },
  });

  const otpCall = useMutation({
    mutationFn: (code: string) => verifyOtp({ otp: code }),
    onSuccess: () => {
      setShowOtp(false);
      // handlePasswordChange();
      updateInfo.mutate(form.getValues());
    },
    onError: (error: any) => {
      setError(error.message);
      setModalVisible(true);
    },
  });

  const handleOtpCall = (code: string) => {
    console.log(code);
    otpCall.mutate(code);
  };

  if (updateInfo.isPending || otpCall.isPending) {
    return <LoadingScreen message="Processing ..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <Button
            variant="ghost"
            className="mb-2 -ml-2 h-9 w-9"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Go back</span>
          </Button>
          <CardTitle className="text-2xl">Personal Information</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select your date of birth</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your phone number"
                        type="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      {showOtp ? (
        <Dialog open={modalVisible} onOpenChange={setModalVisible}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Enter Verification Code</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Please enter the verification code sent to your phone
              </p>
              <InputOTP
                maxLength={6}
                onComplete={handleOtpCall}
                className="gap-2"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
              <p className="text-sm text-muted-foreground">
                Didn&apos;t receive a code?{" "}
                <Button variant="link" className="p-0 h-auto">
                  Resend
                </Button>
              </p>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog open={modalVisible} onOpenChange={setModalVisible}>
          <DialogContent className="sm:max-w-md">
            <div className="flex flex-col items-center gap-4 p-6 text-center">
              {success ? (
                <>
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <h2 className="text-xl font-semibold">Information Updated</h2>
                  <p className="text-muted-foreground">
                    Your personal information has been successfully updated.
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="h-12 w-12 text-red-500" />
                  <h2 className="text-xl font-semibold">Failed to Save</h2>
                  <p className="text-muted-foreground">
                    An error occurred while saving your information. Please try
                    again.
                  </p>
                </>
              )}
              <Button onClick={() => setModalVisible(false)} className="mt-2">
                {success ? "Close" : "Try Again"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
