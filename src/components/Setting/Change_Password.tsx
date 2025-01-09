"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft, CheckCircle2, Eye, EyeOff, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "@/lib/apis/settings_apis";
import { verifyOtp } from "@/lib/apis/otp_api";
import { LoadingScreen } from "../loading-screen";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const formSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(3, "Password must be at least 3 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [showOtp, setShowOtp] = useState(true);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setShowOtp(true);
    setError("");
    setModalVisible(true);
  }

  // Mutation for the API call
  const updatePasswordMutation = useMutation({
    mutationFn: (data: { currentPassword: string; newPassword: string }) =>
      updatePassword(data),

    onSuccess: () => {
      setSuccess(true);
      setModalVisible(true);
    },
    onError: (error: Error) => {
      setSuccess(false);
      setModalVisible(true);
    },
  });

  const otpCall = useMutation({
    mutationFn: (code: string) => verifyOtp({ otp: code }),
    onSuccess: () => {
      setShowOtp(false);
      handlePasswordChange(
        form.getValues().currentPassword,
        form.getValues().newPassword
      );
    },
    onError: (error: any) => {
      setError(error.message);
      setModalVisible(true);
    },
  });

  const handlePasswordChange = (
    currentPassword: string = "current_password",
    newPassword: string = "new_password"
  ) => {
    updatePasswordMutation.mutate({
      currentPassword, // Replace with form input value
      newPassword, // Replace with form input value
    });
  };

  const handleOtpCall = (code: string) => {
    otpCall.mutate(code);
  };

  if (updatePasswordMutation.isPending || otpCall.isPending) {
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
          <CardTitle className="text-2xl">Change Password</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showCurrentPassword ? "text" : "password"}
                          placeholder="Enter current password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                          }
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm new password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Update Password
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      {showOtp ? (
        <Dialog open={isModalVisible} onOpenChange={setModalVisible}>
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
        <Dialog open={isModalVisible} onOpenChange={setModalVisible}>
          <DialogContent className="sm:max-w-md">
            <div className="flex flex-col items-center gap-4 p-6 text-center">
              {isSuccess ? (
                <>
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <h2 className="text-xl font-semibold">Password Updated</h2>
                  <p className="text-muted-foreground">
                    Your password has been successfully updated.
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="h-12 w-12 text-red-500" />
                  <h2 className="text-xl font-semibold">
                    Failed to Update Password
                  </h2>
                  <p className="text-muted-foreground">
                    An error occurred while updating your password. Please try
                    again.
                  </p>
                </>
              )}
              <Button onClick={() => setModalVisible(false)} className="mt-2">
                {isSuccess ? "Close" : "Try Again"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
