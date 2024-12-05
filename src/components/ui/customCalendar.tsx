import React from "react";
import { Calendar } from "./calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { format } from "date-fns";

export default function CustomCalendar({ selected, ...props }: any) {
  const [date, setDate] = React.useState(selected || new Date());

  React.useEffect(() => {
    if (selected) {
      setDate(selected);
    }
  }, [selected]);

  return (
    <Calendar
      {...props}
      selected={selected}
      month={date}
      onMonthChange={setDate}
      footer={
        <CustomCalendarFooter
          date={date}
          onChange={(newDate) => {
            setDate(newDate);
            props.onSelect?.(newDate);
          }}
        />
      }
    />
  );
}

function CustomCalendarFooter({
  date,
  onChange,
}: {
  date: Date;
  onChange: (date: Date) => void;
}) {
  return (
    <div className="flex justify-center pt-2">
      <Select
        onValueChange={(value) => {
          const newDate = new Date(date);
          newDate.setFullYear(parseInt(value));
          onChange(newDate);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder={date ? format(date, "yyyy") : "Select year"}
          />
        </SelectTrigger>
        <SelectContent className=" h-[300px]">
          {Array.from({ length: 121 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
