import React from 'react'
import Navbar from '../../Components/Technician/Navbar'
import Admin_Sidebar from '../../Components/admin/Sidebar'
import Footer from '../../Components/Common/Footer'
import BG from '../../assets/images/technician-dashboard-bg-4.jpg';

export default function All_Users() {
  return (
    <>
      <Navbar />

      {/* Background Image Wrapper */}
      <div
        className="flex flex-col md:flex-row h-full w-full p-2 md:p-4 gap-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG})`,
        }}
      >
        {/* Sidebar */}
        <Admin_Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-[#ffffff80] rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">All Users</h2>
          
        </main>
      </div>

      <Footer />
    </>
  )
}