import React from "react";

function Gallery({ imagenes }) {
  if (!imagenes.length) {
    return (
      <p className="text-center col-span-full text-gray-500">
        No hay imágenes para mostrar.
      </p>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-3xl mx-auto">
      {imagenes.map((img) => (
        <div key={img.id} className="bg-white p-2 rounded shadow">
          <img
            src={img.src.medium}
            alt={img.alt}
            className="w-full h-40 object-cover rounded"
          />
          <p className="text-xs text-gray-500 mt-1">{img.photographer}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
