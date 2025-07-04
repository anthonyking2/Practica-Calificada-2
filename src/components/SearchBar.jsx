function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      className="flex justify-center mb-5 gap-0"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <input
        className="rounded-l-lg px-4 py-2 border border-[#393b43] text-black focus:outline-none focus:ring-2 focus:ring-blue-600 w-64 sm:w-96 placeholder-gray-400"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-r-lg font-semibold transition cursor-pointer"
        type="submit"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
