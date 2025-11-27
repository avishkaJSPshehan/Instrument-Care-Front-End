import React from 'react'
import Navbar from '../../Components/Technician/Navbar'
import Admin_Sidebar from '../../Components/admin/Sidebar'
import AdminAllServiceRequest from '../../Components/admin/AdminAllServiceRequest';
import Footer from '../../Components/Common/Footer'
import BG from '../../assets/images/technician-dashboard-bg-4.jpg';

export default function All_Service_Requests() {

  const sampleRequestsData = [
  {
    id: "REQ-001",
    requesterName: "John Doe",
    email: "john.doe@example.com",
    instrument: "Microscope Model X",
    status: "Pending",
    requestedOn: "2025-11-20",
    notes: "Needs urgent calibration.",
    active: true,
  },
  {
    id: "REQ-002",
    requesterName: "Jane Smith",
    email: "jane.smith@example.com",
    instrument: "Centrifuge Model A1",
    status: "In Progress",
    requestedOn: "2025-11-18",
    notes: "Check rotor balance and safety lock.",
    active: true,
  },
  {
    id: "REQ-003",
    requesterName: "Bob Brown",
    email: "bob.brown@example.com",
    instrument: "Spectrophotometer SP-200",
    status: "Completed",
    requestedOn: "2025-11-15",
    notes: "Replaced light source and cleaned optical path.",
    active: false,
  },
  {
    id: "REQ-004",
    requesterName: "Alice Green",
    email: "alice.green@example.com",
    instrument: "pH Meter PH-50",
    status: "Pending",
    requestedOn: "2025-11-21",
    notes: "Calibration required before next experiment.",
    active: true,
  },
  {
    id: "REQ-005",
    requesterName: "Michael Lee",
    email: "michael.lee@example.com",
    instrument: "Autoclave AC-300",
    status: "In Progress",
    requestedOn: "2025-11-19",
    notes: "Check pressure sensor and temperature gauge.",
    active: true,
  }
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
          <h2 className="text-xl font-bold mb-4">All Service Requests</h2>
          <AdminAllServiceRequest requestsData={sampleRequestsData} />
          
        </main>
      </div>

      <Footer />
    </>
  )
}