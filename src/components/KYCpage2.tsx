import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import Header2 from "./Header2";

const KYCpage2 = () => {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <Header2 setSignup={setSignup} setLogin={setLogin} />
      <div className="w-[90%] md:w-[70%] p-10">
        <div className="flex flex-row items-center space-x-2">
          <MdArrowBackIos />
          <span className="font-bold">Complete KYC to Proceed</span>
        </div>
        <div className="mt-5">
          <div className="flex items-center">
            <span>Business info</span>
            <span className="text-[37100C] opacity-[50%] ml-2">
              {2} of {2}
            </span>
          </div>
          <div className="flex flex-row space-x-3 my-4">
            <div className="w-[120px] h-[2px] bg-[#ececec]"></div>
            <div className="w-[120px] h-[2px] bg-[#5743ca]"></div>
          </div>
          <span>
            Enter your details as they appear on your official documentations
          </span>
        </div>
        <div className=" grid md:grid-cols-2 gap-4 gap-x-6 mt-5">
          <div className="flex flex-col">
            <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
              Business name
            </span>
            <input
              className=" border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
              Business type
            </span>
            <input
              className=" border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
              Business Licence
            </span>
            <input
              className=" border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
              Business address
            </span>
            <input
              className=" border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
              Website url
            </span>
            <input
              className=" border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
              Compliance aml
            </span>
            <input
              className=" border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-3">
          <div className="flex justify-center bg-[#0278ff] rounded-[5px] px-[20px] py-[5px]  cursor-pointer">
            <span className="text-[#fff] text-[17px]">Next</span>
          </div>
          <div className="flex justify-center bg-[#fff] rounded-[5px] border-[1px]  px-[20px] py-[5px] cursor-pointer">
            <span className="text-[#00ADEF] text-[17px]">Cancel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCpage2;
