import React from "react";
import Multiply from "../assets/Multiply.svg?react";

const Signup = ({ setSignup, setLogin }: any) => {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] z-10 flex flex-col min-w-[80%] md:min-w-[600px]  border-[1px] border-[#6D7E8C] m-5 p-5 px-[50px]">
      <div
        onClick={() => setSignup(false)}
        className="absolute top-3 right-3 cursor-pointer"
      >
        <Multiply />
      </div>
      <div className="flex flex-col my-8 mt-2">
        <span className="text-[25px] stroke-[#ff0000] font-medium">
          Sign up
        </span>
        <span className="text-[#6D7E8C] font-medium mt-2">
          Enter your details below to create your account and get started.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 gap-x-8 w-full self-center">
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Full Name
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="your name..."
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Email
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="example@gmail.com"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Date of Birth
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="MM / DD / YY"
            type="date"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Phone Number
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="+2519*******"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Password
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="******"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Confirm Password
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px]  placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="******"
            type="text"
          />
        </div>
        <div className="flex justify-center border-[1px] border-[#6D7E8C] p-2 rounded-[5px]  mt-4">
          <span className="font-medium">Cancel</span>
        </div>
        <div className="flex justify-center border-[1px] border-[#6D7E8C] bg-[#1C5BC2] p-2 rounded-[5px]  mt-4">
          <span className="text-[#fff]">Confirm</span>
        </div>
      </div>
      <div className="flex space-x-1 my-3 mt-5 self-center">
        <span className="text-[#6D7E8C] font-medium">
          Already have an account?
        </span>
        <span
          onClick={() => {
            setLogin(true);
            setSignup(false);
          }}
          className="text-[#00358D] font-medium cursor-pointer"
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;
