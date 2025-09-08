import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import profileImage from '../../assets/images/profile-image.jpeg';

export default function ProfileCard() {
  const { id } = useParams(); // get technician id from URL
  const [tech, setTech] = useState(null);

  useEffect(() => {
    const fetchTechnician = async () => {
      try {
        const response = await fetch(`http://localhost/instrument-care-back-end/public/user/dashboard/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        });
        if (!response.ok) throw new Error("Failed to fetch technician");
        const data = await response.json();
        setTech(data);
      } catch (error) {
        console.error("Error fetching technician:", error);
      }
    };

    fetchTechnician();
  }, [id]);

  if (!tech) {
    return <div className="p-4">Loading profile...</div>;
  }

  const laboratoryCategoryMap = {
    1: "Chemical Testing",
    2: "Biological Testing",
    3: "Physical & Mechanical Testing",
    4: "Calibration Service",
    5: "Biochemistry, Chemical Pathology, Clinical Pathology",
    6: "Hematology and Immuno Hematology",
    7: "Microbiology and Serology",
    8: "Histopathology/Cytopathology",
    9: "Immunology",
    10: "Molecular Biology",
    11: "Pharmacology",
    12: "Andrology Clinical",
    13: "Nuclear Medicine",
    14: "Embryology",
  };

  const instrumentCategoryMap = {
    1: "Analiytical Balance",
    2: "Microscope",
    3: "Centrifuger",
    4: "Gas Chromatograph & GC/MS",
    5: "High Performance Liquid Chromatograph (HPLC)",
    6: "Ion Chromatograph",
    7: "Spectrophotometers (AAS, ICPMS, ICPOES, FTIR, IRMS, UV-Visible, NMP, RAMAN, etc)",
    8: "X-Ray Fluorescance Analyzers",
    9: "Distillation Apparatus",
    10: "Digestor",
    11: "PCR System",
    12: "Mixers/Shakers",
    13: "pH & Conductivity Meter",
    14: "Oven/Vacuum Oven",
    15: "Muffle Furnace",
    16: "Fume Hood",
    17: "Water Bath",
    18: "Incubator",
    19: "Hot Plate",
    20: "Evaporators",
    21: "Sonicating Apparatus",
    22: "Biochemistry Analyzers",
    23: "Particle Size Analyzer",
    24: "Bomb Calory Meters",
    25: "Shakers",
    26: "Dryers",
    27: "Distill Water Plant",
    28: "Glass Blowing Apparatus",
    29: "Other Instruments/Apparatus",
    30: "Machinery",
  };

  return (
    <div className="border rounded-md p-4 flex flex-col gap-4 font-poppins">
      {/* Profile Info */}
      <div className="flex items-center gap-4">
        <div className="border rounded-full flex items-center justify-center mb-2">
          <img
            src={profileImage}
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover cursor-pointer border border-gray-300 hover:scale-105 transition-transform"
          />
        </div>
        <div>
          <h2 className="font-bold text-lg">{tech.full_name}</h2>
          <p className="text-gray-500 text-sm">{tech.company_designation}</p>
        </div>
      </div>

      {/* About */}
      <div>
        <h3 className="font-bold">About</h3>
        <p className="text-sm text-gray-600">{tech.bio}</p>
      </div>
      <hr />

      {/* Qualifications */}
      <div>
        <h3 className="font-bold">Qualifications</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="font-semibold pl-5">
            Certificate: {tech.certificate_name}
          </li>
          <li className="pl-5">Year: {tech.certificate_issued_year}</li>
          <li className="pl-5">Code: {tech.certificate_verification_code}</li>
        </ul>
      </div>
      <hr />

      {/* Institute Details */}
      <div>
        <h3 className="font-bold">Institute Details</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="font-semibold pl-5">{tech.company_designation}</li>
          <li className="pl-5">{tech.institute_name}</li>
        </ul>
      </div>
      <hr />

      {/* Experiences */}
      <div>
        <h3 className="font-bold">Experiences</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="pl-5">Years of Experience: {tech.years_of_experience}</li>
          <li className="pl-5">Current Designation: {tech.current_designation}</li>
        </ul>
      </div>
      <hr />

      {/* Technical Expertise */}
      <div>
      <h3 className="font-bold">Technical Expertise</h3>
      <ul className="text-sm text-gray-600 space-y-1">
        <li className="font-semibold pl-5">
          Laboratory Category: {laboratoryCategoryMap[tech.laboratory_category] || "N/A"}
        </li>
        <li className="font-semibold pl-5">
          Instrument Category: {instrumentCategoryMap[tech.instrument_category] || "N/A"}
        </li>
      </ul>
      </div>
    </div>
  );
}
