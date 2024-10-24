import  { useState } from "react";
import { FiHome, FiUser, FiSettings, FiMenu, FiX } from "react-icons/fi";
import MobileNavButton from "../ui/MobileNavButton";
import NavButton from "../ui/Navbutton";
import { TfiGallery } from "react-icons/tfi";
import { IoToday } from "react-icons/io5";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">
                Nasa Picture of the Day
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavButton icon={<FiHome className="w-5 h-5" />} label="Home" />
              <NavButton
                icon={<IoToday className="w-5 h-5" />}
                label="Today's Pick"
              />
              <NavButton
                icon={<TfiGallery className="w-5 h-5" />}
                label="Gallery"
              />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavButton icon={<FiHome className="w-5 h-5" />} label="Home" />
          <MobileNavButton
            icon={<FiUser className="w-5 h-5" />}
            label="Profile"
          />
          <MobileNavButton
            icon={<FiSettings className="w-5 h-5" />}
            label="Settings"
          />
        </div>
      </div>
    </nav>
  );
}
