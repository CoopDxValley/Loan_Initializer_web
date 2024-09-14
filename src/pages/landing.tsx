import React from "react";
import Check from "../assets/Check.svg";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold uppercase text-[12px] text-[#00ADEF]">
          Personal Loans
        </h3>
        <h1 className="text-[#00ADEF] font-medium text-[30px]">
          Personal loans to start almost anything.
        </h1>
        <div className="bg-[#00ADEF] rounded-[20px] px-[20px] py-[5px]">
          <span className="text-[#fff]">Apply now</span>
        </div>
        <div className="bg-[#fff] rounded-[20px] border-[1px] border-[#00ADEF] px-[20px] py-[5px]">
          <span className="text-[#00ADEF]">Get a qoute</span>
        </div>
      </div>
      <div>
        <h2 className="font-medium text-[#37100C] text-[25px] my-2">
          Simple, 100% online
        </h2>
        <div className="flex space-x-10">
          <div className="flex flex-col">
            <span className="font-bold text-[15px] text-left mb-2">
              1. Get to know you
            </span>
            <span className="font-light text-left">
              Tell us about your loan and provide us some details about yourself
              and your finances.
            </span>
          </div>
          <div className="flex flex-col mt-5">
            <span className="font-bold text-[15px] text-left mb-2">
              2. Get your quote
            </span>
            <span className="font-light text-left">
              We provide you with your loan terms, your interest rate, borrowing
              limit, and repayments.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[15px] text-left mb-2">
              3. Get your money
            </span>
            <span className="font-light text-left">
              Accept your loan terms and provide some final details.
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-medium text-[#37100C] text-[25px] my-2">
          What we offer
        </h2>
        <div className="flex space-x-10">
          <div className="flex flex-col px-[55px] py-[40px] shadow-md">
            <span className="font-bold text-[20px] text-center">
              $2K - $70K
            </span>
            <div className="border-[2px] border-width-[15px] border-[#00ADEF] my-3"></div>
            <span className="font-bold text-center text-[14px]">
              Loan limits
            </span>
          </div>
          <div className="flex flex-col px-[55px] py-[40px] shadow-md">
            <span className="font-bold text-[20px] text-center">
              3, 5 or 7 years
            </span>
            <div className="border-[2px] border-width-[15px] border-[#00ADEF] my-3"></div>
            <span className="font-bold text-center text-[14px]">
              Loan terms
            </span>
          </div>
          <div className="flex flex-col px-[55px] py-[40px] shadow-md">
            <span className="font-bold text-[20px] text-center">$0</span>
            <div className="border-[2px] border-width-[15px] border-[#00ADEF] my-3"></div>
            <span className="font-bold text-center text-[14px]">
              Early repayment fee
            </span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Check />
          <span>You can get a 3, 5 or 7 year loan term¹</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
