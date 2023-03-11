import CartWidget from "../CartWidget/CartWidget"
import'../NavBar/NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link, NavLink} from "react-router-dom";

function NavBar(){
    return(

      <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container fluid>
        <Link className= 'navbar-brand' to ='/'>Mia Jewelers</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <NavLink  className={({isActive})=>isActive ?'Activo':'NoActivo'} to = 'categoria/Relojes' >Relojes</NavLink>
            <NavDropdown className={({isActive})=>isActive ?'Activo':'NoActivo'} title="Joyas" id="navbarScrollingDropdown">
              
              <NavDropdown.Item  className={({isActive})=>isActive ?'Activo':'NoActivo'} as={Link}  to = 'categoria/Anillos'>Anillos
                </NavDropdown.Item>
                <NavDropdown.Item  as={Link}  to = 'categoria/Collares'>
               Collares
                </NavDropdown.Item>
              <NavDropdown.Item  as={Link}  to = 'categoria/Pulseras'>
               Pulseras
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to = 'categoria/Aretes'>
               Aretes              
               </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <section >
          <Link className="me-auto my-2 " to= 'carrito'>
      <CartWidget/>
      </Link>
      </section>
      <a className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 posita" href="#">LogIn</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>





 


    )
  }
export default NavBar