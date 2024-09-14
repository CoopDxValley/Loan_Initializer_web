import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold uppercase text-[12px] text-[#00ADEF]">
        Personal Loans
      </h2>
      <h1 className="text-[#00ADEF] font-medium text-[30px]">
        Personal loans to start almost anything.
      </h1>
      <div className="bg-[#00ADEF] rounded-[20px] px-[20px] py-[5px]">
        <span className="text-[#fff]">Apply now</span>
      </div>
      <div className="bg-[#fff] rounded-[20px] border-[1px] px-[20px] py-[5px]">
        <span className="text-[#00ADEF]">Get a qoute</span>
      </div>
    </div>
  );
};

export default Landing;
