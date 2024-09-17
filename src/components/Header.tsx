import React from "react";
import Tasks from "../assets/Tasks.svg?react";

const Header = ({ setSignup, setLogin }: any) => {
  return (
    <div className="sticky top-0">
      <div className="flex justify-between bg-[#fff] p-5 px-4 border-[1px] ">
        <Tasks />
        <div className="border-[1px] bg-[#00ADEF] px-8 py-1 rounded-[50px] self-center ml-[95px]">
          <span className="text-[#fff] font-medium">CoopLoan</span>
        </div>
        <div className="flex items-center space-x-6">
          <div
            onClick={() => setSignup(true)}
            className="border-[1px] border-[#00ADEF]  px-2 py-1 rounded-[50px] self-center cursor-pointer"
          >
            <span className="text-[#00ADEF]  font-medium">Apply now</span>
          </div>
          <span
            onClick={() => setLogin(true)}
            className="text-[#00ADEF] font-medium cursor-pointer"
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
