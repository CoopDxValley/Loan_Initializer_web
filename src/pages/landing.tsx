/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import Check from "../assets/Check.svg?react";
import Car from "../assets/unsecured-car.svg?react";
import LandingImage from "../assets/landing_image.svg?react";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <div className="flex flex-col items-start">
          <h3 className="font-bold uppercase text-[12px] text-[#00ADEF]">
            Personal Loans
          </h3>
          <h1 className="text-[#00ADEF] font-medium text-[45px] leading-10 text-start my-3">
            Personal loans to <br /> start almost anything.
          </h1>
          <div className="flex space-x-3 mt-3">
            <div className="bg-[#00ADEF] rounded-[20px] px-[20px] py-[5px]">
              <span className="text-[#fff]">Apply now</span>
            </div>
            <div className="bg-[#fff] rounded-[20px] border-[1px] border-[#00ADEF] px-[20px] py-[5px]">
              <span className="text-[#00ADEF]">Get a qoute</span>
            </div>
          </div>
        </div>
        <LandingImage />
      </div>
      <div className="mt-5">
        <h2 className="font-semibold text-[#37100C] text-[30px] text-center my-2">
          Simple, 100% online
        </h2>
        <div className="flex space-x-10">
          <div className="flex flex-col">
            <span className="font-bold text-[15px] text-left mb-2">
              1. Get to know you
            </span>
            <span className="font-light text-left max-w-[300px]">
              Tell us about your loan and provide us some details about yourself
              and your finances.
            </span>
          </div>
          <div className="flex flex-col mt-5">
            <span className="font-bold text-[15px] text-left mb-2">
              2. Get your quote
            </span>
            <span className="font-light text-left max-w-[300px]">
              We provide you with your loan terms, your interest rate, borrowing
              limit, and repayments.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[15px] text-left mb-2">
              3. Get your money
            </span>
            <span className="font-light text-left max-w-[300px]">
              Accept your loan terms and provide some final details.
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-medium text-[#37100C] text-[30px] text-center my-2">
          What we offer
        </h2>
        <div className="flex space-x-10 my-10">
          <div className="flex flex-col px-[55px] py-[40px] shadow-md items-center">
            <span className="font-bold text-[20px] text-center">
              $2K - $70K
            </span>
            <div className="border-[2px] w-[100px] border-[#00ADEF] my-3"></div>
            <span className="font-bold text-center text-[14px]">
              Loan limits
            </span>
          </div>
          <div className="flex flex-col px-[55px] py-[40px] shadow-md items-center">
            <span className="font-bold text-[20px] text-center">
              3, 5 or 7 years
            </span>
            <div className="border-[2px] w-[100px] border-[#00ADEF] my-3"></div>
            <span className="font-bold text-center text-[14px]">
              Loan terms
            </span>
          </div>
          <div className="flex flex-col px-[55px] py-[40px] shadow-md items-center">
            <span className="font-bold text-[20px] text-center">$0</span>
            <div className="border-[2px] w-[100px] border-[#00ADEF] my-3"></div>
            <span className="font-bold text-center text-[14px]">
              Early repayment fee
            </span>
          </div>
          <div className="flex flex-col px-[55px] py-[40px] shadow-md items-center">
            <span className="font-bold text-[20px] text-center">$0</span>
            <div className="border-[2px] w-[100px] border-[#00ADEF] my-3"></div>
            <span className="font-bold text-center text-[14px]">
              Early repayment fee
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-2 mt-10">
        <div className="flex space-x-2">
          <Check />
          <span>You can get a 3, 5 or 7 year loan term¹</span>
        </div>
        <div className="flex space-x-2">
          <Check />
          <span>Secured fixed rates from 9.89%* p.a to 21.49% p.a.</span>
        </div>
        <div className="flex space-x-2">
          <Check />
          <span>Unsecured fixed rates from 9.99% p.a. to 24.99% p.a.²</span>
        </div>
        <div className="flex space-x-2">
          <Check />
          <span>Establishment fee of $150</span>
        </div>
        <div className="flex space-x-2">
          <Check />
          <span>You can repay weekly, fortnightly or monthly</span>
        </div>
      </div>
      <div className="flex flex-col mt-10 bg-[#fafafc] py-10 w-full self-center">
        <span className="font-bold text-[22px] text-center">
          Get a quick estimate
        </span>
        <span className="font-light my-3 text-center">
          Tell us about your loan and provide us some details about yourself and
          your finances.
        </span>
        <div className="border-[1px] border-[#00ADEF] p-2 rounded-[50px] self-center mt-5">
          <span className="font-medium text-[#00ADEF] text-[17px]">
            Personal loan calculator
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-7">
        <span className="font-medium text-[35px] text-[#37100C] text-[25px] self-center">
          Types of personal loans
        </span>
        <span className="self-center text-[20px] mt-2">
          Help for almost anything you need.
        </span>
        <div className="grid grid-cols-3 gap-10 mt-5">
          <div className="flex flex-col max-w-[250px]">
            <div className="self-center">
              <Car />
            </div>
            <span className="uppercase font-bold text-[17px] text-start my-3 self-center">
              Car Loans
            </span>
            <span className="font-light text-start text-[15px]">
              Got your eye on that new or used vehicle? Our auto loan can help
              get you out on the road.
            </span>
            <span className="text-[#00ADEF] text-[14px] text-start mt-1">
              Find out more
            </span>
          </div>
          <div className="flex flex-col max-w-[250px]">
            <div className="self-center">
              <Car />
            </div>
            <span className="uppercase font-bold text-[17px] text-start my-3 self-center">
              Car Loans
            </span>
            <span className="font-light text-start text-[15px]">
              Got your eye on that new or used vehicle? Our auto loan can help
              get you out on the road.
            </span>
            <span className="text-[#00ADEF] text-[14px] text-start mt-1">
              Find out more
            </span>
          </div>
          <div className="flex flex-col max-w-[250px]">
            <div className="self-center">
              <Car />
            </div>
            <span className="uppercase font-bold text-[17px] text-start my-3 self-center">
              Car Loans
            </span>
            <span className="font-light text-start text-[15px]">
              Got your eye on that new or used vehicle? Our auto loan can help
              get you out on the road.
            </span>
            <span className="text-[#00ADEF] text-[14px] text-start mt-1">
              Find out more
            </span>
          </div>
          <div className="flex flex-col max-w-[250px]">
            <div className="self-center">
              <Car />
            </div>
            <span className="uppercase font-bold text-[17px] text-start my-3 self-center">
              Car Loans
            </span>
            <span className="font-light text-start text-[15px]">
              Got your eye on that new or used vehicle? Our auto loan can help
              get you out on the road.
            </span>
            <span className="text-[#00ADEF] text-[14px] text-start mt-1">
              Find out more
            </span>
          </div>
          <div className="flex flex-col max-w-[250px]">
            <div className="self-center">
              <Car />
            </div>
            <span className="uppercase font-bold text-[17px] text-start my-3 self-center">
              Car Loans
            </span>
            <span className="font-light text-start text-[15px]">
              Got your eye on that new or used vehicle? Our auto loan can help
              get you out on the road.
            </span>
            <span className="text-[#00ADEF] text-[14px] text-start mt-1">
              Find out more
            </span>
          </div>
          <div className="flex flex-col max-w-[250px]">
            <div className="self-center">
              <Car />
            </div>
            <span className="uppercase font-bold text-[17px] text-start my-3 self-center">
              Car Loans
            </span>
            <span className="font-light text-start text-[15px]">
              Got your eye on that new or used vehicle? Our auto loan can help
              get you out on the road.
            </span>
            <span className="text-[#00ADEF] text-[14px] text-start mt-1">
              Find out more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
