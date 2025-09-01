import React, { useState, useEffect } from "react";
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
    specialistInstrument: "",
    current_designation: "",
    institute_name: "",
    laboratory_category: "",
    instrument_category: "",
    supervisor_name: "",
    supervisor_Designation: "",
    supervisor_Email: "",
    supervisor_Contract_No: "",
    company_name: "",
    company_designation: "",
    years_of_experience: "",
    certificate_name: "",
    certificate_issued_year: "",
    certificate_verification_code: "",
    guarantee_for_service: "",
    additional_comment: "",
  });

  // ✅ Fetch user profile data when component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {

      const userId = localStorage.getItem("user_id");
      console.log(userId);

      if (!userId) {
        console.error("No user ID found in localStorage");
        return;
      }

        const res = await fetch(`http://localhost/instrument-care-back-end/public/tech/profile/${userId}`); // <-- replace 44 with logged-in user_id
        const data = await res.json();

        // Map backend response keys to frontend state
        setFormData({
          fullName: data.full_name || "",
          nic: data.nic || "",
          email: data.email || "",
          address: data.address || "",
          personalNumber: data.personal_number || "",
          bio: data.bio || "",
          experiences: data.experiences || "",
          certificates: data.certificates || "",
          specialistInstrument: data.specialist_instrument || "",
          current_designation: data.current_designation || "",
          institute_name: data.institute_name || "",
          laboratory_category: data.laboratory_category || "",
          instrument_category: data.instrument_category || "",
          supervisor_name: data.supervisor_name || "",
          supervisor_Designation: data.supervisor_designation || "",
          supervisor_Email: data.supervisor_email || "",
          supervisor_Contract_No: data.supervisor_contract_no || "",
          company_name: data.company_name || "",
          company_designation: data.company_designation || "",
          years_of_experience: data.years_of_experience || "",
          certificate_name: data.certificate_name || "",
          certificate_issued_year: data.certificate_issued_year || "",
          certificate_verification_code: data.certificate_verification_code || "",
          guarantee_for_service: data.guarantee_for_service || "",
          additional_comment: data.additional_comment || "",
        });
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Reset form
  const handleClear = () => {
    setFormData({
      fullName: "",
      nic: "",
      email: "",
      address: "",
      personalNumber: "",
      bio: "",
      specialistInstrument: "",
      current_designation: "",
      institute_name: "",
      laboratory_category: "",
      instrument_category: "",
      supervisor_name: "",
      supervisor_Designation: "",
      supervisor_Email: "",
      supervisor_Contract_No: "",
      company_name: "",
      company_designation: "",
      years_of_experience: "",
      certificate_name: "",
      certificate_issued_year: "",
      certificate_verification_code: "",
      guarantee_for_service: "",
      additional_comment: "",
    });
  };

  // Submit form to backend
  const handleSubmit = async () => {
    console.log("Submitting profile data:", formData);

    try {
        const userId = localStorage.getItem("user_id");

        if (!userId) {
          console.error("No user ID found in localStorage");
          return;
        }

        const res = await fetch(`http://localhost/instrument-care-back-end/public/tech/profile/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await res.json();

        console.log("Backend response:", result);
        alert("Profile updated successfully!");
      } catch (err) {
        console.error("Submit failed:", err);
        alert("Failed to update profile. Please try again.");
      }
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
        <button
          onClick={handleClear}
          className="bg-orange-300 text-black font-bold py-2 px-6 rounded hover:bg-orange-200"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className="bg-orange-600 text-white font-bold py-2 px-6 rounded hover:bg-orange-400"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
