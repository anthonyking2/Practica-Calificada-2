import React from "react";

function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form className="flex justify-center mb-4 gap-2" onSubmit={onSubmit}>
      <input
        className="rounded-l px-3 py-2 border w-52"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Buscar..."
      />
      <button
        className="bg-blue-600 text-white px-4 rounded-r"
        type="submit"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;

