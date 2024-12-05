import { useFormContext } from "react-hook-form";
import { KYCFormData } from "../../../types/kyc-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function EmploymentInfo() {
  const { control } = useFormContext<KYCFormData>();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <FormField
          control={control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Occupation/Profession</FormLabel>
              <FormControl>
                <Input {...field} className="max-w-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="employerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer Name</FormLabel>
              <FormControl>
                <Input {...field} className="max-w-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="employerAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer Address</FormLabel>
              <FormControl>
                <Input {...field} className="max-w-md" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
