import React, { useEffect, useState } from "react";

export default function AllServiceRequestTable() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(
          "http://localhost/instrument-care-back-end/public/api/service-requests",
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`, // if needed
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch service requests");

        const data = await response.json();
        setRequests(data); // assume backend returns array of objects
      } catch (err) {
        console.error(err);
        setError("Failed to load service requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 mb-6 font-poppins min-h-[780px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Service Requests</h3>
      </div>

      {loading ? (
        <p className="text-gray-500 italic p-4 text-center">Loading service requests...</p>
      ) : error ? (
        <p className="text-red-500 italic p-4 text-center">{error}</p>
      ) : requests.length === 0 ? (
        <p className="text-gray-500 italic p-4 text-center">No service requests found.</p>
      ) : (
        <div className="overflow-x-auto max-h-[720px] overflow-y-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Instrument</th>
                <th className="p-2">Owner</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b">
                  <td className="p-2">{request.instrument_name}</td>
                  <td className="p-2">{request.full_name}</td>
                  <td className="p-2">{new Date(request.created_at).toLocaleDateString()}</td>
                  <td className="p-2">{request.contact_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}



// [
//     // Empty array will show "No service requests found"
//     ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
//     ["Spectrometer", "Sophia Martinez", "2024/07/25", "+94 71 23 45 678"],
//     ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
//     ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
//     ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
//     ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
//     ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
//     ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
//     ["Spectrometer", "Sophia Martinez", "2024/07/25", "+94 71 23 45 678"],
//     ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
//     ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
//     ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
//     ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
//     ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
//     ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
//     ["Spectrometer", "Sophia Martinez", "2024/07/25", "+94 71 23 45 678"],
//     ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
//     ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
//     ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
//     ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
//     ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
//     ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
//     ["Spectrometer", "Sophia Martinez", "2024/07/25", "+94 71 23 45 678"],
//     ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
//     ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
//     ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
//     ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
//     ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
// ];