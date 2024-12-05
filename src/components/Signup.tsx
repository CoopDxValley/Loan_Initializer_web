import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Signup } from "@/lib/apis/signup_apis";
import { Alert, AlertDescription } from "./ui/alert";
import { LoadingScreen } from "./loading-screen";

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const Register = useMutation({
    mutationFn: async ({
      fullName,
      email,
      dateOfBirth,
      phoneNumber,
      password,
      confirmPassword,
    }: {
      fullName: string;
      email: string;
      dateOfBirth: string;
      phoneNumber: string;
      password: string;
      confirmPassword: string;
    }) =>
      Signup({
        fullName,
        email,
        dateOfBirth,
        phoneNumber,
        password,
        confirmPassword,
      }),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: any) => {
      // setError(error.message);
      navigate("/login");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
    } else {
      Register.mutate(formData);
    }
    console.log("Form submitted:", formData);
  };

  if (Register.isPending) {
    return <LoadingScreen message="Registering ..." />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" onClick={() => navigate("/")} />
        </button>
        <h2 className="text-2xl font-bold mb-2">Sign up</h2>
        <p className="text-gray-600 mb-6">
          Enter your details below to create your account and get started.
        </p>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-600">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="your name..."
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-600">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-gray-600">
                  Date of Birth
                </Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="MM / DD / YY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-gray-600">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+2519*******"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-600">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-600">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full bg-white text-black border border-gray-300"
              type="button"
            >
              Cancel
            </Button>
            <Button
              className="w-full bg-primary text-primary-foreground"
              type="submit"
            >
              Confirm
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <span
            onClick={() => navigate("/login")}
            className="text-primary hover:underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
