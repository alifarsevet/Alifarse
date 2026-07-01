"use client";

import { useState } from "react";
import { productos } from "../../data/productos";
import ProductModal from "../../components/ProductModal";
console.log(ProductModal);

export default function ProductosPage() {

  const [selected, setSelected] = useState<any>(null);
  const [search, setSearch] = useState("");

  const tabletas = productos.filter(
    (p: any) => p.categoria === "Tabletas"
  );

  const snacks = productos.filter(
    (p: any) => p.categoria === "Snacks"
  );

  const productosFiltrados = productos.filter((producto: any) =>
    producto.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto py-16 px-4">

      <section className="bg-gradient-to-r from-orange-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Nuestros Productos
          </h1>

          <p className="mt-4 text-xl text-white-100">
            Soluciones innovadoras para el bienestar animal
          </p>
        </div>
      </section>
        <div className="my-10 flex justify-center">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              max-w-xl
              px-5
              py-4
              rounded-2xl
              border
              border-gray-300
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
              text-lg
            "
          />
        </div>
{search && (
  <>
    <h2 className="text-3xl font-bold mb-8">
      Resultados de búsqueda
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mb-16">

      {productosFiltrados.map((producto: any) => (
        <div
          key={producto.id}
          onClick={() => setSelected(producto)}
          className="
            cursor-pointer
            border
            rounded-2xl
            overflow-hidden
            hover:shadow-xl
          "
        >
          <div className="relative h-72 bg-white flex items-center justify-center p-6 overflow-hidden">

            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="
                max-h-full
                max-w-full
                object-contain
                transition-transform
                duration-500
                hover:scale-110
              "
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
              <h3 className="font-bold text-lg">
                {producto.nombre}
              </h3>
            </div>

          </div>
        </div>
      ))}

    </div>
  </>
)}   


     {/* LINEA FARMACOS */}

      {!search && (
<>
  <h2 className="text-3xl font-bold mt-16 mb-8">
    Línea Fármacos
  </h2>


      <div className="grid md:grid-cols-3 gap-8">

        {tabletas.map((producto: any) => (
          <div
            key={producto.id}
            onClick={() => setSelected(producto)}
            className="cursor-pointer border rounded-2xl overflow-hidden hover:shadow-xl"
          >

          
        <div className="relative h-72 bg-white flex items-center justify-center p-6 overflow-hidden">

          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110"
          />

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
              <h3 className="font-bold text-lg">
                {producto.nombre}
              </h3>
              <p className="text-sm">
                {producto.descripcion}
              </p>
            </div>

          </div>

          </div>

        ))}

      </div>

      {/* LINEA ALIMENTOS */}

      <h2 className="text-3xl font-bold mt-20 mb-8">
        Linea Alimentos
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {snacks.map((producto: any) => (

          <div
            key={producto.id}
            onClick={() => setSelected(producto)}
            className="cursor-pointer border rounded-2xl overflow-hidden hover:shadow-xl"
          >
          
        <div className="relative h-72 bg-white flex items-center justify-center p-6 overflow-hidden">

          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110"
          />

            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
              <h3 className="font-bold text-lg">
                {producto.nombre}
              </h3>
              <p className="text-sm">
                {producto.descripcion}
              </p>
            </div>

          </div>

          </div>

        ))}

      </div>
</>
)}
      {selected && (
        <ProductModal
          producto={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}