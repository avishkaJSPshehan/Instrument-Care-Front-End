import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bg from "../../assets/images/hero-bg-5.jpg";
import ForgotImg from "../../assets/images/fp-email-sending.webp"; // add your illustration here

export default function SetNewPassword_ForgotPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setMessage("");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/instrument-care-back-end/public/api/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const result = await response.json();
      console.log("Reset Password Response:", result);

      if (response.ok) {
        setError("");
        setMessage("Your password has been reset successfully!");
      } else {
        setMessage("");
        setError(result.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      setMessage("");
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center m-0 p-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Bg})` }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col bg-gray-50 bg-opacity-90 shadow-2xl rounded-none md:rounded-2xl overflow-hidden transform -translate-y-[5vh] px-6 py-10 sm:px-12 sm:py-14">
        
        {/* Top Illustration */}
        <div className="flex justify-center mb-4">
          <img 
            src={ForgotImg} 
            alt="Reset Password Illustration" 
            className="w-40 h-40"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
          Reset password
        </h2>

        <p className="text-sm sm:text-md text-gray-500 mb-6 text-center">
          Please kindly set your new password.
        </p>

        {/* Success / Error Messages */}
        {message && (
          <div className="mb-4 p-2 text-sm text-green-700 bg-green-100 border border-green-400 rounded-md text-center">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 p-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md text-center">
            {error}
          </div>
        )}

        {/* Password Input */}
        <div className="flex justify-center">
          <input
            type="password"
            placeholder="Set new password"
            className="w-lg mb-3 px-3 py-2 border rounded-md text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password Input */}
        <div className="flex justify-center">
          <input
            type="password"
            placeholder="Confirm password"
            className="w-lg mb-3 px-3 py-2 border rounded-md text-sm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            className="w-lg bg-orange-400 text-white py-2 rounded-md text-md font-semibold hover:bg-orange-500"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>

        {/* Back to Login */}
        <div className="mt-4 text-center">
          <Link to="/auth/login" className="text-sm text-blue-600 hover:underline">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
