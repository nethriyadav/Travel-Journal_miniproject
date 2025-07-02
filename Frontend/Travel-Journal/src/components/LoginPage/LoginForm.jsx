import React, { useState, useContext } from "react";
import { loginWithOtpSend, loginWithOtpVerify } from "../../api/authService"; // you will add these APIs
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const navigate=useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const [otpSent, setOtpSent] = useState(false); // tracks if OTP is sent

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    try {
      await loginWithOtpSend(email,password);
      toast.success("OTP sent to your email!");
      setOtpSent(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    try {
      const data = await loginWithOtpVerify(email, otp);
      console.log("This is data from db : ",data);
      if (data.status === "Success") {
        toast.success("Logged in successfully!");
        setIsLoggedIn(true);
  
        navigate("/"); // ✅ redirect to home
        // redirect or other logic
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed");
    }
  };

  const emailIcon = (
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="email-icon"> <path d="M13.333 2.66675H2.66634C1.92996 2.66675 1.33301 3.2637 1.33301 4.00008V12.0001C1.33301 12.7365 1.92996 13.3334 2.66634 13.3334H13.333C14.0694 13.3334 14.6663 12.7365 14.6663 12.0001V4.00008C14.6663 3.2637 14.0694 2.66675 13.333 2.66675Z" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6663 4.66675L8.68634 8.46675C8.48052 8.5957 8.24255 8.66409 7.99967 8.66409C7.7568 8.66409 7.51883 8.5957 7.31301 8.46675L1.33301 4.66675" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      }}
    />
  );

  return (
    <section className="flex flex-col items-center w-[448px] max-md:px-5 max-md:py-0 max-md:w-full max-sm:px-4 max-sm:py-0">
      <h2 className="mb-2 text-2xl font-medium text-slate-700 max-sm:text-2xl">
        Welcome Back
      </h2>
      <p className="mb-6 text-base text-slate-600 max-sm:text-base">
        Sign in using your email and OTP
      </p>

      {!otpSent ? (
        <form onSubmit={handleSendOtp} className="w-96 max-md:w-full">
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={emailIcon}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="mt-4 w-full h-10 text-sm font-medium bg-blue-600 rounded-2xl cursor-pointer border-[none] text-slate-50"
          >
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="w-96 max-md:w-full">
          <InputField
            label="OTP"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 w-full h-10 text-sm font-medium bg-blue-600 rounded-2xl cursor-pointer border-[none] text-slate-50"
          >
            Verify OTP
          </button>
        </form>
      )}
    </section>
  );
};

export default LoginForm;





// "use client";

// import React, { useState,useContext } from "react";
// import InputField from "./InputField";
// import { Link, useNavigate } from "react-router-dom";
// import { login  } from "../../api/authService";
// import { UserContext } from "../../context/UserContext";
// import { toast } from "react-toastify";

// const LoginForm = () => {
//   const {isLoggedIn,setIsLoggedIn}=useContext(UserContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("••••••••");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await login(email, password);
//       if (data.status === "Success") {
//         console.log("Hello from server");
//         setIsLoggedIn((login) => !login);
//         // alert("Logged in Successfully");
//         toast.success("🎉 Logged in successfully!");
//         navigate("/",{replace:true});
//       }
//     } catch (err) {
//       // alert(err.response.data.message || "Login failed");
//       toast.error(`🚫 ${err.response?.data?.message || "Login failed"}`);
//     }
//   };

//   const emailIcon = (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="email-icon"> <path d="M13.333 2.66675H2.66634C1.92996 2.66675 1.33301 3.2637 1.33301 4.00008V12.0001C1.33301 12.7365 1.92996 13.3334 2.66634 13.3334H13.333C14.0694 13.3334 14.6663 12.7365 14.6663 12.0001V4.00008C14.6663 3.2637 14.0694 2.66675 13.333 2.66675Z" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6663 4.66675L8.68634 8.46675C8.48052 8.5957 8.24255 8.66409 7.99967 8.66409C7.7568 8.66409 7.51883 8.5957 7.31301 8.46675L1.33301 4.66675" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
//       }}
//     />
//   );

//   const passwordIcon = (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="password-icon"> <path d="M12.6667 7.33325H3.33333C2.59695 7.33325 2 7.93021 2 8.66659V13.3333C2 14.0696 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0696 14 13.3333V8.66659C14 7.93021 13.403 7.33325 12.6667 7.33325Z" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.66699 7.33325V4.66659C4.66699 3.78253 5.01818 2.93468 5.6433 2.30956C6.26842 1.68444 7.11627 1.33325 8.00033 1.33325C8.88438 1.33325 9.73223 1.68444 10.3573 2.30956C10.9825 2.93468 11.3337 3.78253 11.3337 4.66659V7.33325" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
//       }}
//     />
//   );

//   return (
//     <section className="flex flex-col items-center w-[448px] max-md:px-5 max-md:py-0 max-md:w-full max-sm:px-4 max-sm:py-0">
//       <h2 className="mb-2 text-2xl font-medium text-slate-700 max-sm:text-2xl">
//         Welcome Back
//       </h2>
//       <p className="mb-6 text-base text-slate-600 max-sm:text-base">
//         Sign in to continue your journey
//       </p>

//       <form onSubmit={handleSubmit} className="w-96 max-md:w-full">
//         <InputField
//           label="Email"
//           type="email"
//           placeholder="you@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           icon={emailIcon}
//         />

//         <InputField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           icon={passwordIcon}
//           forgotPasswordLink="forgot password"
//         />

//         <button
//           type="submit"
//           className="mt-4 w-full h-10 text-sm font-medium bg-blue-600 rounded-2xl cursor-pointer border-[none] text-slate-50"
//         >
//           Sign in
//         </button>
//       </form>

//       <div className="mt-6 text-sm text-slate-600">
//         <span>Don't have an account? </span>
//         <Link to="/signup" className="text-blue-600 no-underline">Sign up</Link>
//       </div>
//     </section>
//   );
// };

// export default LoginForm;
