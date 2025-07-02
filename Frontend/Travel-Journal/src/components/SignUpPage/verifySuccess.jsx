import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifySuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Redirect to homepage after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clean up
  }, [navigate]);

  return (
    <div className="text-center mt-20 px-4">
      <h2 className="text-2xl font-bold text-green-600 mb-3">✅ Email Verified!</h2>
      <p className="text-gray-700">You will be redirected to the homepage in 5 seconds and please manually log in again...</p>
    </div>
  );
};

export default VerifySuccess;
