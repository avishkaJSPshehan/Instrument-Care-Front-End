import React from "react";
import { Link } from "react-router-dom";

export default function ServiceRequestDetails({ details }) {
  // If no details are selected, show placeholders instead of real data
  const placeholder = !details;

  return (
    <div className="bg-[#ffffff80] rounded-lg p-4 mt-4">
      <h3 className="font-bold text-lg mb-3">Detailed View</h3>

      {/* Owner Details */}
      <div className="mb-4">
        <h4 className="font-bold">Owner Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2">
          <input
            disabled
            value={placeholder ? "" : details.owner}
            className="border rounded p-2 bg-gray-100"
            placeholder="Full Name"
          />
          <input
            disabled
            value={placeholder ? "" : details.email}
            className="border rounded p-2 bg-gray-100"
            placeholder="Email Address"
          />
          <input
            disabled
            value={placeholder ? "" : details.address}
            className="border rounded p-2 bg-gray-100"
            placeholder="Physical Address"
          />
          <input
            disabled
            value={placeholder ? "" : details.contact}
            className="border rounded p-2 bg-gray-100"
            placeholder="Contact Number"
          />
        </div>
      </div>

      {/* Instrument Details */}
      <div className="mb-4">
        <h4 className="font-bold">Instrument Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2">
          <input
            disabled
            value={placeholder ? "" : details.instrument}
            className="border rounded p-2 bg-gray-100"
            placeholder="Instrument Name"
          />
          <input
            disabled
            value={placeholder ? "" : details.model}
            className="border rounded p-2 bg-gray-100"
            placeholder="Instrument Model"
          />
          <input
            disabled
            value={placeholder ? "" : details.country}
            className="border rounded p-2 bg-gray-100"
            placeholder="Country"
          />
          <input
            disabled
            value={placeholder ? "" : details.period}
            className="border rounded p-2 bg-gray-100"
            placeholder="Consumption Period"
          />
        </div>
      </div>

      {/* Description */}
      <textarea
        disabled
        value={placeholder ? "" : details.description}
        className="border rounded p-2 w-full bg-gray-100"
        rows={3}
        placeholder="Description About Issue"
      ></textarea>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-4 sm:justify-end">
        <Link to='/tech/reject-service-request'>
        <button className="bg-red-500 text-white px-6 py-2 rounded font-bold w-md">
          Reject
        </button>
        </Link>
        <Link to='/tech/accept-service-request'>
        <button className="bg-green-500 text-white px-6 py-2 rounded font-bold w-md">
          Accept
        </button>
        </Link>
      </div>
    </div>
  );
}
