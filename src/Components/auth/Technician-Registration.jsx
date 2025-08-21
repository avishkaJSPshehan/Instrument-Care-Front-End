import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TechnicianRegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/technician/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      console.log("Registration Response:", result);
    } catch (err) {
      console.error("Registration failed:", err);
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

      {/* Main Container */}
      <div className="relative h-150 z-10 w-full max-w-6xl flex flex-col md:flex-row bg-gray-50 bg-opacity-90 shadow-2xl rounded-none md:rounded-2xl overflow-hidden transform -translate-y-[5vh]">
        {/* Orange Side */}
        <div
          className="hidden md:flex w-1/2 flex-col justify-center items-center px-8 lg:px-12 text-white"
          style={{
            background: "linear-gradient(135deg, #e78f0c, #e78f0c)",
            borderTopRightRadius: "80px",
            borderBottomRightRadius: "80px",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-poppins text-center">
            Join as a Technician
          </h2>
          <p className="text-lg text-center mb-8 font-poppins max-w-sm">
            Create your profile to start serving instrument owners.
          </p>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-6 sm:px-10 md:px-16 md:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left font-poppins">
            Technician Registration
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 p-3 sm:p-4 border rounded-md text-md font-poppins"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 sm:p-4 border rounded-md text-md font-poppins"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full mb-3 p-3 sm:p-4 border rounded-md text-md font-poppins"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Technical Skills"
            className="w-full mb-3 p-3 sm:p-4 border rounded-md text-md font-poppins"
            value={formData.skills}
            onChange={(e) =>
              setFormData({ ...formData, skills: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-3 sm:p-4 border rounded-md text-md font-poppins"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-4 p-3 sm:p-4 border rounded-md text-md font-poppins"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value,
              })
            }
          />

  
            <Link to="/tech/dashboard">
              <button onClick={handleRegister}  className="w-full bg-orange-400 text-white py-3 rounded-md text-lg font-semibold font-poppins hover:bg-orange-600 transition">
                REGISTER
              </button>
            </Link>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="w-full bg-orange-200 text-orange-400 py-3 rounded-md text-lg font-semibold font-poppins hover:bg-orange-100 transition">
                GO BACK
              </button>
            </Link>
          </div> */}

        </div>
      </div>
    </div>
  );
}
