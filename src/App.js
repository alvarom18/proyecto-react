import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/Counter/Counter";
import Navbar from "./componentes/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo={"Bienvenido"} />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(cantidad) => console.log("Cantidad agregada", cantidad)}
      />
    </div>
  );
}

export default App;
