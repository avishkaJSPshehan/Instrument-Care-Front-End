import React from "react";
import { Link } from "react-router-dom";
import profileImage from '../../assets/images/profile-image.jpeg';

export default function Sidebar() {
  return (
    <aside className="bg-[#ffffff80] text-black rounded-lg w-full md:w-64 flex-shrink-0 flex flex-col justify-between p-4 font-poppins">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center text-4xl mb-4">
          <img
                src={profileImage}
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
          />
        </div>
        <h2 className="text-lg font-bold">Pubudu Shehan</h2>
        <p className="text-sm text-gray-800">Electrical Technician</p>
        <hr className="w-full border-gray-700 my-4" />
        <nav className="flex flex-col items-center space-y-4 w-full">

            <Link to="/tech/dashboard">
                <button className="bg-white/40 text-gray-800 hover:bg-white/80 font-bold px-4 py-2 rounded-md w-48">
                    Dashboard
                </button>
            </Link>

            <Link to="/tech/service-request">
                <button className="bg-white/40 text-gray-800 hover:bg-white/80 font-bold px-4 py-2 rounded-md w-48">
                    Service Request
                </button>
            </Link>

            <Link to="/tech/profile">
                <button className="bg-white/40 text-gray-800 hover:bg-white/80 font-bold px-4 py-2 rounded-md w-48">
                    My Profile
                </button>
            </Link>

        </nav>
      </div>

      {/* Contact Section */}
      <div className="bg-orange-200 text-black rounded-lg p-4 text-sm mt-6">
        <p className="font-bold mb-2 text-center">Contact System Admin</p>
        <div className="flex items-center mb-2">
          📞 <span className="ml-2">(+94) 71 23 45 678</span>
        </div>
        <div className="flex items-center">
          ✉️ <span className="ml-2">admin@nsf.gov.lk</span>
        </div>
      </div>
    </aside>
  );
}
