import React from 'react'
import Navbar from '../../Components/Technician/Navbar'
import Admin_Sidebar from '../../Components/admin/Sidebar'
import AllOwnerTable from '../../Components/admin/AdminAllOwners';
import Footer from '../../Components/Common/Footer'
import BG from '../../assets/images/technician-dashboard-bg-4.jpg';

export default function All_Users() {

  const users = [
  {
      fullName: "John Doe",
      email: "john@example.com",
      contact: "0771234567",
      role: "Admin",
      createdAt: "2025-01-01",
      active: true,
      bio: "Experienced admin",
    },
    {
      fullName: "Jane Smith",
      email: "jane@example.com",
      contact: "0779876543",
      role: "Technician",
      createdAt: "2025-02-15",
      active: false,
      bio: "Lab technician",
    },
    {
      fullName: "Bob Brown",
      email: "bob@example.com",
      contact: "0775554433",
      role: "User",
      createdAt: "2025-03-10",
      active: true,
      bio: "General user",
    },
];

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
          <h2 className="text-xl font-bold mb-4">All Owners</h2>
          <AllOwnerTable usersData={users}/>
          
        </main>
      </div>

      <Footer />
    </>
  )
}