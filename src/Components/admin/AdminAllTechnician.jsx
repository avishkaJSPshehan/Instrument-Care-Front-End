import React, { useState } from "react";

export default function AllTechnicianTable({ usersData }) {
  const initialUsers = usersData || [];

  const [users, setUsers] = useState(initialUsers.filter(u => u.role === "Technician"));
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

  // 🔥 DELETE TECHNICIAN WITH CONFIRMATION
  const handleDelete = (email) => {
    const confirmed = window.confirm("Are you sure you want to delete this technician?");
    if (confirmed) {
      setUsers((prev) => prev.filter((u) => u.email !== email));
    }
  };

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins min-h-[720px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">All Technicians</h3>
      </div>

      <div className="overflow-x-auto">
        {users.length === 0 ? (
          <p className="text-gray-500 italic p-4 text-center">No technicians found.</p>
        ) : (
          <div className="max-h-[720px] overflow-y-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Full Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Contact</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Created At</th>
                  <th className="p-2">Active</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{user.fullName}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.contact}</td>
                    <td className="p-2 font-semibold text-blue-600">{user.role}</td>
                    <td className="p-2">{user.createdAt}</td>
                    <td className="p-2">
                      <input
                        type="checkbox"
                        checked={user.active}
                        readOnly
                        className="w-5 h-5 accent-orange-600"
                      />
                    </td>

                    {/* ACTION BUTTONS */}
                    <td className="p-2 flex gap-2">
                      <button
                        className="bg-orange-600 text-white px-2 py-1 rounded hover:bg-orange-500"
                        onClick={() => handleEditClick(user)}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500"
                        onClick={() => handleDelete(user.email)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-[#1a191790] flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Edit Technician Profile</h2>

            {/* Two-column form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label>
                  Full Name *
                  <input
                    type="text"
                    name="fullName"
                    value={editingUser.fullName}
                    onChange={handleChange}
                    className="border rounded p-2 w-full font-normal bg-gray-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </label>

                <label>
                  Email *
                  <input
                    type="email"
                    name="email"
                    value={editingUser.email}
                    onChange={handleChange}
                    className="border rounded p-2 w-full font-normal bg-gray-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </label>

                <label>
                  Contact Number *
                  <input
                    type="text"
                    name="contact"
                    value={editingUser.contact}
                    onChange={handleChange}
                    className="border rounded p-2 w-full font-normal bg-gray-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="active"
                    checked={editingUser.active}
                    onChange={handleChange}
                    className="w-5 h-5 accent-orange-600"
                  />
                  Active
                </label>
              </div>

              <div className="flex flex-col gap-3">
                <label>
                  Bio
                  <textarea
                    name="bio"
                    value={editingUser.bio}
                    onChange={handleChange}
                    rows={6}
                    className="border rounded p-2 w-full font-normal bg-gray-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </label>
              </div>
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
    </div>
  );
}
