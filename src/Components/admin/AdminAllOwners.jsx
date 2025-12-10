import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function AllOwnerTable({ usersData }) {
  const initialUsers = usersData || [];

  const [users, setUsers] = useState(initialUsers.filter(u => u.role === "User"));
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);

  const handleEditClick = (user) => {
    setEditingUser({ ...user });
  };

  const handleViewClick = (user) => {
    setViewingUser(user);
  };

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
      prev.map((u) => (u.email === editingUser.email ? editingUser : u))
    );
    handleCloseModal();
  };

  const handleDelete = (email) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setUsers((prev) => prev.filter((u) => u.email !== email));
    }
  };

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins min-h-[720px]">

      {/* ------------------------ TABLE ------------------------ */}
      <div className="overflow-x-auto">
        {users.length === 0 ? (
          <p className="text-gray-500 italic p-4 text-center">No users found.</p>
        ) : (
          <div className="max-h-[720px] overflow-y-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b bg-gray-100 text-gray-700">
                  <th className="p-3">Full Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Created At</th>
                  <th className="p-3">Active</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, i) => (
                  <tr key={i} className="border-b hover:bg-orange-50 transition-colors">
                    <td className="p-3">{user.fullName}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.contact}</td>
                    <td className="p-3 font-semibold text-green-600">{user.role}</td>
                    <td className="p-3">{user.createdAt}</td>
                    <td className="p-3">
                      <input type="checkbox" checked={user.active} readOnly />
                    </td>
                    <td className="p-3 flex gap-3 text-lg">
                      <button onClick={() => handleViewClick(user)} className="text-blue-600">
                        <FaEye />
                      </button>
                      <button onClick={() => handleEditClick(user)} className="text-orange-600">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(user.email)} className="text-red-600">
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

      {/* ---------------------- VIEW MODAL (FIXED) ----------------------- */}
      {viewingUser && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white rounded-2xl w-full max-w-5xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
            
            {/* LEFT */}
            <div className="bg-gray-50 p-8 flex flex-col items-center w-full md:w-1/3">
              <h2 className="text-2xl font-bold text-center mb-1">
                {viewingUser.first_name} {viewingUser.last_name}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {viewingUser.designation || "-"}
              </p>
              <p className="text-sm font-semibold">
                {viewingUser.user_status === 1 ? "Active" : "Inactive"}
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto">

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
                <p>Email: {viewingUser.email || "-"}</p>
                <p>Mobile: {viewingUser.mobile_number || "-"}</p>
                <p>Phone: {viewingUser.phone_number || "-"}</p>
                <p>Address: {viewingUser.address || "-"}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Basic Information</h3>
                <p>User Type ID: {viewingUser.user_type_id || "-"}</p>
                <p>Institute ID: {viewingUser.institute_id || "-"}</p>
                <p>Created: {viewingUser.created || "-"}</p>
                <p>Updated: {viewingUser.updatedDtm || "-"}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Other Information</h3>
                <p>Username: {viewingUser.username || "-"}</p>
                <p>Gender: {viewingUser.gender || "-"}</p>
                <p>Other Institute: {viewingUser.other_institute_name || "-"}</p>
              </div>

            </div>

            <button
              className="absolute top-4 right-4 text-3xl font-bold"
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
