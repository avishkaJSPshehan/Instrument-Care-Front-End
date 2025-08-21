import React from "react";
import { Link } from "react-router-dom";

export default function ServiceRequestTable_Request({ data, onView }) {
  return (
    <div className="bg-[#ffffff80] rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">Pending Service Request</h3>
        <Link to="/tech/all-service-request">
          <button className="bg-orange-600 text-white px-4 py-1 rounded-md text-sm hover:bg-orange-400">
            View all
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Instrument</th>
              <th className="p-2">Owner</th>
              <th className="p-2">Start Date</th>
              <th className="p-2">Contact Number</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
        </table>

        {/* Scrollable Body */}
        <div className="max-h-[230px] overflow-y-auto"> 
          {/* 6 rows × ~48px row height = 288px */}
          <table className="w-full text-sm text-left border-collapse">
            <tbody>
              {data.map((req, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{req.instrument}</td>
                  <td className="p-2">{req.owner}</td>
                  <td className="p-2">{req.startDate}</td>
                  <td className="p-2">{req.contact}</td>
                  <td className="p-2">
                    <button
                      className="bg-orange-400 text-white px-4 py-1 rounded-md text-sm hover:bg-orange-300"
                      onClick={() => onView(req)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
