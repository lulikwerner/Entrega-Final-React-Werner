import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
   <>
 <NavBar/>
<ItemListContainer Greeting= 'Bienvenido a la Nueva tienda Online'/>
<ItemDetailContainer/>

   </>
  ) 
}

export default App

