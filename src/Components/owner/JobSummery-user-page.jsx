import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JobSummaryTable_UserPage() {
  const { id: techId } = useParams(); // Get technician ID from URL
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!techId) return;

    const fetchServiceRequests = async () => {
      try {
        const response = await fetch(`http://localhost/instrument-care-back-end/public/user/service-request/${techId}`);
        if (!response.ok) throw new Error("No data found or server error");
        const data = await response.json();
        setJobs(Array.isArray(data) ? data : []); // Ensure it's always an array
      } catch (error) {
        console.error("Error fetching service requests:", error);
        setJobs([]); // Treat as empty if server not found or error occurs
      } finally {
        setLoading(false);
      }
    };

    fetchServiceRequests();
  }, [techId]);

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Job Summary</h3>
      </div>

      <div className="overflow-x-auto">
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
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 italic p-4">
                    Loading...
                  </td>
                </tr>
              ) : jobs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 italic p-4">
                    No job summaries found.
                  </td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr key={job.id} className="border-b">
                    <td className="p-2">{job.instrument_name}</td>
                    <td className="p-2">{job.full_name}</td>
                    <td className="p-2">{job.created_at.split(" ")[0]}</td>
                    <td className="p-2">{job.updated_at.split(" ")[0]}</td>
                    <td
                      className={`p-2 font-bold ${
                        job.status === "In Progress"
                          ? "text-blue-500"
                          : job.status === "Cancelled"
                          ? "text-red-500"
                          : job.status === "Pending"
                          ? "text-yellow-500"
                          : job.status === "Completed"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      {job.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
