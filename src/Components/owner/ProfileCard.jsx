import React from "react";
import profileImage from '../../assets/images/profile-image.jpeg';

export default function ProfileCard() {
  return (
    <div className="border rounded-md p-4 flex flex-col gap-4 font-poppins">
      {/* Profile Info */}
      <div className="flex items-center gap-4">
        {/* <div className="w-16 h-16 rounded-full border flex items-center justify-center">
          <span className="text-3xl">👤</span>
        </div> */}
        <div className="border rounded-full flex items-center justify-center mb-2">
                
          <img
            src={profileImage}
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
          />
                
        </div>
        <div>
          <h2 className="font-bold text-lg">Pubudu Shehan</h2>
          <p className="text-gray-500 text-sm">Electrical Technician</p>
        </div>
      </div>

      {/* About */}
      <div>
        <h3 className="font-bold">About</h3>
        <p className="text-sm text-gray-600">
          Creative marketing specialist focused on brand growth, digital
          campaigns, and audience engagement.
        </p>
      </div>
      <hr/>

      {/* Qualifications */}
      <div>
        <h3 className="font-bold">Qualifications</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="font-semibold pl-5">Certificate: Diploma in Scientific Instrument Servicing Technology</li>
          <li className="pl-5">Year: 2019</li>
        </ul>
      </div>
      
      <hr/>
      {/* Institute Details */}
      <div>
        <h3 className="font-bold">Institute Details</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="font-semibold pl-5"> Electrical Technician</li>
          <li className="pl-5"> National Science Foundation</li>
        </ul>
      </div>
      <hr/>

      {/* Experiences */}
      <div>
        <h3 className="font-bold">Experiences</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="font-semibold pl-5"> Assistant Technician</li>
          <li className="pl-5"> National Research Council</li>
          <li className="pl-5"> 2 Years</li>
        </ul>
      </div>

      <hr/>
      
      {/* Techinical Expertise */}
      <div>
        <h3 className="font-bold">Techinical Expertise</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="font-semibold pl-5"> Laboratory Category: Chemical Testing</li>
          <li className="font-semibold pl-5"> Instrument Category: Microscope</li>
        </ul>
      </div>

    </div>
  );
}
