"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import UserIcon from "./icons/UserIcon";
import EmailIcon from "./icons/EmailIcon";
import LockIcon from "./icons/LockIcon";
import { signup } from "../../api/authService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";


function RegistrationForm() {
  const {isLoggedIn,setIsLoggedIn} =useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [submitted, setSubmitted] = useState(false);
const [responseMessage, setResponseMessage] = useState("");


  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(name, email, password, passwordConfirm);
      if (data.status === "success") {
        // alert("Account created Successfully!");
        setResponseMessage(data.message);
        setSubmitted(true);
        toast.success("✅ "+data.message);
        // toast.success("✅ Signed up successfully! ");
        // console.log("Sending: ", name, email, password, passwordConfirm);
        // setIsLoggedIn(!isLoggedIn);
        // navigate("/");
      }
    } catch (err) {
      const rawMessage = err.response?.data?.message || "Signup failed";
      if (rawMessage.includes("E11000") && rawMessage.includes("email")) {
        // alert("Email already exists. Please sign up with a different email.");
        toast.error("Email already exists. Please sign up with a different email.");
      } else {
        toast.error(rawMessage);
      }
    }
  };

  return (
    <>
    {!submitted?(
    <form onSubmit={handleSubmit} className="mx-auto my-0 w-96 max-sm:w-full">
      <div className="mb-5">
        <InputField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          icon={<UserIcon />}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <InputField
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={<EmailIcon />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={<LockIcon />}
          helperText="Must be at least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <InputField
          label="ConfirmPassword"
          type="password"
          placeholder="••••••••"
          icon={<LockIcon />}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>

      <Button type="submit" fullWidth>
        Create account
      </Button>

      <div className="mt-6 text-sm text-center text-slate-600">
        <span>Already have an account? </span>
        {/* <a href="" className="text-blue-600 no-underline">
          Sign in
        </a> */}
        <Link to="/login" className="text-blue-600 no-underline">
          Sign in
        </Link>
      </div>
    </form>):(
     <div className="text-center mt-10 px-4">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          🎉 {responseMessage}
        </h2>
        <p className="text-gray-700">
          Please check your email to verify your account before logging in.
        </p>
      </div>
    )
}
</>
  );
}

export default RegistrationForm;
