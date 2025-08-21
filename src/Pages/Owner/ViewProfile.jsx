import React from 'react'
import Navbar from '../../Components/owner/Navbar'
import Footer from '../../Components/Common/Footer'
import Tabs from "../../Components/owner/Tabs";
import ProfileCard from "../../Components/owner/ProfileCard";
import DashboardStats from '../../Components/Technician/DashboardStats';
import JobSummaryTable_UserPage from '../../Components/owner/JobSummery-user-page';

export default function ViewProfile() {
  return (
    <>
      <Navbar />

      {/* Full Page Layout */}
      <div
        className="flex flex-col md:flex-row h-full w-full p-2 md:p-4 gap-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/images/technician-dashboard-bg-4.jpg')",
        }}
      >
        <div className="w-full  bg-[#ffffff70] p-6 font-poppins rounded-md">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-6">Technician Profile</h1>

          {/* Tabs */}
          <Tabs />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4">
            {/* Profile Left Side */}
            <div className="lg:col-span-1">
              <ProfileCard />
            </div>

            {/* Right Side */}
            <div className="lg:col-span-2 flex flex-col">
              <DashboardStats />
              <JobSummaryTable_UserPage />
            </div>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  )
}
