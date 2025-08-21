import React from "react";

export default function AllServiceRequestTable() {
  const requests = [
    // Empty array will show "No service requests found"
    ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
    ["Spectrometer", "Sophia Martinez", "2024/07/25", "+94 71 23 45 678"],
    ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
    ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
    ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
    ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
    ["Spectrometer", "Sophia Martinez", "2024/07/25", "+94 71 23 45 678"],
    ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
    ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
    ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
    ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
    ["Spectrometer", "Sophia Martinez", "2024/07/25", "+94 71 23 45 678"],
    ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
    ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
    ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
    ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
    ["Spectrometer", "Sophia Martinez", "2024/07/25", "+94 71 23 45 678"],
    ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
    ["Centrifuge", "James Anderson", "2024/07/25", "+94 71 23 45 678"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "+94 71 23 45 678"],
    ["Microscope", "Ava Thompson", "2024/07/25", "+94 71 23 45 678"],
  ];

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 mb-6 font-poppins min-h-[780px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Service Request</h3>
        {/* <button className="bg-teal-600 text-white px-4 py-1 rounded-md text-sm">
          View all
        </button> */}
      </div>

      <div className="overflow-x-auto">
        {requests.length === 0 ? (
          <p className="text-gray-500 italic p-4 text-center">
            No service requests found.
          </p>
        ) : (
          <div className="max-h-[720px] overflow-y-auto">
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
                {requests.map((row, i) => (
                  <tr key={i} className="border-b">
                    {row.map((cell, j) => (
                      <td key={j} className="p-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
