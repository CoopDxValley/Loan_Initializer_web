import React, { useState } from "react";
import Info from "../assets/Info.svg?react";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";

const Calculator = () => {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="mb-5">
      <Header setSignup={setSignup} setLogin={setLogin} />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start justify-center bg-[#00ADEF] px-5 py-2 px-[100px] py-[50px] w-full">
          <span className="text-[#fff] font-medium">
            Personal loan calculator
          </span>
          <span className="text-[#fff] text-[35px] font-medium md:max-w-[250px] leading-10 my-3">
            Work out your repayments
          </span>
          <span className="text-[#fff]">
            Get a quick estimate of your repayments
          </span>
        </div>
        <div className="flex flex-col items-center my-10">
          <span className="font-bold text-[25px] mb-2">
            Personal loan calculator
          </span>
          <span className="md:max-w-[400px] text-center text-[#575757] text-[15px]">
            Get a quick estimate of what your repayments might be using personal
            loan calculator.
          </span>
        </div>
        <div className="flex flex-col md:flex-row w-[90%] md:w-fit justify-center  border-[1px] border-[#000]  mx-10 min-h-[500px] my-5">
          <div className="flex flex-col space-y-5 md:border-r-[1px] border-[#000] pr-5 py-7 px-5">
            <div>
              <div className="flex flex-col ">
                <span className="mb-2">Loan amount</span>
                <div className="flex flex-col justify-center items-end relative border-[1px] border-[#000]   rounded-[5px]  my-2">
                  <input
                    type="text"
                    className="h-[45px] w-[90%] outline-none "
                  />
                  <span className="absolute top-1 left-3  text-[#D2D2D2] font-medium text-[18px]">
                    $
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Info />
                <span className="text-[15px]">
                  You can apply to borrow $2,000 — $70,000
                </span>
              </div>
            </div>
            <div>
              <span className="">Loan term</span>
              <div className="flex border-[1px] border-[#000] rounded-[5px] h-[45px] mt-4">
                <div className="flex items-center justify-center w-[33.33%] border-r-[1px] border-[#000] cursor-pointer">
                  <span className="text-[#9C9C9C] font-medium ">3 years</span>
                </div>
                <div className="flex items-center justify-center w-[33.33%] border-r-[1px] border-[#000] cursor-pointer">
                  <span className=" text-[#9C9C9C] font-medium ">5 years</span>
                </div>
                <div className="flex items-center justify-center w-[33.33%] cursor-pointer ">
                  <span className=" text-[#9C9C9C] font-medium ">7 years</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-1">
                <span className="">Credit history</span>
                <div className="flex border-[1px] border-[#000] rounded-[5px] h-[45px] mt-4">
                  <div className="flex items-center justify-center w-[33.33%] border-r-[1px] border-[#000] cursor-pointer">
                    <span className="text-[#9C9C9C] font-medium ">
                      Excellent
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-[33.33%] border-r-[1px] border-[#000] cursor-pointer">
                    <span className=" text-[#9C9C9C] font-medium ">Good</span>
                  </div>
                  <div className="flex items-center justify-center w-[33.33%] cursor-pointer ">
                    <span className=" text-[#9C9C9C] font-medium ">
                      Average
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Info />
                <span className="text-[15px]">
                  Example interest rate 18.49% 
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center  pt-7 bg-[#FAFAFC]">
            <div className="flex flex-col items-center md:h-[50%] py-10 h-[250px]  md:py-0  md:px-5 md:border-b-[1px] border-[#000] ">
              <div>
                <span className="font-bold text-[17px]">
                  Your repayment estimate
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex border-[1px] border-[#000] rounded-[5px] h-[35px] mt-4">
                  <div className="flex items-center justify-center w-[33.33%] border-r-[1px] border-[#000] cursor-pointer p-3">
                    <span className="text-[#9C9C9C] font-medium ">Weekly</span>
                  </div>
                  <div className="flex items-center justify-center w-[33.33%] border-r-[1px] border-[#000] cursor-pointer p-3 px-4">
                    <span className=" text-[#9C9C9C] font-medium ">
                      Fortnightly
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-[33.33%] cursor-pointer p-3 ">
                    <span className=" text-[#9C9C9C] font-medium ">
                      Monthly
                    </span>
                  </div>
                </div>
                <span className="text-[#37100C] text-[50px] font-bold">
                  $517.06
                </span>
                <span className="text-[#575757] font-medium">
                  Monthly direct debit
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center md:h-[50%] py-10 h-[250px]  md:py-0 w-full bg-[#fff]">
              <div
                onClick={() => setSignup(true)}
                className="flex  bg-[#00ADEF] rounded-[100px] px-[50px] py-[15px] cursor-pointer"
              >
                <span className="text-[#fff] text-[19px]">Apply now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {signup && <Signup setSignup={setSignup} setLogin={setLogin} />}
      {login && <Login setSignup={setSignup} setLogin={setLogin} />}
    </div>
  );
};

export default Calculator;
