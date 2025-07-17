import React from "react";

export default function Sidebar({ activeTab, setActiveTab, isOpen, onClose }) {
  const menuItems = [
    { key: "Dashboard", icon: "/src/assets/Sidebar/Dashboard.png" },
    { key: "Customers", icon: "/src/assets/Sidebar/Customers.png" },
    { key: "Jobs", icon: "/src/assets/Sidebar/job.jpg" },
    { key: "Reports", icon: "/src/assets/Sidebar/Reports.png" },
    { key: "Settings", icon: "/src/assets/Sidebar/Settings.png" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 md:static top-0 left-0 h-full w-64 bg-gray-50 dark:bg-gray-900 border-r dark:border-gray-700 shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between mt-8">
  {/* Title & Subtitle */}
  <div className="flex flex-col">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
      DispatchPro
    </h2>
    <h3 className="text-base font-medium text-gray-400">
      Dispatcher
    </h3>
  </div>

  {/* Close Button */}
  <button
    className="md:hidden text-gray-500 dark:text-gray-300"
    onClick={onClose}
  >
    ✕
  </button>
</div>


        {/* Menu Items */}
        <ul className="space-y-1 py-4">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`flex items-center px-6 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 ${
                activeTab === item.key
                  ? "bg-gray-300 dark:bg-gray-700 font-semibold text-black dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => {
                setActiveTab(item.key);
                onClose();
              }}
            >
              <img
                src={item.icon}
                alt={item.key}
                className="w-5 h-5 mr-3 object-contain dark:invert"
              />
              <span>{item.key}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
