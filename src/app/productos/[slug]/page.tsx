import { productos } from "@/data/productos";

export default async function Producto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const producto = productos.find(
    (p) => p.slug === slug
  );

  if (!producto) return <div>No encontrado</div>;

  return (
    <main className="container mx-auto py-16">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="rounded-xl w-full max-w-xl"
      />

      <h1 className="text-5xl font-bold mt-8">
        {producto.nombre}
      </h1>

      <p className="mt-6 text-lg">
        {producto.descripcion}
      </p>
    </main>
  );
}