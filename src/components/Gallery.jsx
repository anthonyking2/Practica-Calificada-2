function Gallery({ imagenes }) {
  if (!imagenes.length) {
    return (
      <div className="text-center text-gray-400 mt-10">No hay imágenes para mostrar.</div>
    );
  }

  return (
    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
      {imagenes.map((img) => (
        <div
          key={img.id}
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src={img.src.large}
            alt={img.alt || "Foto"}
            className="rounded-xl w-full h-56 object-cover group-hover:opacity-90 transition"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
