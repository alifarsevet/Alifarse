"use client";

import Link from "next/link";

export default function Hero() {
  return (
        <section
          className="
            relative
            w-full
            overflow-hidden
            h-[calc(100vh-80px)]
            mt-20
          "
        >
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Contenido */}
      <div
        className="
          absolute
          bottom-10
          left-6
          md:left-20
          z-20
          max-w-xl
        "
      >
        <h1
          className="
            text-3xl
            md:text-6xl
            font-bold
            text-white
            leading-tight
          "
        >
          Soluciones Veterinarias
          <br />
          para un futuro saludable
        </h1>

        <p
          className="
            mt-4
            text-base
            md:text-xl
            text-white/90
          "
        >
          Productos veterinarios de alta calidad para
          animales menores y mayores.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/catalogo"
            className="
              bg-orange-600
              hover:bg-orange-700
              px-8
              py-3
              rounded-full
              text-white
              font-semibold
              transition
              text-center
            "
          >
            Ver Catálogo
          </Link>

          <Link
            href="/contacto"
            className="
              border-2
              border-white
              hover:bg-white
              hover:text-black
              px-8
              py-3
              rounded-full
              font-semibold
              transition
              text-center
            "
          >
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </section>
  );
}