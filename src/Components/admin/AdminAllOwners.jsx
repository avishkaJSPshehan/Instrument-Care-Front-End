import React, { useState } from "react";

export default function AllOwnerTable({ usersData }) {
  const initialUsers = usersData || [];

  // Filter only "User" role
  const [users, setUsers] = useState(initialUsers.filter(u => u.role === "User"));
  const [editingUser, setEditingUser] = useState(null);

  const handleEditClick = (user) => {
    setEditingUser({ ...user });
  };

  const handleCloseModal = () => setEditingUser(null);

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

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins min-h-[720px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-gray-800">All Owners</h3>
      </div>

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
                  <tr
                    key={i}
                    className="border-b hover:bg-orange-50 transition-colors"
                  >
                    <td className="p-3">{user.fullName}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.contact}</td>
                    <td className="p-3 font-semibold text-green-600">
                      {user.role}
                    </td>
                    <td className="p-3">{user.createdAt}</td>

                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={user.active}
                        readOnly
                        className="w-5 h-5 accent-orange-600"
                      />
                    </td>

                    <td className="p-3">
                      <button
                        className="bg-orange-600 text-white px-3 py-1 rounded-lg shadow hover:bg-orange-500 transition"
                        onClick={() => handleEditClick(user)}
                      >
                        Edit
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ---------------------- MODAL ----------------------- */}
      {editingUser && (
        <div className="fixed inset-0 bg-[#1a191790] flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              Edit User Profile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LEFT */}
              <div className="flex flex-col gap-3">

                <label className="font-medium">
                  Full Name *
                  <input
                    type="text"
                    name="fullName"
                    value={editingUser.fullName}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Email *
                  <input
                    type="email"
                    name="email"
                    value={editingUser.email}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Contact Number *
                  <input
                    type="text"
                    name="contact"
                    value={editingUser.contact}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="flex items-center gap-2 mt-3">
                  <input
                    type="checkbox"
                    name="active"
                    checked={editingUser.active}
                    onChange={handleChange}
                    className="w-5 h-5 accent-orange-600"
                  />
                  <span className="font-medium">Active</span>
                </label>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-3">
                <label className="font-medium">
                  Bio
                  <textarea
                    name="bio"
                    value={editingUser.bio}
                    onChange={handleChange}
                    rows={6}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>
              </div>
            </div>

            {/* BUTTONS */}
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
