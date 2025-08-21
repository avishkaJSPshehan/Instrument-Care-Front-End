import React, { useState } from "react";
import Navbar from '../../Components/Technician/Navbar'
import Sidebar from '../../Components/Technician/Sidebar'
import ServiceRequestTable_Request from "../../Components/Technician/ServiceRequestTable-Request";
import ServiceRequestDetails from "../../Components/Technician/ServiceRequestDetails";
import Footer from '../../Components/Common/Footer'
import BG from '../../assets/images/technician-dashboard-bg-4.jpg';

export default function Service_Request() {
    const [selectedRequest, setSelectedRequest] = useState(null);

  const requestData = [
    {
      instrument: "Microscope",
      owner: "Ava Thompson",
      startDate: "2024/07/25",
      contact: "+94 71 23 45 678",
      email: "ava@example.com",
      address: "123 Main St",
      model: "X200",
      country: "Sri Lanka",
      period: "6 months",
      description: "Lens alignment issue."
    },
    {
      instrument: "Microscope",
      owner: "Ava Thompson",
      startDate: "2024/07/25",
      contact: "+94 71 23 45 678",
      email: "ava@example.com",
      address: "123 Main St",
      model: "X200",
      country: "Sri Lanka",
      period: "6 months",
      description: "Lens alignment issue."
    },
    {
      instrument: "Microscope",
      owner: "Ava Thompson",
      startDate: "2024/07/25",
      contact: "+94 71 23 45 678",
      email: "ava@example.com",
      address: "123 Main St",
      model: "X200",
      country: "Sri Lanka",
      period: "6 months",
      description: "Lens alignment issue."
    },
    {
      instrument: "Microscope",
      owner: "Ava Thompson",
      startDate: "2024/07/25",
      contact: "+94 71 23 45 678",
      email: "ava@example.com",
      address: "123 Main St",
      model: "X200",
      country: "Sri Lanka",
      period: "6 months",
      description: "Lens alignment issue."
    },
    {
      instrument: "Spectrometer",
      owner: "Sophia Martinez",
      startDate: "2024/07/25",
      contact: "+94 71 23 45 678",
      email: "sophia@example.com",
      address: "456 Elm St",
      model: "Spec500",
      country: "Sri Lanka",
      period: "1 year",
      description: "Calibration needed."
    }
    ,
    {
      instrument: "Spectrometer",
      owner: "Sophia Martinez",
      startDate: "2024/07/25",
      contact: "+94 71 23 45 678",
      email: "sophia@example.com",
      address: "456 Elm St",
      model: "Spec500",
      country: "Sri Lanka",
      period: "1 year",
      description: "Calibration needed."
    }
    ,
    {
      instrument: "Spectrometer",
      owner: "Sophia Martinez",
      startDate: "2024/07/25",
      contact: "+94 71 23 45 678",
      email: "sophia@example.com",
      address: "456 Elm St",
      model: "Spec500",
      country: "Sri Lanka",
      period: "1 year",
      description: "Calibration needed."
    }
    ,
    {
      instrument: "Spectrometer",
      owner: "Sophia Martinez",
      startDate: "2024/07/25",
      contact: "+94 71 23 45 678",
      email: "sophia@example.com",
      address: "456 Elm St",
      model: "Spec500",
      country: "Sri Lanka",
      period: "1 year",
      description: "Calibration needed."
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
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-[#ffffff80] rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Service Request</h2>
          <ServiceRequestTable_Request data={requestData} onView={setSelectedRequest} />
        <ServiceRequestDetails details={selectedRequest} />
        </main>
      </div>

      <Footer />
    </>
  )
}


