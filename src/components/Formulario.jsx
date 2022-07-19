import { useState } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {
  const { setAlerta, busquedaLetra, cargando } = useLetras();
  const [busquedad, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busquedad).includes("")) {
      setAlerta("Coloca nombre de artista y canción");
      setTimeout(() => {
        setAlerta("")
      }, 2000);
      return;
    }
    // buscar
    busquedaLetra(busquedad);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por Artistas y Canción</legend>
      <div className="form-grid">
        <div>
          <label htmlFor="artista">Artista</label>
          <input
            type="text"
            placeholder="Nombre artista"
            name="artista"
            id="artista"
            value={busquedad.artista}
            onChange={(e) =>
              setBusqueda({
                ...busquedad,
                [e.target.name]: e.target.value.trimStart(),
              })
            }
          />
        </div>

        <div>
          <label htmlFor="cancion">Canción</label>
          <input
            type="text"
            placeholder="Nombre canción"
            name="cancion"
            id="cancion"
            value={busquedad.cancion}
            onChange={(e) =>
              setBusqueda({
                ...busquedad,
                [e.target.name]: e.target.value.trimStart(),
              })
            }
          />
        </div>
        <input
          type="submit"
          value={`${!cargando ? "Buscar" : "Buscando..."}`}
        />
      </div>
    </form>
  );
};

export default Formulario;
