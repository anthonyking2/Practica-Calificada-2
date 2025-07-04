function CategoryButtons({ categorias, onSelect }) {
  return (
    <div className="flex justify-center gap-3 mb-8 flex-wrap">
      {categorias.map((cat) => (
        <button
          key={cat}
          className="hover:bg-blue-600 text-black hover:text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => onSelect(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
