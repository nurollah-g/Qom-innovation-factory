import React, { useState, useEffect, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  FileText,
  BookOpen,
  Info,
  Menu,
  X,
  Bell,
  ChevronDown,
  Users,
  Globe,
} from "lucide-react";
import { NotificationsContext } from "../context/NotificationsContext";

export default function Navbar() {
  const { notifications } = useContext(NotificationsContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [ecosysOpen, setEcosysOpen] = useState(false);
  const dropdownRef = useRef(null);

  const notificationCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setEcosysOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full sticky top-4 z-50">
      <div className="max-w-[95%] sm:max-w-7xl bg-[#F8F8F8] mt-4 mx-auto px-4 flex items-center justify-between py-[10px] backdrop-blur-md bg-white/15 border border-white/20 shadow-md rounded-2xl">
        {/* منو موبایل */}
        {isMobile && (
          <div
            className=" ml-auto text-2xl cursor-pointer z-50 ml-4"
            onClick={() => setIsOpen(<Menu className="w-6 h-6" />)}
          >
            {isOpen ? (
              <Menu className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </div>
        )}
        {/* لوگو */}
        <div
          className={`${
            isMobile ? "flex-1 flex justify-center" : "font-bold text-xl"
          }`}
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[160px] h-[74px] object-contain"
          />
        </div>

        {/* منو دسکتاپ */}
        {!isMobile && (
          <ul className="flex space-x-12 space-x-reverse text-gray-700 absolute left-1/2 transform -translate-x-1/2 text">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `cursor-pointer ${
                    isActive ? "text-teal-600 font-bold" : "hover:text-teal-600"
                  }`
                }
              >
                خانه
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/research"
                className={({ isActive }) =>
                  `cursor-pointer ${
                    isActive ? "text-teal-600 font-bold" : "hover:text-teal-600"
                  }`
                }
              >
                طرح‌های پژوهشی
              </NavLink>
            </li>

            {/* اکوسیستم نوآوری با دراپ‌داون */}
            <li className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-2">
                <NavLink
                  to="/Ecosys"
                  className={({ isActive }) =>
                    `cursor-pointer ${
                      isActive
                        ? "text-teal-600 font-bold"
                        : "hover:text-teal-600"
                    }`
                  }
                >
                  اکوسیستم نوآوری
                </NavLink>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setEcosysOpen((prev) => !prev);
                  }}
                  aria-haspopup="true"
                  aria-expanded={ecosysOpen}
                  className="focus:outline-none text-gray-600 hover:text-teal-600 ml-1"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {ecosysOpen && (
                <ul className="absolute top-full mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl text-base z-50 transform origin-top transition-all duration-200 ease-out">
                  <li>
                    <NavLink
                      to="/service"
                      onClick={() => setEcosysOpen(false)}
                      className="block px-5 py-3 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-150"
                    >
                      خدمات مرکز
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/MemberUnits"
                      onClick={() => setEcosysOpen(false)}
                      className="block px-5 py-3 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-150"
                    >
                      واحدهای عضو
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `cursor-pointer ${
                    isActive ? "text-teal-600 font-bold" : "hover:text-teal-600"
                  }`
                }
              >
                درباره ما
              </NavLink>
            </li>
          </ul>
        )}

        {/* آیکون‌ها سمت چپ */}
        {!isMobile && (
          <div className="flex items-center space-x-4 gap-5 ml-8 text">
            <NavLink
              to="/Notifications"
              className="relative text-gray-600 hover:text-teal-600"
            >
              <Bell className="w-6 h-6 inline-block" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {notificationCount}
                </span>
              )}
            </NavLink>
          </div>
        )}
      </div>

      {/* منوی موبایل */}
      {isMobile && (
        <div
          className={`fixed top-0 right-0 h-screen w-64 z-40 pt-[30px] transition-all duration-500 transform ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          } bg-white/50 backdrop-blur-md shadow-lg`}
        >
          <ul className="flex flex-col space-y-6 p-6 text-gray-700 text-right text">
            {/* دکمه بستن منو */}
            <li className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-red-500 text-xl"
              >
                <X className="w-6 h-6" />
              </button>
            </li>

            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <Home className="w-5 h-5" /> خانه
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/research"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" /> طرح‌های پژوهشی
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Ecosys"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <Globe className="w-5 h-5" /> اکوسیستم نوآوری
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" /> خدمات مرکز
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MemberUnits"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <Users className="w-5 h-5" /> واحدهای عضو
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <Info className="w-5 h-5" /> درباره ما
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Notifications"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 relative"
              >
                <Bell className="w-5 h-5" /> اعلان‌ها
                {notificationCount > 0 && (
                  <span className="absolute -top-2 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {notificationCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
