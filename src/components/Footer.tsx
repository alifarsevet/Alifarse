"use client";

import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 1. Marca */}
        <div>
          <h2 className="text-white text-2xl font-semibold">
            Alifarse
          </h2>

          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Soluciones veterinarias confiables para el cuidado animal.
            Comprometidos con la innovación y el bienestar animal.
          </p>

          {/* Redes */}
          <div className="flex gap-3 mt-5">

            <a href="#" className="p-2 bg-gray-900 hover:bg-blue-600 transition rounded-full">
              <FaFacebookF size={14} />
            </a>

            <a href="#" className="p-2 bg-gray-900 hover:bg-pink-500 transition rounded-full">
              <FaInstagram size={14} />
            </a>

            <a href="#" className="p-2 bg-gray-900 hover:bg-black transition rounded-full">
              <FaTiktok size={14} />
            </a>

            <a href="https://wa.me/51918654556" className="p-2 bg-gray-900 hover:bg-green-500 transition rounded-full">
              <FaWhatsapp size={14} />
            </a>

          </div>
        </div>

        {/* 2. Enlaces rápidos */}
        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm text-gray-400">
           <li>
            <Link href="/" className="hover:text-white transition cursor-pointer">
              Inicio
            </Link>
           </li>
           <li>
            <Link href="/productos" className="hover:text-white transition cursor-pointer">
              Productos
            </Link>
           </li>
           <li>
            <Link href="/catalogo" className="hover:text-white transition cursor-pointer">
              Catalogo
            </Link>
           </li>
           <li> 
            <Link href="/contacto" className="hover:text-white transition cursor-pointer">
              Contacto
            </Link>
           </li>
          </ul>
        </div>

        {/* 3. Productos */}
        <div>
          <h3 className="text-white font-semibold mb-4">Productos</h3>
          <ul className="space-y-2 text-sm text-gray-400">
          <li>
            <Link href="/productos" className="hover:text-white transition">
              Farmacos
            </Link>
          </li>
          <li>
            <Link href="/productos" className="hover:text-white transition">
              Alimentos
            </Link>
          </li>     
          </ul>
        </div>

        {/* 4. Contacto + Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>

          <p className="text-sm text-gray-400">
            📍 Lima, Perú
          </p>

          <p className="text-sm text-gray-400 mt-2">
            📞 +51 918 654 556
          </p>

          <p className="text-sm text-gray-400 mt-2">
            ✉️ ventas@alifarse.com.pe
          </p>

         
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} Alifarse. Todos los derechos reservados.</p>
        </div>
      </div>

    </footer>
  );
}