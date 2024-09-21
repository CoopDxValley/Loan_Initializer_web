import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Multiply from "../assets/Multiply.svg?react";

const Signup = ({ setSignup, setLogin }: any) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  // Formik configuration
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      dateOfBirth: Yup.date().required("Date of Birth is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      setFormSubmitted(true);
      console.log("Form values", values);
      // You can handle form submission logic here
    },
  });

  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] z-10 flex flex-col min-w-[80%] md:min-w-[600px] border-[1px] border-[#6D7E8C] m-5 p-5 px-[50px]">
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

      <form
        onSubmit={formik.handleSubmit}
        className="grid sm:grid-cols-2 gap-3 gap-x-8 w-full self-center"
      >
        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Full Name
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px] placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="your name..."
            type="text"
            {...formik.getFieldProps("fullName")}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Email
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px] placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="example@gmail.com"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Date of Birth
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px] placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="MM / DD / YY"
            type="date"
            {...formik.getFieldProps("dateOfBirth")}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
            <div className="text-red-500 text-sm">
              {formik.errors.dateOfBirth}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Phone Number
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px] placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="+2519*******"
            type="text"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500 text-sm">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Password
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px] placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="******"
            type="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <span className="text-[#6D7E8C] font-medium text-[15px] mb-2">
            Confirm Password
          </span>
          <input
            className="border-[1px] border-[#6D7E8C] rounded-[5px] placeholder:text-[#6D7E8C] placeholder:font-medium px-2 py-1 outline-none"
            placeholder="******"
            type="password"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setSignup(false)}
          className="flex justify-center border-[1px] border-[#6D7E8C] p-2 rounded-[5px] mt-4 cursor-pointer"
        >
          <span className="font-medium">Cancel</span>
        </button>

        <button
          type="submit"
          onClick={() => formik.submitForm()}
          className="flex flex-row items-center justify-center justify-center border-[1px] border-[#6D7E8C] bg-[#1C5BC2] p-2 rounded-[5px] mt-4 cursor-pointer"
        >
          {formSubmitted && (
            <svg
              className="
             animate-spin h-5 w-5 mr-3"
              width="800px"
              height="800px"
              viewBox="0 0 1000 1000"
              fill="white"
            >
              <path d="M45.628 706.351l-.012 -.025c-.102 -.227 -.2 -.444 -.278 -.663 -8.17 -17.919 -15.26 -36.261 -21.256 -54.914 -6.056 -18.846 -10.989 -37.963 -14.753 -57.252 -19.468 -99.308 -8.726 -203.687 34.657 -298.293 2.626 -5.734 9.506 -8.179 15.352 -5.447 .725 .345 1.394 .741 2.019 1.187l.025 -.018 79.936 58.667c4.707 3.459 6.132 9.686 3.607 14.615 -4.782 12.131 -8.927 24.591 -12.419 37.286 -3.547 12.926 -6.376 25.968 -8.487 39.068 -10.893 67.54 -2.98 137.137 22.442 201.002 2.006 5.014 .252 10.504 -3.919 13.442l.017 .014 -79.519 56.112c-5.183 3.651 -12.455 2.386 -16.25 -2.82 -.455 -.62 -.842 -1.279 -1.154 -1.967l-.008 .005zm119.843 -574.708l.019 -.018c.187 -.168 .364 -.327 .55 -.464 14.676 -13.237 30.095 -25.585 46.146 -36.999 16.216 -11.535 33.045 -22.085 50.397 -31.598 89.309 -49.03 192.823 -71.164 297.042 -59.516 6.314 .7 10.788 6.43 9.972 12.783 -.105 .789 -.279 1.543 -.515 2.265l.025 .021 -31.613 93.453c-1.866 5.505 -7.403 8.772 -12.915 7.915 -13.121 -.762 -26.362 -.814 -39.63 -.178 -13.501 .65 -26.895 2.015 -40.123 4.072 -68.198 10.609 -132.559 39.572 -186.008 83.261 -4.193 3.438 -10.005 3.483 -14.114 .459l-.007 .02 -78.436 -57.59c-5.105 -3.754 -6.139 -10.998 -2.315 -16.181 .457 -.621 .97 -1.191 1.533 -1.697l-.007 -.007zm588.698 -64.667l.025 .013c.217 .124 .424 .242 .614 .374 17.241 9.739 33.858 20.452 49.775 32.049 16.084 11.719 31.415 24.314 45.903 37.725 74.665 69.005 127.898 159.703 148.923 261.508 1.278 6.168 -2.839 12.154 -9.189 13.348 -.79 .144 -1.566 .214 -2.334 .215l-.012 .03 -99.476 -.911c-5.861 -.057 -10.707 -4.265 -11.589 -9.724 -3.325 -12.599 -7.364 -25.093 -12.073 -37.397 -4.796 -12.522 -10.246 -24.719 -16.31 -36.547 -31.258 -60.986 -78.947 -112.681 -137.4 -149.546 -4.597 -2.889 -6.436 -8.352 -4.804 -13.159l-.021 -.002 31.041 -91.705c2.029 -5.969 8.662 -9.182 14.819 -7.181 .735 .239 1.442 .544 2.102 .92l.005 -.009zm243.993 534.741l-.006 .026c-.054 .243 -.103 .477 -.17 .698 -4.022 19.253 -9.169 38.221 -15.383 56.805 -6.279 18.775 -13.632 37.112 -22.028 54.911 -43.165 91.679 -113.776 169.866 -205.003 221.137 -5.524 3.112 -12.542 1.081 -15.652 -4.534 -.381 -.698 -.687 -1.409 -.927 -2.132l-.033 -.001 -29.864 -94.018c-1.755 -5.538 .783 -11.407 5.752 -13.923 11.066 -7.028 21.81 -14.694 32.166 -22.935 10.539 -8.389 20.564 -17.293 30.046 -26.662 48.881 -48.298 83.766 -109.211 101.087 -175.683 1.352 -5.225 6.03 -8.646 11.147 -8.594l-.006 -.02 97.622 .912c6.358 .066 11.491 5.324 11.473 11.745 0 .768 -.078 1.526 -.233 2.265l.011 .001zm-437.905 395.155l-.027 .004c-.248 .026 -.488 .052 -.719 .056 -19.728 2.161 -39.526 3.172 -59.281 3.059 -19.965 -.115 -39.839 -1.376 -59.517 -3.787 -101.343 -12.346 -198.216 -54.721 -275.622 -124.837 -4.695 -4.245 -4.913 -11.485 -.484 -16.15 .55 -.575 1.14 -1.083 1.761 -1.533l-.009 -.03 81.017 -57.195c4.776 -3.365 11.194 -2.785 15.145 1.117 10.163 8.256 20.843 16.012 31.955 23.225 11.308 7.336 22.955 14.03 34.877 20.07 61.466 31.136 130.718 45.184 199.876 40.967 5.435 -.341 10.163 3.008 11.693 7.848l.02 -.013 29.289 92.27c1.902 6.011 -1.559 12.471 -7.728 14.439 -.737 .237 -1.489 .398 -2.246 .481l.002 .009z" />
            </svg>
          )}
          <span className="text-[#fff]">
            {!formSubmitted ? "Confirm" : "Processing"}
          </span>
        </button>
      </form>

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
