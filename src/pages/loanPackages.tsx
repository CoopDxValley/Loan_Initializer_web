import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LoanPackages() {
  const navigate = useNavigate();
  const { kyc } = useSelector((state: any) => state.user);

  const handleApplication = (title: string) => {
    if (!!kyc) {
      if (title === "Souqpass Financing Loan") {
        navigate("/Souq");
      }
    } else {
      navigate("/kyc1");
    }
  };

  console.log(!!kyc);

  const LoanPackage = ({ title, subTitle, ...props }: any) => {
    return (
      <div className="bg-white w-full flex flex-col gap-4 px-4 py-6 rounded-lg">
        <div className="w-full flex gap-2">
          <img src="/assets/myGuarantor.png" className="w-20" />
          <div className="flex-1 flex flex-col">
            <span className="font-bold">{title}</span>
            <span className="text-[#73738C]">{subTitle}</span>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4 px-9 text-xs">
          <div className="w-full flex sm:flex-col px-2 items-center gap-2 sm:border-r-2">
            <span className="flex-1 text-xs">
              {"Representative APR (fixed)"}
            </span>
            <span className="w-14 font-bold text-xs">{"9.9% APR"}</span>
          </div>
          <div className="w-full flex sm:flex-col px-2 items-center gap-2 sm:border-r-2">
            <span className="flex-1 text-xs">{"Monthly repayment"}</span>
            <span className="w-14 font-bold text-xs">{"$183.62"}</span>
          </div>
          <div className="w-full flex sm:flex-col px-2 items-center gap-2 sm:border-r-2">
            <span className="flex-1 text-xs">{"Total charge for credit"}</span>
            <span className="w-14 font-bold text-xs">{"$406.88"}</span>
          </div>
          <div className="w-full flex sm:flex-col px-2 items-center gap-2">
            <span className="flex-1 text-xs">{"Total amount repayable"}</span>
            <span className="w-14 font-bold text-xs">{"$4,406.88"}</span>
          </div>
          <button
            onClick={() => handleApplication(title)}
            className="w-full bg-[#15151c] text-white py-2 text-center font-bold rounded-full"
          >
            Apply
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="h-full w-full flex flex-col bg-[#FAF8F8] gap-4">
      <div className="flex flex-col bg-white">
        <div className="flex flex-col bg-[#00ADEF] text-white select-none px-6 sm:px-24 text-sm gap-3 py-8">
          <span className="font-bold text-4xl">
            Find your perfect
            <br />
            loan
          </span>
          <span className="text-xs">
            Compare loans and see the lowest rate available to you
          </span>
        </div>
        <div className="flex flex-col px-6 sm:px-16 py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between border-[1px] border-black rounded-md px-6 py-6 gap-4">
            <span
              className="sm:hidden font-bold text-black text-base"
              style={{ WebkitTextStroke: "0.6px #15151c" }}
            >
              Loan details
            </span>
            <div>
              <span
                className="font-bold text-black text-xl sm:font-medium sm:text-sm"
                style={{ WebkitTextStroke: "0.6px #15151c" }}
              >
                Loan amount
              </span>
              <div className="relative">
                <div className="absolute h-full flex pl-2 items-center">
                  <span
                    className="font-bold text-black text-base"
                    style={{ WebkitTextStroke: "0.6px #15151c" }}
                  >
                    $
                  </span>
                </div>
                <input
                  type="text"
                  className="w-full font-bold text-black text-xl pl-8 pr-4 py-3 rounded-md border-[1px] border-[#15151c] outline-none"
                  style={{ WebkitTextStroke: "0.6px #15151c" }}
                />
              </div>
            </div>
            <div>
              <span
                className="font-bold text-black text-xl sm:font-medium sm:text-sm"
                style={{ WebkitTextStroke: "0.6px #15151c" }}
              >
                Loan term
              </span>
              <div className="relative">
                <input
                  type="text"
                  className="w-full font-bold text-black text-xl pr-20 pl-4 py-3 rounded-md border-[1px] border-[#15151c] outline-none"
                  style={{ WebkitTextStroke: "0.6px #15151c" }}
                />
                <div className="absolute h-full flex pr-2 items-center justify-end right-0 top-0">
                  <span
                    className="font-bold text-black text-base"
                    style={{ WebkitTextStroke: "0.6px #15151c" }}
                  >
                    months
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full sm:w-56 bg-[#15151c] text-white py-2 text-center font-bold rounded-full">
                Update results
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-16 flex flex-col gap-6 pb-6">
        <LoanPackage title={"Souqpass Financing Loan"} subTitle={"RFB Loan"} />
        <LoanPackage
          title={"Agriculture financing Loan"}
          subTitle={"Agri Loan"}
        />
        <LoanPackage
          title={"Agriculture financing Loan"}
          subTitle={"Agri Loan"}
        />
      </div>
    </div>
  );
}
