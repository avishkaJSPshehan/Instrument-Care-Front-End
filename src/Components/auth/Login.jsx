import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "", 
    password: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      console.log("Login Response:", result);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center m-0 p-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('../../src/assets/images/hero-bg-5.jpg')",
        }}
      ></div>

      {/* Main Login Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row bg-gray-50 bg-opacity-90 shadow-2xl rounded-none md:rounded-2xl overflow-hidden transform -translate-y-[5vh]">
        {/* Left Panel - Sign In */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-6 sm:px-10 md:px-16 md:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
            Sign In
          </h2>

          {/* Important Notice */}
          <div className="bg-yellow/70 border-2 border-red-500 rounded-xl p-3 sm:p-4 flex flex-col items-center text-center mb-5">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">
              Important
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              This system is integrated with the{" "}
              <b>National Instrument Database (NID)</b>. Use your existing{" "}
              <b>NID username</b> and <b>password</b> to sign in. No need to
              create a new account.
            </p>
          </div>

          <p className="text-sm sm:text-md text-gray-500 mb-4 text-center">
            Please log in to access the Instrument Care System.
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 sm:p-4 border rounded-md text-md"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 sm:p-4 border rounded-md text-md"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />

          <p className="text-sm text-right text-blue-600 mb-5 cursor-pointer">
            Forget Your Password?
          </p>
          
          <Link to="/user/dashboard">
            <button
              className="w-full bg-orange-400 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-500"
              onClick={handleLogin}
            >
              SIGN IN
            </button>
          </Link>
        </div>

        {/* Right Panel - Technician Join (hidden on mobile) */}
        <div
          className="hidden md:flex w-1/2 flex-col justify-center items-center px-12 text-white"
          style={{
            background: "linear-gradient(135deg, #e78f0c, #e78f0c)",
            borderTopLeftRadius: "120px",
            borderBottomLeftRadius: "120px",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Join as a Technician
          </h2>
          <p className="text-lg text-center mb-8">
            Ready to help others and grow your career? Set up your technician
            profile and start accepting service requests!
          </p>
          <Link to="/auth/tech-registration">
            <button className="border border-white px-8 py-2 rounded-md hover:bg-white hover:text-orange-600 transition text-lg font-semibold">
              I'M TECHNICIAN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
