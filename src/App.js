import "./App.css";
import { useEffect } from "react";
import Aos from "aos";


import Cabecalho from "./components/Cabecalho";
import Inicio from "./pages/inicio";
import Sobre from "./pages/Sobre";
import Informacao from "./pages/Informacao";
import Contato from "./pages/Contato";
import Ajuda from "./pages/Ajuda";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Cabecalho />
      <Inicio />
      <Sobre />
      <Informacao />
      <Ajuda />
      <Contato />
    </>
  );
}

export default App;