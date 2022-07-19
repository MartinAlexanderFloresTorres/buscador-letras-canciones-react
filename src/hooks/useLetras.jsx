import { useContext } from "react";
import LetrasContext from "../context/LetrasProvider";

function useLetras() {
  return useContext(LetrasContext);
}

export default useLetras;
