import { useState, createContext } from "react";
import axios from "axios";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState("");
  const [cargando, setCargando] = useState(false);
  const [informacion, setInformacion] = useState({
    artista: "",
    cancion: "",
    letra: "",
  });

  const busquedaLetra = async (busqueda) => {
    const { artista, cancion } = busqueda;
    try {
      setAlerta("");
      setInformacion({ artista: "", cancion: "", letra: "" });
      setCargando(true);
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const {
        data: { lyrics },
      } = await axios(url);
      setInformacion({ artista: artista, cancion: cancion, letra: lyrics });
    } catch (error) {
      console.error(error);
      setAlerta("Cancion no encontrada");
      setInformacion({ artista: "", cancion: "", letra: "" });
      setTimeout(() => {
        setAlerta("")
      }, 3000);
    }
    setCargando(false);
  };
  return (
    <LetrasContext.Provider
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        informacion,
        setInformacion,
        cargando,
      }}
    >
      {children}
    </LetrasContext.Provider>
  );
};

export { LetrasProvider };
export default LetrasContext;
