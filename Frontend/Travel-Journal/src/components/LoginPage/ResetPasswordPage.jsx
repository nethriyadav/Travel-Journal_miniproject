"use client";
import React, { useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import Button from "./Button";

/**
 * Reset Password page component
 */
const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    // Clear any errors
    setPasswordError("");

    // Handle password reset logic here
    console.log("Reset password to:", password);
    setIsSubmitted(true);
  };

  const navigateBack = () => {
    // Navigation logic would go here
    console.log("Navigate back");
  };

  const navigateToLogin = () => {
    // Navigation logic would go here
    console.log("Navigate to login");
  };

  const passwordIconSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px]">
    <path d="M12.6667 7.33325H3.33333C2.59695 7.33325 2 7.93021 2 8.66659V13.3333C2 14.0696 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0696 14 13.3333V8.66659C14 7.93021 13.403 7.33325 12.6667 7.33325Z" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M4.66699 7.33325V4.66659C4.66699 3.78253 5.01818 2.93468 5.6433 2.30956C6.26842 1.68444 7.11627 1.33325 8.00033 1.33325C8.88438 1.33325 9.73223 1.68444 10.3573 2.30956C10.9825 2.93468 11.3337 3.78253 11.3337 4.66659V7.33325" stroke="#4D6280" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`;

  return (
    <div className="flex flex-col bg-[linear-gradient(0deg,#F9FAFB_0%,#F9FAFB_100%),#FFF] min-h-screen">
      <Header title="Reset Password" onBackClick={navigateBack} />

      <main className="flex justify-center items-center px-8 py-16 max-sm:px-4">
        <div className="w-[448px] max-sm:w-full">
          {!isSubmitted ? (
            <>
              <section className="flex flex-col gap-2 items-center mb-12">
                <h2 className="text-2xl font-medium leading-8 text-center text-slate-700">
                  Reset Your Password
                </h2>
                <p className="text-base leading-6 text-center text-slate-600">
                  Create a new password for your account
                </p>
              </section>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputField
                  label="New Password"
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  iconSvg={passwordIconSvg}
                />

                <InputField
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  iconSvg={passwordIconSvg}
                />

                {passwordError && (
                  <p className="text-sm text-red-500 mt-1">{passwordError}</p>
                )}

                <div className="mt-2 text-xs text-slate-600">
                  <p>Password must:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Be at least 8 characters long</li>
                    <li>Include at least one uppercase letter</li>
                    <li>Include at least one number</li>
                    <li>Include at least one special character</li>
                  </ul>
                </div>

                <Button type="submit" fullWidth className="mt-4">
                  Reset Password
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
                Password Reset Successful
              </h2>

              <p className="text-base leading-6 text-center text-slate-600 max-w-sm">
                Your password has been reset successfully. You can now log in
                with your new password.
              </p>

              <Button onClick={navigateToLogin} className="mt-4 px-6">
                Go to Login
              </Button>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
