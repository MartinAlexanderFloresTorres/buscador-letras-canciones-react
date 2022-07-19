import Formulario from "./Formulario";
import Alerta from "./Alerta";
import Letra from "./Letra";
import useLetras from "../hooks/useLetras";
import Spinner from "./Spinner";

const AppLetras = () => {
  const { alerta, informacion, cargando } = useLetras();

  return (
    <>
      <header>Búsqueda de letras de canciones</header>
      <Formulario />

      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : !Object.values(informacion).includes("") ? (
          <Letra />
        ) : cargando ? (
          <Spinner />
        ) : (
          <p className="text-center">Busca letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
