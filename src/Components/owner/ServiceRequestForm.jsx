import React from "react";

export default function ServiceRequestForm({  onBack = () => {},
  onSend = () => {},}) {
  return (
    <div className="w-full mx-auto bg-[#ffffff70] p-6 rounded-md shadow">
      <form className="space-y-6">
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
                placeholder="Avishka Shehan Jayasiri"
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Physical Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="main Road, Pitipana, Homagama"
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="+94 71 23 45 678"
                className="w-full border rounded px-3 py-1"
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
                placeholder="National Science Foundation"
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="46/b De Mel Road, Colombo 07"
                className="w-full border rounded px-3 py-1"
              />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* ----------------- Instrument Details Section ----------------- */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Instrument Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Microscope"
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Brand <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Model <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Manufacturer <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Manufactured Year <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Type of product testing <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Testing parameter <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border rounded px-3 py-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Consumption Period <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border rounded px-3 py-1"
              />
            </div>

          </div>

          <div className="mt-4">
            <label className="block font-semibold mb-1">
              Description About Issue <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Need to clean the lens"
              className="w-full border rounded px-3 py-2"
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
            onClick={() => onSend()}
            className="w-full md:w-1/2 bg-orange-400 text-white font-semibold py-2 rounded hover:bg-orange-500 transition hover:cursor-pointer"
          >
            Send a Service Request
          </button>
        </div>
      </form>
    </div>
  );
}
