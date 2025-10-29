import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Technician/Navbar";
import Sidebar from "../../Components/Technician/Sidebar";
import ServiceRequestTable_Request from "../../Components/Technician/ServiceRequestTable-Request";
import ServiceRequestDetails from "../../Components/Technician/ServiceRequestDetails"; // ✅ Make sure this is imported
import Footer from "../../Components/Common/Footer";
import ServiceRequestAccept from "../../Components/Technician/Service-Request-Accept";
import ServiceRequestSuccess from "../../Components/Technician/ServiceRequestSuccess";
import ServiceRequestFailed from "../../Components/Technician/ServiceRequestFaild";
import BG from "../../assets/images/technician-dashboard-bg-4.jpg";

export default function Accept_Service_Request() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const [requestData, setRequestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const techId = localStorage.getItem("technician_id");
        if (!techId) {
          console.error("Technician ID not found in localStorage");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `http://localhost/instrument-care-back-end/public/user/service-request/${techId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch service requests");
        }

        const data = await response.json();
        console.log("✅ Service Requests:", data);
        setRequestData(data);
      } catch (error) {
        console.error("Error fetching service requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

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
          <h2 className="text-xl font-bold mb-4">Accept Service Request</h2>

          {/* Service Request Table */}
          <ServiceRequestTable_Request
            data={requestData}
            onView={setSelectedRequest} // ✅ This sets selected request when clicked
          />

          {/* Detailed View */}
          {selectedRequest && (
            <>
              <br />
              {/* ✅ Pass selected request to details component */}
              <ServiceRequestDetails details={selectedRequest} />
            </>
          )}

          <br />

          {/* Conditional rendering for Accept form / Success */}
          {!showSuccess ? (
            // ✅ Pass selected request into Accept form as well
            <ServiceRequestAccept
              onSend={() => setShowSuccess(true)}
              initialFormData={{
                ownerEmail: selectedRequest?.email || "",
                subject: `Service Request #${selectedRequest?.id || ""} Accepted`,
                message:
                  "Dear Customer, your service request has been accepted and is now in progress.",
                request_id: selectedRequest?.id || null,
              }}
            />
          ) : (
            <ServiceRequestSuccess onBack={() => setShowSuccess(false)} />
          )}

          <br />
          {/* <ServiceRequestFailed/> */}
        </main>
      </div>

      <Footer />
    </>
  );
}
