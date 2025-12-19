import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bg from "../../assets/images/hero-bg-5.jpg";

export default function NewUserRegistration() {
  const [formData, setFormData] = useState({
    title: "",
    gender: "",
    first_name: "",
    last_name: "",
    address: "",
    participated_institute: "",
    other_institute: "",
    faculty: "",
    department: "",
    designation: "",
    phone_number: "",
    mobile_number: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/instrument-care-back-end/public/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.message === "Login successful") {
        navigate("/user/dashboard");
      } else {
        setError("Registration failed. Please check your details.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-2 sm:px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Bg})` }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl bg-gray-50 bg-opacity-95 shadow-2xl rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">

          {/* LEFT PANEL */}
          <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
              Register Here
            </h2>

            {error && (
              <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md text-center">
                {error}
              </div>
            )}

            {/* Title + Gender SAME ROW */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                name="title"
                className="input"
                onChange={handleChange}
              >
                <option value="">Title</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
                <option>Dr</option>
              </select>

              <select
                name="gender"
                className="input"
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <input
              name="first_name"
              placeholder="First Name"
              className="input"
              onChange={handleChange}
            />
            <input
              name="last_name"
              placeholder="Last Name"
              className="input"
              onChange={handleChange}
            />
            <input
              name="address"
              placeholder="Address"
              className="input"
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="input"
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input"
              onChange={handleChange}
            />
            <input
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              className="input"
              onChange={handleChange}
            />
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-12 bg-gray-50">
            <select
              name="participated_institute"
              className="input"
              onChange={handleChange}
            >
              <option value="">Participated Institute</option>
              <option>University of Colombo</option>
              <option>University of Peradeniya</option>
              <option>Other</option>
            </select>

            <input
              name="other_institute"
              placeholder="Other Institute"
              className="input"
              onChange={handleChange}
            />

            <select
              name="faculty"
              className="input"
              onChange={handleChange}
            >
              <option value="">Faculty (Universities only)</option>
              <option>Science</option>
              <option>Engineering</option>
              <option>Medicine</option>
            </select>

            <input
              name="department"
              placeholder="Department / Division"
              className="input"
              onChange={handleChange}
            />

            <select
              name="designation"
              className="input"
              onChange={handleChange}
            >
              <option value="">Designation</option>
              <option>Student</option>
              <option>Lecturer</option>
              <option>Researcher</option>
              <option>Officer</option>
            </select>

            <input
              name="phone_number"
              placeholder="Phone Number"
              className="input"
              onChange={handleChange}
            />
            <input
              name="mobile_number"
              placeholder="Mobile Number"
              className="input"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* COMMON ACTION BUTTONS (NO HORIZONTAL LINE) */}
        <div className="w-full px-5 sm:px-8 md:px-12 py-6 bg-gray-50 flex flex-col items-center gap-3">
          <button
            className="w-full sm:w-1/2 bg-orange-400 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-500 transition"
            onClick={handleRegister}
          >
            Register
          </button>

          <Link
            to="/auth/login"
            className="text-sm text-blue-600 hover:underline"
          >
            Already have an account? Sign In
          </Link>
        </div>
      </div>

      {/* Reusable input style */}
      <style>
        {`
          .input {
            width: 100%;
            margin-bottom: 1rem;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            font-size: 0.95rem;
          }
        `}
      </style>
    </div>
  );
}
