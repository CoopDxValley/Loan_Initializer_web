import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function KYC1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tinNumber: "",
    validId: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6">
      <div className="mb-8">
        <button className="flex items-center text-sm font-medium mb-4">
          <ArrowLeft
            onClick={() => navigate("/packages")}
            className="mr-2 h-4 w-4"
          />
          Complete KYC to Proceed
        </button>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Basic info</h1>
          <div className="flex items-center space-x-2">
            <div className="h-1 w-16 bg-primary rounded" />
            <div className="h-1 w-16 bg-transparent border border-gray-300 rounded" />
            <span className="text-sm text-muted-foreground">1 of 2</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-base">
          Enter your details as they appear on your official documentations
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tinNumber">TIN number</Label>
            <Input
              id="tinNumber"
              name="tinNumber"
              value={formData.tinNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="validId">Valid Identification</Label>
            <Input
              id="validId"
              name="validId"
              value={formData.validId}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 sm:flex-row">
          <Button
            onClick={() => navigate("/kyc2")}
            type="submit"
            className="sm:w-24"
          >
            Next
          </Button>
          <Button type="button" variant="outline" className="sm:w-24">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
