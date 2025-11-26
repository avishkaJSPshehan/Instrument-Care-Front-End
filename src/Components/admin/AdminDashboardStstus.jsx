import React, { useEffect, useState } from "react";

export default function AdminDashboardStats({ technicianId }) {
  const [stats, setStats] = useState([
    { label: "Owners", value: 0 },
    { label: "Technicians", value: 0 },
    { label: "Instruments", value: 0 },
    { label: "Service Requests", value: 0 },
  ]);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-6 font-poppins">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-orange-400 rounded-lg p-6 text-center font-bold shadow-xl"
        >
          <div className="text-3xl mb-2">{stat.value}</div>
          {stat.label}
        </div>
      ))}
    </div>
  );
}
