import React from "react";

function CategoryButtons({ categorias, onSelect }) {
  return (
    <div className="flex justify-center gap-3 mb-6 flex-wrap">
      {categorias.map((cat) => (
        <button
          key={cat}
          className="bg-blue-200 px-3 py-1 rounded hover:bg-blue-400"
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
