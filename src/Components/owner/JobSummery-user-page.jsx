import React from "react";
import { Link } from "react-router-dom";

export default function JobSummaryTable_UserPage() {
  const jobs = [
    // Uncomment to test
    ["Microscope", "Ava Thompson", "2024/07/25", "2024/08/25", "Pass"],
    ["Spectrometer", "Sophia Martinez", "2024/07/25", "2024/08/25", "Rejected"],
    ["Centrifuge", "James Anderson", "2024/07/25", "2024/08/25", "Pass"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "2024/08/25", "Pending"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "2024/08/25", "Pending"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "2024/08/25", "Pending"],
    ["Microscope", "Ava Thompson", "2024/07/25", "2024/08/25", "Pass"],
    ["Spectrometer", "Sophia Martinez", "2024/07/25", "2024/08/25", "Rejected"],
    ["Centrifuge", "James Anderson", "2024/07/25", "2024/08/25", "Pass"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "2024/08/25", "Pending"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "2024/08/25", "Pending"],
    ["X-ray Equipment", "Isabella Brown", "2024/07/25", "2024/08/25", "Pending"],
  ];

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Job Summary</h3>
      </div>

      <div className="overflow-x-auto">
        {jobs.length === 0 ? (
          <p className="text-gray-500 italic p-4 text-center">
            No job summaries found.
          </p>
        ) : (
          <div className="max-h-[420px] overflow-y-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Instrument</th>
                  <th className="p-2">Owner</th>
                  <th className="p-2">Start Date</th>
                  <th className="p-2">End Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((row, i) => (
                  <tr key={i} className="border-b">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`p-2 ${
                          cell === "Pass"
                            ? "text-green-500 font-bold"
                            : cell === "Rejected"
                            ? "text-red-500 font-bold"
                            : cell === "Pending"
                            ? "text-yellow-500 font-bold"
                            : ""
                        }`}
                      >
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
