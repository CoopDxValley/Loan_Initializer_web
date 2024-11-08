/// <reference types="vite-plugin-svgr/client" />
import React, { useState } from "react";
import Check from "../assets/Check.svg?react";
import Car from "../assets/unsecured-car.svg?react";
import LandingImage from "../assets/landing_image.svg?react";
import Header from "../components/Header";
import Signup from "../components/Signup";
import Login from "../components/Login";

const Landing = () => {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-[#fafafc]">
        <div className="flex items-center justify-center bg-[#fff] px-5 py-10 w-full">
          <div className="flex flex-col items-center md:items-start ">
            <h3 className="font-medium uppercase text-[15px] text-[#15151c]">
              Personal Loans
            </h3>
            <h1 className="text-[#15151c] md:max-w-[600px] font-medium text-[40px] md:text-[60px] leading-[60px] text-center md:text-start my-3">
              Personal loans to start almost anything.
            </h1>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-3">
              <div
                onClick={() => setSignup(true)}
                className="bg-[#15151c] rounded-[100px] px-[50px] py-[15px] cursor-pointer"
              >
                <span className="text-[#fff] text-[19px]">Apply now</span>
              </div>
              {/* <div className="bg-[#fff] rounded-[100px] border-[1px] border-[#15151c] px-[50px] py-[15px] cursor-pointer">
                <span className="text-[#15151c] text-[19px]">Get a qoute</span>
              </div> */}
            </div>
          </div>

          <LandingImage className="hidden md:block" />
        </div>
        <div className="mt-20">
          <h2 className="font-bold text-[#37100C] text-[40px] text-center my-2">
            Simple, 100% online
          </h2>
          <div className="flex flex-col items-center mt-5 md:items-start md:flex-row md:space-x-10">
            <div className="flex flex-col ">
              <span className="font-bold text-[18px] text-center md:text-start mb-2">
                1. Get to know you
              </span>
              <span className="font-light text-center md:text-start max-w-[300px]">
                Tell us about your loan and provide us some details about
                yourself and your finances.
              </span>
            </div>
            <div className="flex flex-col mt-5">
              <span className="font-bold text-[18px] text-center md:text-start mb-2">
                2. Get your quote
              </span>
              <span className="font-light text-center md:text-start max-w-[300px]">
                We provide you with your loan terms, your interest rate,
                borrowing limit, and repayments.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[18px] text-center md:text-start mb-2">
                3. Get your money
              </span>
              <span className="font-light text-center md:text-start max-w-[300px]">
                Accept your loan terms and provide some final details. Most
                loans are fully funded within 24 hours.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="font-bold text-[#37100C] text-[40px] text-center my-2">
            What we offer
          </h2>
          <div className="grid grid-cols-1 gap-3 md:flex md:space-x-10 my-10">
            <div className="flex flex-col px-[55px] py-[40px] shadow-md items-center">
              <span className="font-bold text-[20px] text-center">
                $2K - $70K
              </span>
              <div className="border-[2px] w-[100px] border-[#15151c] my-3"></div>
              <span className="font-bold text-center text-[14px]">
                Loan limits
              </span>
            </div>
            <div className="flex flex-col px-[55px] py-[40px] shadow-md items-center">
              <span className="font-bold text-[20px] text-center">
                3, 5 or 7 years
              </span>
              <div className="border-[2px] w-[100px] border-[#15151c] my-3"></div>
              <span className="font-bold text-center text-[14px]">
                Loan terms
              </span>
            </div>
            <div className="flex flex-col px-[55px] py-[40px] shadow-md items-center">
              <span className="font-bold text-[20px] text-center">$0</span>
              <div className="border-[2px] w-[100px] border-[#15151c] my-3"></div>
              <span className="font-bold text-center text-[14px]">
                Early repayment fee
              </span>
            </div>
            <div className="flex flex-col px-[55px] py-[40px] shadow-md items-center">
              <span className="font-bold text-[20px] text-center">$0</span>
              <div className="border-[2px] w-[100px] border-[#15151c] my-3"></div>
              <span className="font-bold text-center text-[14px]">
                Early repayment fee
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2 mt-10 px-3">
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
        <div className="flex flex-col mt-10 bg-[#fff] py-10 w-full self-center">
          <span className="font-bold text-[22px] text-center">
            Get a quick estimate
          </span>
          <span className="font-light my-3 text-center">
            Tell us about your loan and provide us some details about yourself
            and your finances.
          </span>
          <div className="border-[1px] border-[#15151c] p-2 px-4 rounded-[50px] self-center mt-5 cursor-pointer">
            <span className="font-medium text-[#15151c] text-[17px]">
              Personal loan calculator
            </span>
          </div>
        </div>
        <div className="flex flex-col my-20">
          <span className="font-bold text-center md:text-start text-[35px] text-[#37100C] text-[40px] self-center">
            Types of personal loans
          </span>
          <span className="self-center text-[24px] text-[#575757] mt-2 px-3">
            Help for almost anything you need.
          </span>
          <div className="grid  md:grid-cols-3 gap-10 mt-5">
            <div className="flex flex-col px-3 md:max-w-[255px]">
              <div className="self-center">
                <Car />
              </div>
              <span className="uppercase font-bold text-[18px] text-start my-3 self-center">
                Car Loans
              </span>
              <span className="font-light text-start text-[#575757] text-[15px]">
                Got your eye on that new or used vehicle? Our auto loan can help
                get you out on the road.
              </span>
              <span className="text-[#15151c] text-[15px] text-start mt-3">
                Find out more
              </span>
            </div>
            <div className="flex flex-col px-3 md:max-w-[255px]">
              <div className="self-center">
                <Car />
              </div>
              <span className="uppercase font-bold text-[18px] text-start my-3 self-center">
                Car Loans
              </span>
              <span className="font-light text-start text-[#575757] text-[15px]">
                Got your eye on that new or used vehicle? Our auto loan can help
                get you out on the road.
              </span>
              <span className="text-[#15151c] text-[15px] text-start mt-3">
                Find out more
              </span>
            </div>
            <div className="flex flex-col px-3 md:max-w-[255px]">
              <div className="self-center">
                <Car />
              </div>
              <span className="uppercase font-bold text-[18px] text-start my-3 self-center">
                Car Loans
              </span>
              <span className="font-light text-start text-[#575757] text-[15px]">
                Got your eye on that new or used vehicle? Our auto loan can help
                get you out on the road.
              </span>
              <span className="text-[#15151c] text-[15px] text-start mt-3">
                Find out more
              </span>
            </div>
            <div className="flex flex-col px-3 md:max-w-[255px]">
              <div className="self-center">
                <Car />
              </div>
              <span className="uppercase font-bold text-[18px] text-start my-3 self-center">
                Car Loans
              </span>
              <span className="font-light text-start text-[#575757] text-[15px]">
                Got your eye on that new or used vehicle? Our auto loan can help
                get you out on the road.
              </span>
              <span className="text-[#15151c] text-[15px] text-start mt-3">
                Find out more
              </span>
            </div>
            <div className="flex flex-col px-3 md:max-w-[255px]">
              <div className="self-center">
                <Car />
              </div>
              <span className="uppercase font-bold text-[18px] text-start my-3 self-center">
                Car Loans
              </span>
              <span className="font-light text-start text-[#575757] text-[15px]">
                Got your eye on that new or used vehicle? Our auto loan can help
                get you out on the road.
              </span>
              <span className="text-[#15151c] text-[15px] text-start mt-3">
                Find out more
              </span>
            </div>
            <div className="flex flex-col px-3 md:max-w-[255px]">
              <div className="self-center">
                <Car />
              </div>
              <span className="uppercase font-bold text-[18px] text-start my-3 self-center">
                Car Loans
              </span>
              <span className="font-light text-start text-[#575757] text-[15px]">
                Got your eye on that new or used vehicle? Our auto loan can help
                get you out on the road.
              </span>
              <span className="text-[#15151c] text-[15px] text-start mt-3">
                Find out more
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
