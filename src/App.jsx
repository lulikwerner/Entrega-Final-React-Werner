import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element = {<ItemListContainer Greeting="Bienvenido a la Nueva tienda Online" />}/>
        <Route path='categoria/:idCategoria/:idSubCategoria' element = {<ItemListContainer Greeting="Bienvenido a la Nueva tienda Online" />}/>
        <Route path='detalle/:idProduct' element = {<ItemDetailContainer/>}/>
        <Route path ='*' element = {<Navigate to = '/'/>}/>
        <Route/>
  
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
