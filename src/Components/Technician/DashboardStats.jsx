import React from "react";

export default function DashboardStats() {
  const stats = [
    { label: "Total Job", value: 20 },
    { label: "Pending Job", value: 15 },
    { label: "Rejected Job", value: 15 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 font-poppins">
      {stats.map((stat, i) => (
        <div key={i} className="bg-orange-300 rounded-lg p-6 text-center font-bold shadow-xl">
          <div className="text-3xl mb-2">{stat.value}</div>
          {stat.label}
        </div>
      ))}
    </div>
  );
}
