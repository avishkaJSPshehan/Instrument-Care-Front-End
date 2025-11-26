import React from 'react'
import Navbar from '../../Components/Technician/Navbar'
import Admin_Sidebar from '../../Components/admin/Sidebar'
import AdminDashboardStats from '../../Components/admin/AdminDashboardStstus';
import AdminDashboardLineChart from '../../Components/admin/AdminServiceRequestLineChart'
import Footer from '../../Components/Common/Footer'
import BG from '../../assets/images/technician-dashboard-bg-4.jpg';

export default function Admin_Dashboard() {

  const chartData = [
    { date: "2025-01-01", count: 15 },
    { date: "2025-01-02", count: 12 },
    { date: "2025-01-03", count: 7 },
    { date: "2025-01-04", count: 18 },
    { date: "2025-01-01", count: 12 },
    { date: "2025-01-02", count: 11 },
    { date: "2025-01-03", count: 3 },
    { date: "2025-01-04", count: 18 },
    { date: "2025-01-01", count: 0 },
    { date: "2025-01-02", count: 12 },
    { date: "2025-01-03", count: 7 },
    { date: "2025-01-04", count: 18 },
    { date: "2025-01-01", count: 5 },
    { date: "2025-01-02", count: 22 },
    { date: "2025-01-03", count: 11 },
    { date: "2025-01-04", count: 23 },
    { date: "2025-01-03", count: 7 },
    { date: "2025-01-04", count: 10 },
    { date: "2025-01-01", count: 3 },
    { date: "2025-01-02", count: 2 },
    { date: "2025-01-03", count: 9 },
    { date: "2025-01-04", count: 18 },
    { date: "2025-01-01", count: 26 },
    { date: "2025-01-02", count: 30 },
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
          <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
          <AdminDashboardStats/>
          <AdminDashboardLineChart data={chartData}/>
          
        </main>
      </div>

      <Footer />
    </>
  )
}