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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FinancialInfo() {
  const { control } = useFormContext<KYCFormData>();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={control}
            name="income"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Income</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    className="h-[40px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="incomeFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Income Frequency</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="sourceOfIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source of Income</FormLabel>
                <FormControl>
                  <Input {...field} className="h-[40px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="tin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Taxpayer Identification Number (TIN)</FormLabel>
                <FormControl>
                  <Input {...field} className="h-[40px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="passportPhotos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passport-Sized Photo</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    // {...field}
                    // value={""}
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={control}
            name="signatureSpecimen"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Signature Specimen</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    // {...field}
                    // value={field.name || ""}
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </div>
      </div>
    </div>
  );
}
