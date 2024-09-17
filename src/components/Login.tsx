import React from "react";
import Multiply from "../assets/Multiply.svg?react";

const Login = ({ setSignup, setLogin }: any) => {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] z-10 flex flex-col items-center min-w-fit w-[400px]  border-[1px] border-[#6D7E8C] m-5 p-5 px-[40px]">
      <div
        onClick={() => setLogin(false)}
        className="absolute top-3 right-3 cursor-pointer"
      >
        <Multiply />
      </div>
      <div className="flex flex-col items-center my-8 mt-2">
        <span className="text-[25px] stroke-[#ff0000] font-medium">
          Welcome back
        </span>
        <span className="text-[#6D7E8C] font-medium ">
          Glad to see you again 👋
        </span>
        <span className="text-[#6D7E8C] font-medium ">
          Login to your account below
        </span>
      </div>
      <div className="grid gap-5 gap-x-8 w-full self-center">
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Email
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="enter email..."
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Password
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="enter password..."
            type="text"
          />
        </div>
        <div className="flex justify-center border-[1px] border-[#6D7E8C] bg-[#1C5BC2] p-2 rounded-[5px]  mt-4">
          <span className="text-[#fff]">Login</span>
        </div>
      </div>
      <div className="flex space-x-2 my-3 mt-5 mb-10 self-center">
        <span className="text-[#6D7E8C] text-[15px] font-medium">
          Dont have an account?
        </span>
        <span
          onClick={() => {
            setSignup(true);
            setLogin(false);
          }}
          className="text-[#00358D] text-[15px] font-medium cursor-pointer"
        >
          Sign up for Free
        </span>
      </div>
    </div>
  );
};

export default Login;
