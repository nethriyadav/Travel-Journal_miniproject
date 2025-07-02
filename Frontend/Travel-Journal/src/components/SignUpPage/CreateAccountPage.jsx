"use client";
import React from "react";
import Header from "./Header";
import RegistrationForm from "./RegistrationForm";

function CreateAccountPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Header title="Create Account"  />
      <section className="flex justify-center pt-16">
        <div className="p-8 w-[448px] max-md:p-6 max-md:w-full max-md:max-w-md max-sm:p-4">
          <h1 className="mb-2 text-2xl text-center text-slate-700">
            Welcome to Travel Journal App
          </h1>
          <p className="mb-12 text-base text-center text-slate-600">
            Start your journey with us
          </p>
          <RegistrationForm/>
        </div>
      </section>
    </main>
  );
}

export default CreateAccountPage;
