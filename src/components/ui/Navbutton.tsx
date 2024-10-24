import React from "react";

const NavButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href="#"
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default NavButton;
