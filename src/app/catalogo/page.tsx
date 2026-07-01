"use client";

// @ts-ignore
import HTMLFlipBook from "react-pageflip";

const FlipBook: any = HTMLFlipBook;

const paginas = Array.from({ length: 16 }, (_, i) => i + 1);

export default function CatalogoPage() {
  return (
    <main className="pt-24 pb-10 bg-gray-100 min-h-screen">
     <div className="flex justify-center">
      <FlipBook
        width={700}
        height={990}
        size="stretch"
        minWidth={320}
        maxWidth={900}
        minHeight={450}
        maxHeight={1200}
        showCover
        mobileScrollSupport
      >
        {paginas.map((pagina) => (
          <div
            key={pagina}
            className="w-full h-full bg-white flex items-center justify-center"
          >
            <img
              src={`/catalogo/pagina${pagina}.jpg`}
              alt={`Página ${pagina}`}
              className="w-full h-full object-fill"
              draggable={false}
            />
          </div>
        ))}
      </FlipBook>
       </div> 
    </main>
  );
}