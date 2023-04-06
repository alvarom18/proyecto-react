import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={"Bienvenido"} />
    </div>
  );
}

export default App;
