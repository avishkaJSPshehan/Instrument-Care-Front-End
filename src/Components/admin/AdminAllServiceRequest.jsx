import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function AdminAllServiceRequest({ requestsData }) {
  const initialRequests = requestsData || [];

  const [requests, setRequests] = useState(initialRequests);
  const [editingRequest, setEditingRequest] = useState(null);
  const [viewRequest, setViewRequest] = useState(null);

  const handleEditClick = (request) => {
    setEditingRequest({ ...request });
  };

  const handleViewClick = (request) => {
    setViewRequest(request);
  };

  const handleCloseModal = () => {
    setEditingRequest(null);
    setViewRequest(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingRequest((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === editingRequest.id ? editingRequest : req
      )
    );
    handleCloseModal();
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service request?"
    );
    if (confirmed) {
      setRequests((prev) => prev.filter((req) => req.id !== id));
    }
  };

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins min-h-[720px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-gray-800">All Service Requests</h3>
      </div>

      <div className="overflow-x-auto">
        {requests.length === 0 ? (
          <p className="text-gray-500 italic p-4 text-center">No service requests found.</p>
        ) : (
          <div className="max-h-[720px] overflow-y-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b bg-gray-100 text-gray-700">
                  <th className="p-3">Request ID</th>
                  <th className="p-3">Requester Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Instrument</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Requested On</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((req, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-orange-50 transition-colors"
                  >
                    <td className="p-3">{req.id}</td>
                    <td className="p-3">{req.requesterName}</td>
                    <td className="p-3">{req.email}</td>
                    <td className="p-3">{req.instrument}</td>
                    <td className="p-3">{req.status}</td>
                    <td className="p-3">{req.requestedOn}</td>

                    <td className="p-3 flex gap-2 text-lg">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => handleViewClick(req)}
                      >
                        <FaEye />
                      </button>

                      <button
                        className="text-orange-600 hover:text-orange-800"
                        onClick={() => handleEditClick(req)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(req.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ---------------------- VIEW MODAL ----------------------- */}
      {viewRequest && (
        <div className="fixed inset-0 bg-[#1a191790] flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">View Service Request</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(viewRequest).map(([key, value]) => (
                <div key={key}>
                  <label className="font-medium capitalize">{key.replace(/_/g, " ")}</label>
                  <p className="mt-1 p-2 border rounded bg-gray-100">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------- EDIT MODAL ----------------------- */}
      {editingRequest && (
        <div className="fixed inset-0 bg-[#1a191790] flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Edit Service Request</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LEFT */}
              <div className="flex flex-col gap-3">
                <label className="font-medium">
                  Requester Name *
                  <input
                    type="text"
                    name="requesterName"
                    value={editingRequest.requesterName}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Email *
                  <input
                    type="email"
                    name="email"
                    value={editingRequest.email}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Instrument *
                  <input
                    type="text"
                    name="instrument"
                    value={editingRequest.instrument}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="flex items-center gap-2 mt-3">
                  <input
                    type="checkbox"
                    name="active"
                    checked={editingRequest.active}
                    onChange={handleChange}
                    className="w-5 h-5 accent-orange-600"
                  />
                  <span className="font-medium">Active</span>
                </label>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-3">
                <label className="font-medium">
                  Status *
                  <input
                    type="text"
                    name="status"
                    value={editingRequest.status}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Requested On
                  <input
                    type="date"
                    name="requestedOn"
                    value={editingRequest.requestedOn}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Notes
                  <textarea
                    name="notes"
                    value={editingRequest.notes}
                    onChange={handleChange}
                    rows={6}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                onClick={handleCloseModal}
              >
                Cancel
              </button>

              <button
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
