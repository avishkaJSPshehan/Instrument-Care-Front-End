import React, { useState } from "react";
import { UsersIcon, WrenchScrewdriverIcon, CubeIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

export default function AdminDashboardStats({ technicianId }) {
  const [stats, setStats] = useState([
    { label: "Owners", value: 0, icon: UsersIcon, color: "from-orange-400 to-orange-300" },
    { label: "Technicians", value: 0, icon: WrenchScrewdriverIcon, color: "from-orange-400 to-orange-300" },
    { label: "Instruments", value: 0, icon: CubeIcon, color: "from-orange-400 to-orange-300" },
    { label: "Service Requests", value: 0, icon: ClipboardDocumentCheckIcon, color: "from-orange-400 to-orange-300" },
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md1:grid-cols-4 gap-6 mb-6 font-poppins">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className={`bg-gradient-to-r ${stat.color} rounded-xl p-6 flex flex-col items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center justify-center mb-3 rounded-full p-3 w-16 h-16 bg-white/20">
              <Icon className="w-8 h-8 text-black" />
            </div>
            <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-lg text-white font-medium">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
