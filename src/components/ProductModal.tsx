"use client";

type Props = {
  producto: any;
  onClose: () => void;
};

export default function ProductModal({
  producto,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          ✕
        </button>

        <div className="p-8">

          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-64 mx-auto object-contain"
          />

          <div className="bg-gray-700 text-white p-6">
            <h2 className="text-3xl font-bold">
              {producto.nombre}
            </h2>
          </div>

          <div className="mt-8">

            <h3 className="font-bold text-xl text-blue-700">
              Descripción
            </h3>

            <p className="mt-2 text-gray-700">
              {producto.descripcion}
            </p>

          </div>
            <div className="mt-6">

              <h3 className="font-bold text-xl text-blue-700">
                Indicaciones
              </h3>

              <p className="mt-2 text-gray-700 whitespace-pre-line">
                {producto.indicaciones}
              </p>

            </div>


          <div className="mt-6">

            <h3 className="font-bold text-xl text-blue-700">
              Composición
            </h3>

            <p className="mt-2 text-gray-700 whitespace-pre-line">
              {producto.composicion}
            </p>

          </div>

          <div className="mt-6">

            <h3 className="font-bold text-xl text-blue-700">
              Modo de Uso
            </h3>

            <p className="mt-2 text-gray-700 whitespace-pre-line">
              {producto.uso}
            </p>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            {producto.inserto && (
              <a
                href={producto.inserto}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
              >
                Ver Inserto
              </a>
            )}

            {producto.pdf && (
              <a
                href={producto.pdf}
                download
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
              >
                Descargar PDF
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}