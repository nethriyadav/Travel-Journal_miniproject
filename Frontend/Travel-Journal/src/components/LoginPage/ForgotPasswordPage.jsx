"use client";
import React, { useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

/**
 * Forgot Password page component
 */
const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset request logic here
    console.log("Request password reset for:", email);
    setIsSubmitted(true);
  };

  const navigateBack = () => {
    // Navigation logic would go here
    console.log("Navigate back to login");
    navigate("/login");
  };

  const navigateToLogin = () => {
    // Navigation logic would go here
    console.log("Navigate to login");
  };

  const emailIconSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
    <path d="M13.333 2.66675H2.66634C1.92996 2.66675 1.33301 3.2637 1.33301 4.00008V12.0001C1.33301 12.7365 1.92996 13.3334 2.66634 13.3334H13.333C14.0694 13.3334 14.6663 12.7365 14.6663 12.0001V4.00008C14.6663 3.2637 14.0694 2.66675 13.333 2.66675Z" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M14.6663 4.66675L8.68634 8.46675C8.48052 8.5957 8.24255 8.66409 7.99967 8.66409C7.7568 8.66409 7.51883 8.5957 7.31301 8.46675L1.33301 4.66675" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <div className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen">
      <Header title="Forgot Password" onBackClick={navigateBack} />

      <main className="flex justify-center items-center px-8 py-16 max-sm:px-4">
        <div className="w-[448px] max-sm:w-full">
          {!isSubmitted ? (
            <>
              <section className="flex flex-col gap-2 items-center mb-12">
                <h2 className="text-2xl font-medium leading-8 text-center text-slate-700">
                  Forgot Passwords
                </h2>
                <p className="text-base leading-6 text-center text-slate-600">
                  Enter your email to reset your password
                </p>
              </section>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputField
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  iconSvg={emailIconSvg}
                />

                <Button type="submit" fullWidth className="mt-4">
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <section className="flex flex-col gap-6 items-center">
              <div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-medium leading-8 text-center text-slate-700">
                Check Your Email
              </h2>

              <p className="text-base leading-6 text-center text-slate-600 max-w-sm">
                We've sent a password reset link to <strong>{email}</strong>.
                Please check your inbox and follow the instructions.
              </p>

              <Button onClick={navigateToLogin} className="mt-4 px-6">
                <Link to="/login">Back to login</Link>
              </Button>
            </section>
          )}

          <div className="flex gap-1 justify-center items-center mt-6">
            <span className="text-sm leading-5 text-slate-600">
              Remember your password?
            </span>
            <button
              type="button"
              onClick={navigateToLogin}
              className="text-sm leading-5 text-blue-600 cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;
