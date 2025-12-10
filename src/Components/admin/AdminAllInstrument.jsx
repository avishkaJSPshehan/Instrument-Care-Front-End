import React, { useState, useEffect } from "react";

export default function AllInstrument({ instrumentsData }) {
  const [instruments, setInstruments] = useState([]);
  const [editingInstrument, setEditingInstrument] = useState(null);

  useEffect(() => {
    if (!instrumentsData) return;

    // Map backend keys to frontend keys
    const mappedData = instrumentsData.map((inst) => ({
      id: inst.instrument_id,
      name: inst.instrument_name,
      category: inst.instrument_type || "N/A", // You can replace with actual category name if you have mapping
      serialNo: inst.model || "-", // Serial number or model
      active: inst.record_status === 0, // Assuming 0 = active
      acquiredOn: inst.date_commencement_operation || "-", 
      notes: inst.inst_description || "",
    }));

    setInstruments(mappedData);
  }, [instrumentsData]);

  const handleEditClick = (instrument) => {
    setEditingInstrument({ ...instrument });
  };

  const handleCloseModal = () => setEditingInstrument(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingInstrument((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    setInstruments((prev) =>
      prev.map((inst) =>
        inst.id === editingInstrument.id ? editingInstrument : inst
      )
    );
    handleCloseModal();
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this instrument?"
    );
    if (confirmed) {
      setInstruments((prev) => prev.filter((inst) => inst.id !== id));
    }
  };

  return (
    <div className="bg-[#ffffff80] rounded-lg shadow-sm p-4 font-poppins min-h-[720px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg text-gray-800">All Instruments</h3>
      </div>

      <div className="overflow-x-auto">
        {instruments.length === 0 ? (
          <p className="text-gray-500 italic p-4 text-center">No instruments found.</p>
        ) : (
          <div className="max-h-[720px] overflow-y-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b bg-gray-100 text-gray-700">
                  <th className="p-3">Instrument Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Serial No</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Acquired On</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {instruments.map((inst, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-orange-50 transition-colors"
                  >
                    <td className="p-3">{inst.name}</td>
                    <td className="p-3">{inst.category}</td>
                    <td className="p-3">{inst.serialNo}</td>
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={inst.active}
                        readOnly
                        className="w-5 h-5 accent-orange-600"
                      />
                    </td>
                    <td className="p-3">{inst.acquiredOn}</td>

                    <td className="p-3 flex gap-2">
                      <button
                        className="bg-orange-600 text-white px-3 py-1 rounded-lg shadow hover:bg-orange-500 transition"
                        onClick={() => handleEditClick(inst)}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded-lg shadow hover:bg-red-500 transition"
                        onClick={() => handleDelete(inst.id)}
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

      {/* ---------------------- MODAL ----------------------- */}
      {editingInstrument && (
        <div className="fixed inset-0 bg-[#1a191790] flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Edit Instrument</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label className="font-medium">
                  Instrument Name *
                  <input
                    type="text"
                    name="name"
                    value={editingInstrument.name}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Category *
                  <input
                    type="text"
                    name="category"
                    value={editingInstrument.category}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Serial No *
                  <input
                    type="text"
                    name="serialNo"
                    value={editingInstrument.serialNo}
                    onChange={handleChange}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="flex items-center gap-2 mt-3">
                  <input
                    type="checkbox"
                    name="active"
                    checked={editingInstrument.active}
                    onChange={handleChange}
                    className="w-5 h-5 accent-orange-600"
                  />
                  <span className="font-medium">Active</span>
                </label>
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-medium">
                  Notes
                  <textarea
                    name="notes"
                    value={editingInstrument.notes}
                    onChange={handleChange}
                    rows={6}
                    className="mt-1 border rounded p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </label>

                <label className="font-medium">
                  Acquired On
                  <input
                    type="date"
                    name="acquiredOn"
                    value={editingInstrument.acquiredOn}
                    onChange={handleChange}
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
