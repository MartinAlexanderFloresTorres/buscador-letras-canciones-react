import { useState, useEffect } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {
  const { alerta, setAlerta, setInformacion, busquedaLetra, cargando } =
    useLetras();
  const [busquedad, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busquedad).includes("")) {
      setAlerta("Coloca nombre de artista y canción");
      setInformacion({ artista: "", cancion: "", letra: "" });
      if (!alerta) {
        setTimeout(() => {
          setAlerta("");
        }, 3000);
      }
      return;
    }
    const boton = document.querySelector("#buscar");
    boton.disabled = true;
    boton.style.opacity = "0.5";
    boton.style.cursor = "no-drop";
    // buscar
    busquedaLetra(busquedad);
  };

  useEffect(() => {
    if (!cargando) {
      const boton = document.querySelector("#buscar");
      boton.disabled = false;
      boton.style.opacity = "1";
      boton.style.cursor = "pointer";
    }
  }, [cargando]);
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
          id="buscar"
          value={`${!cargando ? "Buscar" : "Buscando..."}`}
        />
      </div>
    </form>
  );
};

export default Formulario;
