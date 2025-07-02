"use client";

import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
    console.log("Back button clicked");
    // Handle navigation logic here
  };

  const handleNewEntryClick = () => {
    console.log("New Entry button clicked");
    // Handle new entry logic here
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Header
        title="Login"
        onBackClick={handleBackClick}
        actionButtonText="New Entry"
        onActionClick={handleNewEntryClick}
      />

      <div className="flex justify-center pt-16">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
