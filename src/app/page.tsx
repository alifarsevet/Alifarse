import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full items-end">
          <div className="w-full pl-8 md:pl-16 pb-16">

            <h1 className="text-white text-4xl md:text-6xl font-bold max-w-xl leading-tight">
              Soluciones Veterinarias para un Futuro Saludable
            </h1>

            <p className="text-white text-base md:text-lg mt-4 max-w-md">
              Productos veterinarios de alta calidad para animales menores y mayores.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="/catalogo"
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg text-sm"
              >
                Ver Catálogo
              </a>

              <a
                href="https://wa.me/51998901343"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg text-sm"
              >
                Solicitar Cotización
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* SOBRE NOSOTROS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <Image
                src="/empresa.jpg"
                alt="Alifarse"
                width={800}
                height={600}
                priority
                className="rounded-3xl"
              />
            </div>

            <div>

              <span className="text-orange-600 font-semibold">
                SOBRE ALIFARSE
              </span>

              <h2 className="text-5xl font-bold mt-4">
                Comprometidos con la salud animal
              </h2>

              <p className="text-gray-600 mt-8 text-lg">
                Brindamos soluciones veterinarias innovadoras
                para mejorar la productividad y bienestar animal,
                trabajando con altos estándares de calidad.
              </p>

            </div>

          </div>

        </div>
      </section>

      
{/* LINEAS DE PRODUCTOS */}

<section className="bg-gray-50 py-24">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-center text-5xl font-bold mb-6">
      Nuestras Líneas de Productos
    </h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
      Desarrollamos productos especializados para el bienestar,
      entretenimiento y cuidado de mascotas.
    </p>

    <div className="grid md:grid-cols-2 gap-10">

      {/* LINEA FARMACOS */}

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition">

        <img
          src="/tabletas.jpg"
          alt="Tabletas para mascotas"
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          <h3 className="text-3xl font-bold">
            Linea Farmacos
          </h3>

          <p className="text-gray-600 mt-4">
            Fórmulas desarrolladas para complementar la nutrición,
            bienestar y cuidado de perros y gatos.
          </p>

          <a
            href="/productos?categoria=tabletas"
            className="inline-block mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl"
          >
            Ver Productos
          </a>

        </div>

      </div>

      {/* LINEA ALIMENTOS */}

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition">

        <img
          src="/snacks.jpg"
          alt="Snacks para mascotas"
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          <h3 className="text-3xl font-bold">
            Linea Alimentos
          </h3>

          <p className="text-gray-600 mt-4">
            Premios y snacks funcionales diseñados para reforzar
            hábitos positivos y mejorar la experiencia de las mascotas.
          </p>

          <a
            href="/productos?categoria=snacks"
            className="inline-block mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl"
          >
            Ver Productos
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* PRODUCTOS DESTACADOS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-5xl font-bold mb-16">
            Productos Destacados
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

             <div className="border rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex-1 flex items-center justify-center p-6">
                <img
                  src="/productos/producto1.jpg"
                  alt="Vomistop"
                  className="max-h-[300px] w-auto object-contain"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-3xl font-black text-center text-gray-900 h-[100px] flex items-center justify-center">
                  Vomistop
                </h3>
                  <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
                  </div>
            </div>

            <div className="border rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="flex-1 flex items-center justify-center p-6">
                <img
                  src="/productos/producto2.jpg"
                  alt="Snack Hígado de Res"
                  className="max-h-[300px] w-auto object-contain"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-3xl font-black text-center text-gray-900 h-[100px] flex items-center justify-center">
                  Snack Higado de Res
                </h3>
                  <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
                  </div>
            </div>

            <div className="border rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="flex-1 flex items-center justify-center p-6">
                <img
                  src="/productos/producto3.jpg"
                  alt="Wintop"
                  className="max-h-[300px] w-auto object-contain"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-3xl font-black text-center text-gray-900 h-[100px] flex items-center justify-center">
                  Wintop
                </h3>
                  <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
                  </div>
            </div>

          </div>

        </div>

      </section>

      {/* ESTADISTICAS */}

      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-10 text-center">

              <div>
                <div className="text-6xl mb-4">🐾</div>
                <h3 className="text-2xl font-bold">
                  Bienestar Animal
                </h3>
              </div>

              <div>
                <div className="text-6xl mb-4">💊</div>
                <h3 className="text-2xl font-bold">
                  Calidad Garantizada
                </h3>
              </div>

              <div>
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold">
                  Innovación Veterinaria
                </h3>
              </div>

              <div>
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold">
                  Atención Personalizada
                </h3>
              </div>
            
            </div>

          </div>

        </section>
    </main>
  );
}