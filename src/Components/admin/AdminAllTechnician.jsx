import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Import icons

export default function AllTechnicianTable({ usersData }) {
  const initialUsers = usersData || [];

  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);

  const handleEditClick = (user) => setEditingUser({ ...user });
  const handleViewClick = (user) => setViewingUser({ ...user });
  const handleCloseModal = () => setEditingUser(null);
  const handleCloseViewModal = () => setViewingUser(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    setUsers((prev) =>
      prev.map((u) => (u.id === editingUser.id ? editingUser : u))
    );
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this technician?")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins min-h-[720px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">All Technicians</h3>
      </div>

      <div className="overflow-x-auto">
        {users.length === 0 ? (
          <p className="text-gray-500 italic p-4 text-center">
            No technicians found.
          </p>
        ) : (
          <div className="max-h-[720px] overflow-y-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Full Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Contact</th>
                  <th className="p-2">Created At</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{user.full_name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.personal_number}</td>
                    <td className="p-2">{user.created_at}</td>
                    <td className="p-2 flex gap-3">
                      <FaEye
                        className="text-blue-600 cursor-pointer hover:text-blue-500"
                        size={18}
                        onClick={() => handleViewClick(user)}
                      />
                      <FaEdit
                        className="text-orange-600 cursor-pointer hover:text-orange-500"
                        size={18}
                        onClick={() => handleEditClick(user)}
                      />
                      <FaTrash
                        className="text-red-600 cursor-pointer hover:text-red-500"
                        size={18}
                        onClick={() => handleDelete(user.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* EDIT MODAL */}
      {editingUser && (
        <div className="fixed inset-0 bg-[#1a191790] flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Edit Technician Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(editingUser).map(([key, value]) => (
                <label key={key} className="flex flex-col gap-1">
                  {key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  {typeof value === "boolean" ? (
                    <input
                      type="checkbox"
                      name={key}
                      checked={value}
                      onChange={handleChange}
                      className="w-5 h-5 accent-orange-600"
                    />
                  ) : (
                    <input
                      type="text"
                      name={key}
                      value={value ?? ""}
                      onChange={handleChange}
                      className="border rounded p-2 w-full font-normal bg-gray-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  )}
                </label>
              ))}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-200"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODERN VIEW MODAL */}
      {viewingUser && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="relative bg-white rounded-2xl w-full max-w-5xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
            
            {/* Left Column - Profile */}
            <div className="bg-gray-50 p-8 flex flex-col items-center w-full md:w-1/3">
              <img
                src={viewingUser.profile_image_url || "https://via.placeholder.com/150"}
                alt={viewingUser.full_name}
                className="w-40 h-40 rounded-full object-cover border-4 border-orange-500 shadow-md mb-4"
              />
              <h2 className="text-2xl font-bold text-center mb-1">{viewingUser.full_name}</h2>
              <p className="text-gray-500 text-sm text-center mb-6">{viewingUser.current_designation || "-"}</p>
              <p className="text-gray-500 text-sm text-center mb-6">{viewingUser.bio || "-"}</p>

              {/* Work Section */}
              <div className="w-full mb-6 flex justify-between items-center">
                {/* Left: Company Name */}
                <p className="text-gray-400 text-sm">Company: {viewingUser.company_name || "-"}</p>

                {/* Right: Designation & Experience */}
                <div className="text-right">
                  {/* <p className="text-gray-400 text-xs">{viewingUser.company_designation || "-"}</p> */}
                  <p className="text-gray-400 text-sm">
                    Experience: {viewingUser.years_of_experience ?? "-"} Year(s)
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              {viewingUser.skills?.length > 0 && (
                <div className="w-full">
                  <h3 className="font-semibold text-gray-700 mb-2 border-b pb-1">Skills</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {viewingUser.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column - Info */}
            <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto">
              
              {/* Contact Information */}
              <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 pr-0 md:pr-4">
                <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
                <p><span className="font-medium">Email: </span>{viewingUser.email || "-"}</p>
                <p><span className="font-medium">Phone: </span>{viewingUser.personal_number || "-"}</p>
                <p><span className="font-medium">Address: </span>{viewingUser.address || "-"}</p>
              </div>

              {/* Basic Information */}
              <div className="pb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Basic Information</h3>
                <p><span className="font-medium">NIC: </span>{viewingUser.nic || "-"}</p>
                <p><span className="font-medium">Institute: </span>{viewingUser.institute_name || "-"}</p>
                <p><span className="font-medium">Supervisor: </span>{viewingUser.supervisor_name || "-"}</p>
              </div>

              {/* Certificate */}
              <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 pr-0 md:pr-4">
                <h3 className="font-semibold text-gray-700 mb-2">Certificate</h3>
                <p><span className="font-medium">Name: </span>{viewingUser.certificate_name || "-"}</p>
                <p><span className="font-medium">Issued: </span>{viewingUser.certificate_issued_year || "-"}</p>
                <p><span className="font-medium">Code: </span>{viewingUser.certificate_verification_code || "-"}</p>
              </div>

              {/* Additional Info */}
              <div className="pb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Additional Information</h3>
                {/* <p><span className="font-medium">Bio: </span>{viewingUser.bio || "-"}</p> */}
                <p><span className="font-medium">Guarantee: </span>{viewingUser.guarantee_for_service || "-"}</p>
                <p><span className="font-medium">Comment: </span>{viewingUser.additional_comment || "-"}</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold transition-colors"
              onClick={handleCloseViewModal}
            >
              ×
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
