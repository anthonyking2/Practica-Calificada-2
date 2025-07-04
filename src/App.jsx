import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import Gallery from "./components/Gallery";

const categoriasBase = ["mountain", "beach", "forest", "city", "food", "animals", "space"];

function App() {
  const [imagenes, setImagenes] = useState([]);
  const [busqueda, setBusqueda] = useState("mountain");
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${busqueda}&per_page=12&orientation=square`,
          {
            headers: {
              Authorization: "fmYHl2gP2mlomfecSUjmXvloU5gqRvy7oewh4JMxZ4C8g2BssaFFgNtl"
            }
          }
        );
        const data = await response.json();
        setImagenes(data.photos);
      } catch (error) {
        setImagenes([]);
      }
    }
    fetchData();
  }, [busqueda]);

  const handleInputChange = (e) => setInput(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") setBusqueda(input.trim());
    setInput("");
  };
  const handleCategoriaClick = (cat) => setBusqueda(cat);

  return (
    <div className="min-h-screen px-2 py-10">
      <h1 className="text-6xl font-bold text-center text-black pb-3">
        SnapShot
      </h1>
      <SearchBar
        value={input}
        onChange={handleInputChange}
        onSubmit={handleSearchSubmit}
      />
      <CategoryButtons
        categorias={categoriasBase}
        onSelect={handleCategoriaClick}
      />
      <Gallery imagenes={imagenes} />
    </div>
  );
}

export default App;
