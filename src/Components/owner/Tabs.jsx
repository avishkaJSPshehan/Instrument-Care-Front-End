import React from "react";
import { NavLink } from "react-router-dom";

export default function Tabs({ techId }) {
  const tabs = [
    { label: "Technician", path: "/user/dashboard" },
    { label: "Overview", path: `/user/view-profile/${techId}` },
    { label: "Service Request", path: `/user/service-request/${techId}` },
    { label: "Service History", path: "/" },
  ];

  return (
    <div className="flex gap-6 border-b mb-4 hover:cursor-pointer">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `pb-2 transition ${
              isActive
                ? "font-bold text-black border-b-4 border-black"
                : "text-gray-600 hover:text-black"
            }`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
