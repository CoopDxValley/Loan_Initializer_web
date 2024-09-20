import React from "react";
import Tasks from "../assets/Tasks.svg?react";

const Header2 = ({ setSignup, setLogin }: any) => {
  return (
    <div className="sticky top-0 w-full">
      <div className="flex justify-between bg-[#fff] p-5 px-4 border-[1px] ">
        <div className="flex items-center justify-center">
          <Tasks />
          <div className="  py-1 rounded-[50px] self-center ml-[5px]">
            <span className="text-[#00ADEF] text-[22px] font-medium">
              CoopLoan
            </span>
          </div>
          <div className="  py-1 rounded-[50px] self-center ml-[50px] mt-[6px]">
            <span className="text-[#1C5BC2] text-[16px] font-medium">
              Dashboard
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <span
            onClick={() => setLogin(true)}
            className="text-[#D33D3B] font-medium cursor-pointer"
          >
            Sign out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header2;
