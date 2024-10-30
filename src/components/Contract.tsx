import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const Contract = () => {
  return (
    <div className="flex flex-col items-center px-10">
      <h1 className="text-[17px] mt-10 mb-5">
        Contract of Souq pass Digital lending Term Loan
      </h1>
      <hr className="h-[2px] bg-[#000] w-full mb-5" />
      <div>
        <p>
          Now, therefore, the parties have entered these digital loan contract
          to be processed and disbursed digitally as per this contract and terms
          and conditions made an annex and integral part of this contract.
        </p>
        <p>
          This contract is made and entered into this <b>6</b> day of{" "}
          <b>June</b> the year <b>2024</b> between Mr/Ms <b>Motuma Gishu</b>{" "}
          whose address is in <b>AA</b> City/Town, Contact{" "}
          <b>motumagishu27@gmail.com</b> ID / passport No. <b>54658784564</b>
        </p>
        <div className="my-1">
          <span>and</span>
        </div>
        <p className="my-3">
          Cooperative Bank of Oromia S.C. whose address is Addis Ababa City,
          Kirkos Sub-city, Africa Avenue, Flamingo Area, Get House Building Tel:
          +251 115150229 P.O. Box: 16936.
        </p>
        <p className="my-3">
          Whereas the bank is a financial institution engaged in banking
          business and has consented to grant the borrower a term loan facility,
        </p>
        <p className="my-3">
          Whereas the borrower is a business entity engaged in <b>Coop</b> and
          has requested the bank for a term loan facility.
        </p>
        <b>Article 1. Loan amount and its disbursement</b>
        <div className="my-2">
          <p>
            1.1. The bank has agreed to grant a digital loan to the borrower,
            and the latter has agreed to borrow a loan amount of birr{" "}
            <b>100000.0</b>
          </p>
          <p>
            1.2. The loan shall be disbursed to the borrower account maintained
            at the bank.
          </p>
        </div>
        <b>Article 2. Interest Rate</b>
        <p className="my-2">
          The bank shall charge an interest rate of 7.0% per month on the daily
          outstanding principal loan balance.
        </p>
        <b>Article 3. Loan Repayment</b>
        <p className="mt-2">
          3.1. The loan with its interest and other costs shall be totally
          repaid in 6 months.
        </p>
        <p>3.2. The repayment schedule will be provided over the platform.</p>
        <p className="mb-2">
          3.3. In the event of default, without prejudice to any rights and
          remedies the bank is entitled to under the law, the bank has the right
          to set off any outstanding loan, including interest, costs, and
          expenses, against any account of the borrower kept with any branch of
          the bank, cheques payable to the borrower, and money transfers made to
          the borrower through the bank. Additionally, it is understood that the
          bank will consistently block the amount equivalent to this month's
          repayment in the borrower’s account as a preventive measure.
        </p>
        <b>Article 4. Applicable Law</b>
        <p className="mt-2">
          This contract shall be subject to, governed by, and constructed in
          accordance with the relevant provision of Ethiopian Law.
        </p>
        <div className="flex items-center space-x-2 mt-5 ">
          <Checkbox id="terms" className="" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the banks loan agreement
          </label>
        </div>
        <div className="my-5 flex flex-col items-end">
          <Button className="bg-[#00ADEF]  " title="Apply">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contract;
