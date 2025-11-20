import React, { useState } from "react";
import profileImage from '../../assets/images/profile-image.jpeg';

export default function ProfileImageUpload({ formData, handleChange }) {
  const [selectedImage, setSelectedImage] = useState(profileImage);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("profileImageInput").click();
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Profile Image Placeholder */}
      <div className="border rounded-full flex items-center justify-center mb-2">
        <img
          src={selectedImage}
          alt="Profile"
          className="h-28 w-28 rounded-full object-cover cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
          onClick={triggerFileInput}
        />
      </div>

      <p className="text-sm text-gray-500">Brows Image From your computer</p>
      <button
        className="mt-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-400"
        onClick={triggerFileInput}
      >
        Upload Image
      </button>

      {/* Hidden File Input */}
      <input
        type="file"
        id="profileImageInput"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />

      <div className="flex flex-col gap-3">
        <label>
          Full Name *
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded p-1 w-full font-normal"
          />
        </label>

        <label>
          National Identity Card Number *
          <input
            type="text"
            name="nic"
            value={formData.nic}
            onChange={handleChange}
            className="border rounded p-1 w-full font-normal"
          />
        </label>

        <label>
          Email Address *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-1 w-full font-normal"
          />
        </label>

        <label>
          Physical Address *
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded p-1 w-full font-normal"
          />
        </label>

        <label>
          Mobile Number *
          <input
            type="text"
            name="personalNumber"
            value={formData.personalNumber}
            onChange={handleChange}
            className="border rounded p-1 w-full font-normal"
          />
        </label>

        <label>
          Profile Bio *
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="border rounded p-5 w-full font-normal"
          />
        </label>
      </div>
    </div>
  );
}
