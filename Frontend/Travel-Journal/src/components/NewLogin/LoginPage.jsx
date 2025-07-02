"use client";
import React, { useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import Button from "../LoginPage/Button";

/**
 * Login page component
 */
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("••••••••");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login with:", { email, password });
  };

  const navigateToForgotPassword = () => {
    // Navigation logic would go here
    console.log("Navigate to forgot password");
  };

  const navigateToSignUp = () => {
    // Navigation logic would go here
    console.log("Navigate to sign up");
  };

  const navigateBack = () => {
    // Navigation logic would go here
    console.log("Navigate back");
  };

  const emailIconSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
    <path d="M13.333 2.66675H2.66634C1.92996 2.66675 1.33301 3.2637 1.33301 4.00008V12.0001C1.33301 12.7365 1.92996 13.3334 2.66634 13.3334H13.333C14.0694 13.3334 14.6663 12.7365 14.6663 12.0001V4.00008C14.6663 3.2637 14.0694 2.66675 13.333 2.66675Z" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M14.6663 4.66675L8.68634 8.46675C8.48052 8.5957 8.24255 8.66409 7.99967 8.66409C7.7568 8.66409 7.51883 8.5957 7.31301 8.46675L1.33301 4.66675" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  const passwordIconSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
    <path d="M12.6667 7.33325H3.33333C2.59695 7.33325 2 7.93021 2 8.66659V13.3333C2 14.0696 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0696 14 13.3333V8.66659C14 7.93021 13.403 7.33325 12.6667 7.33325Z" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M4.66699 7.33325V4.66659C4.66699 3.78253 5.01818 2.93468 5.6433 2.30956C6.26842 1.68444 7.11627 1.33325 8.00033 1.33325C8.88438 1.33325 9.73223 1.68444 10.3573 2.30956C10.9825 2.93468 11.3337 3.78253 11.3337 4.66659V7.33325" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <div className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen">
      <Header
        title="Login"
        onBackClick={navigateBack}
        rightElement={
          <Button className="pt-3 pr-4 pb-3 pl-4 h-10 w-[101px]">
            New Entry
          </Button>
        }
      />

      <main className="flex justify-center items-center px-8 py-16 max-sm:px-4">
        <div className="w-[448px] max-sm:w-full">
          <section className="flex flex-col gap-2 items-center mb-12">
            <h2 className="text-2xl font-medium leading-8 text-center text-slate-700">
              Welcome Back
            </h2>
            <p className="text-base leading-6 text-center text-slate-600">
              Sign in to continue your journey
            </p>
          </section>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <InputField
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              iconSvg={emailIconSvg}
            />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium leading-4 text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={navigateToForgotPassword}
                  className="text-xs leading-4 text-blue-600 cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              <InputField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                iconSvg={passwordIconSvg}
              />
            </div>

            <Button type="submit" fullWidth className="mt-4">
              Sign in
            </Button>
          </form>

          <div className="flex gap-1 justify-center items-center mt-6">
            <span className="text-sm leading-5 text-slate-600">
              Don't have an account?
            </span>
            <button
              type="button"
              onClick={navigateToSignUp}
              className="text-sm leading-5 text-blue-600 cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
