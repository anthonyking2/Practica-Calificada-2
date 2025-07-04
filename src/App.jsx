import React, { useState, useEffect } from "react";

function App() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.pexels.com/v1/search?query=nature&per_page=12&orientation=square",
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
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-2">
      <h1 className="text-2xl font-bold text-center mb-5 text-blue-800">
        Galería de Fotos (Nature)
      </h1>
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
    </div>
  );
}

export default App;
