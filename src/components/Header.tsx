import React from "react";
import Tasks from "../assets/Tasks.svg?react";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="sticky top-0">
      <div className="flex justify-between bg-[#fff] p-5 px-4 border-[1px] ">
        {/* <Tasks /> */}
        {/* <div className="hidden md:block border-[1px] bg-[#00ADEF] px-8 py-1 rounded-[50px] self-center ml-[95px]">
          <span className="text-[#fff] font-medium">CoopLoan</span>
        </div> */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center  border-[1px] bg-[#000] px-2 py-2 h-[40px] w-[40px] rounded-[1000px] self-center cursor-pointer"
        >
          <span className="text-[#fff] text-[20px] font-medium">C</span>
        </div>
        <div className="flex items-center space-x-6">
          <div
            onClick={() => navigate("/dashboard")}
            className="border-[1px] border-[#000]  px-2 py-1 rounded-[50px] self-center cursor-pointer"
          >
            <span className="text-[#000]  font-medium">Apply now</span>
          </div>
          {!isLoggedIn ? (
            <span
              onClick={() => navigate("/login")}
              className="text-[#00ADEF] font-medium cursor-pointer"
            >
              Sign in
            </span>
          ) : (
            <span
              onClick={() => {
                logout();
              }}
              className="text-[#D33D3B] font-medium cursor-pointer"
            >
              Sign out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
