import React, { useState } from "react";
import ProfileImageUpload from "./ProfileImageUpload";
import ProfileFormLeft from "./ProfileFormLeft";
import ProfileFormRight from "./ProfileFormRight";

export default function EditProfileForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    nic: "",
    email: "",
    address: "",
    personalNumber: "",
    bio: "",
    experiences: "",
    certificates: "",
    specialistInstrument: "",
    current_designation: "",
    institute_name: "",
    laboratory_category: "",
    instrument_category: "",
    supervisor_name: "",
    supervisor_Designation: "",
    supervisor_Email: "",
    supervisor_Contract_No:"",
    company_name: "",
    company_designation: "",
    years_of_experience: "",
    certificate_name: "",
    certificate_issued_year: "",
    certificate_verification_code: "",
    guarantee_for_service: "",
    additional_comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#ffffff80] p-4 rounded-lg font-poppins">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProfileImageUpload formData={formData} handleChange={handleChange} />
        <ProfileFormLeft formData={formData} handleChange={handleChange} />
        <ProfileFormRight formData={formData} handleChange={handleChange} />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-orange-300 text-black font-bold py-2 px-6 rounded hover:bg-orange-200">
          Clear
        </button>
        <button className="bg-orange-600 text-white font-bold py-2 px-6 rounded hover:bg-orange-400">
          Update Profile
        </button>
      </div>
    </div>
  );
}
