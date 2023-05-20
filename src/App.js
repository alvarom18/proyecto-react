import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
        </Route>
        <Route path="*" element={<h3>Esta ruta no existe</h3>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
