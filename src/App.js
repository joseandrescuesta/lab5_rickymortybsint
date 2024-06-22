import Episodio from "./componentes/Episodio";
import Lista from "./componentes/Lista";
import { useDispatch } from "react-redux";
import Localizacion from "./componentes/Localizacion";
import { setInfo } from "./reducers";



function App() {

  let disp = useDispatch();

  const endpoint = "https://rickandmortyapi.com/api/character";

  async function getData() {
    try {
      const rta = await fetch(endpoint);

      if (rta.ok) {

        const datos = await rta.json();
        console.log(datos.results);
        disp(setInfo(datos.results));
      } else {
        throw new Error("Er:" + rta.error);
      }

    } catch (error) {
      console.log("ERROR:" + error);
    }
  };

  function getDatos() {
    getData();
  }

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <button onClick={getDatos}>Consultar API</button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Lista />
        <Episodio />
        <Localizacion />
      </div>
    </div>
  );
}

export default App;
