import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Souq = () => {
  const [selectDuration, setSelectDuration] = useState("3");
  const [showOffer, setShowOffer] = useState(false);
  const [requestAmount, setRequestAmount] = useState(10000);
  const navigate = useNavigate();

  const calculateLoan = () => {
    setShowOffer(true);
  };

  return (
    <div className="flex flex-col items-center p-10 mx-[10%] ">
      <h1 className="text-[30px] font-medium self-center mb-10">
        Souqpass Financing Loan
      </h1>
      <div className="flex flex-row items-center justify-between my-10 w-full">
        <div>
          <span className="text-[#06B6D4] font-medium text-[25px]">
            Request For Loan
          </span>
          <RadioGroup className="space-y-2 mt-5" defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label className="font-normal" htmlFor="r1">
                I Can Provide Monthly Revenue
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label className="font-normal" htmlFor="r2">
                I Can Provide Monthly Revenue
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <div className="space-x-2 mb-5">
            <span className="font-medium text-[20px]">Select Duration</span>
            <span className="text-[#ff0000]">*</span>
          </div>

          <div className="flex flex-row items-center space-x-5 w-fit p-1 bg-[#e5e5e5] rounded-lg">
            <button
              onClick={() => setSelectDuration("3")}
              className={`${
                selectDuration === "3" && " bg-[#00aeef]"
              } px-5 py-2 rounded-lg`}
            >
              <span className={`${selectDuration !== "3" && "text-[#6e6e6e]"}`}>
                3 Months
              </span>
            </button>
            <button
              onClick={() => setSelectDuration("6")}
              className={`${
                selectDuration === "6" && " bg-[#00aeef]"
              } px-5 py-2 rounded-lg`}
            >
              <span className={`${selectDuration !== "6" && "text-[#6e6e6e]"}`}>
                6 Months
              </span>
            </button>
            <button
              onClick={() => setSelectDuration("9")}
              className={`${
                selectDuration === "9" && " bg-[#00aeef]"
              } px-5 py-2 rounded-lg`}
            >
              <span className={`${selectDuration !== "9" && "text-[#6e6e6e]"}`}>
                9 Months
              </span>
            </button>
            {/*  <button
                onClick={() => setSelectDuration("12")}
                className={`${
                  selectDuration === "12" && " bg-[#00aeef]"
                } px-5 py-2 rounded-lg`}
              >
                <span
                  className={`${selectDuration !== "12" && "text-[#6e6e6e]"}`}
                >
                  12 Months
                </span>
              </button> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center w-full">
        <div className="flex flex-row items-center self-start space-x-3 mb-3">
          <Input className="" type="text" placeholder={"Feb, 2024 Revenue"} />
          <Input className="" type="text" placeholder={"Mar, 2024 Revenue"} />
          <Input className="" type="text" placeholder={"Apr, 2024 Revenue"} />
        </div>
        <span className="self-start mt-5">
          This Months Revenue: 189,072 Birr
        </span>
      </div>
      <h1 className="w-full h-[3px] bg-[#E5E6EB] my-10" />
      <div className="flex flex-row items-center justify-between w-full">
        <div className="self-start">
          <div className="mb-2">
            <span>Loan Term</span>
            <span className="text-[#ff0000]">*</span>
          </div>
          <div className="w-[300px]">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              onClick={() => calculateLoan()}
              className="bg-[#00ADEF] h-[40px] w-full mt-4"
            >
              Calculate
            </Button>
            {showOffer && (
              <div className="w-full flex items-center justify-between mt-3">
                <span className="text-[22px]">Offer</span>
                <span className="text-[22px]">ETB {100000}</span>
              </div>
            )}
          </div>
        </div>
        {showOffer && (
          <div className="w-[300px]">
            <span>Loan Request Amount</span>
            <Input type="text" value={requestAmount} />
            <Button
              onClick={() => navigate("/contract")}
              className="bg-[#00ADEF] h-[40px] w-full mt-4"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Souq;
