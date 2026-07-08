export default function ContactoPage() {
  return (
    <main>

      {/* HERO */}

      <section className="bg-orange-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contáctanos
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Estamos listos para ayudarte con información,
            cotizaciones y consultas sobre nuestros productos veterinarios.
          </p>

        </div>
      </section>

      {/* INFORMACIÓN */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORMULARIO */}

            <div>

              <h2 className="text-3xl font-bold mb-8">
                Envíanos un mensaje
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full border rounded-xl p-4"
                />

                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full border rounded-xl p-4"
                />

                <textarea
                  placeholder="Escribe tu mensaje"
                  rows={6}
                  className="w-full border rounded-xl p-4"
                />

                <button
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
                >
                  Enviar Consulta
                </button>

              </form>

            </div>

            {/* DATOS */}

            <div>

              <h2 className="text-3xl font-bold mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="font-bold text-xl">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600">
                    +51 918 654 556
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Correo
                  </h3>
                  <p className="text-gray-600">
                    ventas@alifarse.com.pe
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Dirección
                  </h3>
                  <p className="text-gray-600">
                    Lima, Perú
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-600">
                    Lunes a Viernes
                    <br />
                    8:30 am - 6:00 pm
                    <br />
                    Sabados                      
                    <br />
                    8:00 am - 1:30 pm                    
                  </p>
                </div>

              </div>

              <a
                href="https://wa.me/51918654556"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 bg-green-600 text-white px-8 py-4 rounded-xl"
              >
                Contactar por WhatsApp
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* MAPA */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=Lima,Peru&output=embed"
              width="100%"
              height="500"
              loading="lazy"
            />

          </div>

        </div>
      </section>

    </main>
  );
}