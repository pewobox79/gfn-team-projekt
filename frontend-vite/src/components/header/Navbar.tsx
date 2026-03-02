import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const menuData = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Blog", path: "/blog" },
  { title: "Pages", path: "/pages" },
  { title: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-[999] bg-white md:bg-transparent   md:border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>

              <div className="flex flex-col">
                <span className="text-black font-bold text-xl md:text-2xl tracking-wider">
                  BIZPER
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  CORPORATE BUSINESS
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center space-x-10">
              {menuData.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-black hover:text-orange-500 font-medium text-lg transition"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-black p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[1000] shadow-2xl transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="bg-[#0f1225] px-6 py-5 flex items-center justify-between">
          <h2 className="text-white font-bold text-xl">BIZPER</h2>

          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center"
          >
            <X size={18} className="text-red-500" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="divide-y divide-gray-100">
          {menuData.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block px-6 py-4 text-gray-800 font-medium hover:bg-gray-50 transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
