import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function KYC2() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    businessLicence: "",
    businessAddress: "",
    websiteUrl: "",
    complianceAml: "",
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
          <h1 className="text-lg font-semibold">Business info</h1>
          <div className="flex items-center space-x-2">
            <div className="h-1 w-16 bg-transparent border border-gray-300 rounded" />
            <div className="h-1 w-16 bg-primary rounded" />
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
            <Label htmlFor="firstName">Business name</Label>
            <Input
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Business type</Label>
            <Input
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tinNumber">Business Licence</Label>
            <Input
              id="businessLicence"
              name="businessLicence"
              value={formData.businessLicence}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="validId">Business Address</Label>
            <Input
              id="businessAddress"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="validId">Website url</Label>
            <Input
              id="websiteUrl"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="validId">Compliance Aml</Label>
            <Input
              id="complianceAml"
              name="complianceAml"
              value={formData.complianceAml}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 sm:flex-row">
          <Button
            onClick={() => navigate("/kyc1")}
            type="submit"
            className="sm:w-24"
          >
            Back
          </Button>
          <Button type="button" variant="outline" className="sm:w-24">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
