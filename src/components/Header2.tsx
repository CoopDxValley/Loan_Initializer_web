import { useNavigate } from "react-router-dom";
import Tasks from "../assets/Tasks.svg?react";
import { useAuth } from "../../AuthProvider";

const Header2 = ({ setLogin }: any) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <div className="sticky top-0 w-full">
      <div className="flex justify-between bg-[#fff] p-5 px-4 border-[1px] ">
        <div className="flex items-center justify-center">
          {/* <Tasks /> */}
          {/* <div
            onClick={() => navigate("/")}
            className="  py-1 rounded-[50px] self-center ml-[5px] cursor-pointer"
          >
            <span className="text-[#00ADEF] text-[22px] font-medium">
              CoopLoan
            </span>
          </div> */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center justify-center  border-[1px] bg-[#000] px-2 py-2 h-[40px] w-[40px] rounded-[1000px] self-center cursor-pointer"
          >
            <span className="text-[#fff] text-[20px] font-medium">C</span>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-6">
          <span
            onClick={() => navigate("/myloans")}
            className="text-[#000] font-medium cursor-pointer"
          >
            Applications
          </span>
          <span
            onClick={() => navigate("/kyc1")}
            className="text-[#000] font-medium cursor-pointer"
          >
            Kyc
          </span>
          <span
            onClick={() => navigate("/packages")}
            className="text-[#000] font-medium cursor-pointer"
          >
            Packages
          </span>
          <span
            onClick={() => {
              logout();
              navigate("/");
            }}
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
