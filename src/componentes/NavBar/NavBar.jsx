
import CartWidget from "../CartWidget/CartWidget"




function NavBar(){
    return(
  
      <nav className='App'>
      <label>Mia Jewelers</label>
      <p>Relojes</p>
      <p>Joyas</p>
      <p>Servicios</p>
      <CartWidget/>
      </nav>
    )
  }
export default NavBar