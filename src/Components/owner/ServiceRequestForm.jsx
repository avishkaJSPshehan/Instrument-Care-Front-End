import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ServiceRequestForm({ onBack = () => {}, onSend = () => {} }) {
  const { id: technicianId } = useParams(); // ✅ grab technician ID from URL

  // State to hold all form data
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    physical_address: "",
    contact_number: "",
    institute_name: "",
    institute_address: "",
    instrument_name: "",
    instrument_brand: "",
    instrument_model: "",
    instrument_manufacturer: "",
    manufactured_year: "",
    product_testing_type: "",
    testing_parameter: "",
    consumption_period: "",
    issue_description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Include technician ID in request
    const payload = {
      ...formData,
      technician_id: technicianId,
    };

    console.log(payload);

    try {
      const response = await fetch(
        "http://localhost/instrument-care-back-end/public/user/service-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // ✅ include auth token
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log("Response:", data);
      onSend(data); // Call the passed onSend callback
    } catch (error) {
      console.error("Error submitting service request:", error);
    }
  };

  return (
    <div className="w-full mx-auto bg-[#ffffff70] p-6 rounded-md shadow">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* ----------------- Personal Details Section ----------------- */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Avishka Shehan Jayasiri"
                className="w-full border rounded px-3 py-1"
                value={formData.full_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                className="w-full border rounded px-3 py-1"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Physical Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="physical_address"
                placeholder="main Road, Pitipana, Homagama"
                className="w-full border rounded px-3 py-1"
                value={formData.physical_address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact_number"
                placeholder="+94 71 23 45 678"
                className="w-full border rounded px-3 py-1"
                value={formData.contact_number}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* ----------------- Institute Details Section ----------------- */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Institute Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="institute_name"
                placeholder="National Science Foundation"
                className="w-full border rounded px-3 py-1"
                value={formData.institute_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="institute_address"
                placeholder="46/b De Mel Road, Colombo 07"
                className="w-full border rounded px-3 py-1"
                value={formData.institute_address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* ----------------- Instrument Details Section ----------------- */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Instrument Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Name", name: "instrument_name", placeholder: "Microscope" },
              { label: "Brand", name: "instrument_brand", placeholder: "" },
              { label: "Model", name: "instrument_model", placeholder: "" },
              { label: "Manufacturer", name: "instrument_manufacturer", placeholder: "" },
              { label: "Manufactured Year", name: "manufactured_year", placeholder: "" },
              { label: "Type of product testing", name: "product_testing_type", placeholder: "" },
              { label: "Testing parameter", name: "testing_parameter", placeholder: "" },
              { label: "Consumption Period", name: "consumption_period", placeholder: "" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block font-semibold mb-1">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full border rounded px-3 py-1"
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <div className="mt-4">
            <label className="block font-semibold mb-1">
              Description About Issue <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              name="issue_description"
              placeholder="Need to clean the lens"
              className="w-full border rounded px-3 py-2"
              value={formData.issue_description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ----------------- Buttons ----------------- */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            type="reset"
            onClick={onBack}
            className="w-full md:w-1/2 border rounded py-2 font-semibold hover:bg-gray-100 hover:cursor-pointer"
          >
            Clear Details
          </button>
          <button
            type="submit"
            className="w-full md:w-1/2 bg-orange-400 text-white font-semibold py-2 rounded hover:bg-orange-500 transition hover:cursor-pointer"
          >
            Send a Service Request
          </button>
        </div>
      </form>
    </div>
  );
}
