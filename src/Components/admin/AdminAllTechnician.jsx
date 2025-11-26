import React from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function AllTechnicianTable({ usersData }) {
  // Sample data if no prop passed
  const users = usersData || [
    ["John Doe", "john@example.com", "0771234567", "Admin", "2025-01-01", true],
    ["Jane Smith", "jane@example.com", "0779876543", "Technician", "2025-02-15", false],
    ["Bob Brown", "bob@example.com", "0775554433", "User", "2025-03-10", true],
  ];

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins min-h-[720px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">All Users</h3>
      </div>

      <div className="overflow-x-auto">
        {users.length === 0 ? (
          <p className="text-gray-500 italic p-4 text-center">
            No users found.
          </p>
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
                {users.map((row, i) => (
                  <tr key={i} className="border-b">
                    {row.slice(0, 5).map((cell, j) => (
                      <td
                        key={j}
                        className={`
                          p-2
                          ${
                            cell === "Admin"
                              ? "text-purple-600 font-semibold"
                              : cell === "Technician"
                              ? "text-blue-600 font-semibold"
                              : cell === "User"
                              ? "text-gray-700 font-semibold"
                              : ""
                          }
                        `}
                      >
                        {cell}
                      </td>
                    ))}

                    {/* Active Checkbox */}
                    <td className="p-2">
                      <input
                        type="checkbox"
                        checked={row[5]}
                        readOnly
                        className="w-5 h-5 accent-orange-600"
                      />
                    </td>

                    {/* Action Buttons */}
                    <td className="p-2 flex gap-2">
                      <button
                        className="p-1 bg-blue-600 text-white rounded hover:bg-blue-500"
                        onClick={() => alert(`Update ${row[0]}`)}
                      >
                        <PencilSquareIcon className="w-5 h-5" />
                      </button>
                      <button
                        className="p-1 bg-red-600 text-white rounded hover:bg-red-500"
                        onClick={() => alert(`Delete ${row[0]}`)}
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
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
