import useLetras from "../hooks/useLetras";
import Spinner from "./Spinner";

const Letra = () => {
  const { informacion, cargando } = useLetras();
  const { artista, cancion, letra } = informacion;
  return cargando ? (
    <Spinner />
  ) : (
    <div className="letra">
      <h1>{cancion}</h1>
      <h2>{artista}</h2>
      {letra}
    </div>
  );
};

export default Letra;
