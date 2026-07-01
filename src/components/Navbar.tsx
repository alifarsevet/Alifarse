"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Catalogo", path: "/catalogo" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LOGO -> HOME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Alifarse Logo"
            width={60}
            height={60}
            className="rounded-md"
          />
          <span className="text-gray-900 font-bold text-lg tracking-wide">
            Alifarse
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-base text-gray-600">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative group hover:text-green-600 transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 text-2xl"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-4 space-y-3">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block py-3 border-b text-gray-700 hover:text-green-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}