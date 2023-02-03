import CartWidget from "../CartWidget/CartWidget"
import'../NavBar/NavBar.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function NavBar(){
    return(

      <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container fluid>
        <Navbar.Brand href="#">Mia Jewelers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Servicios</Nav.Link>
            <Nav.Link href="#action2">Relojes</Nav.Link>
            <NavDropdown title="Joyas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Anillos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Collares
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
               Pulseras
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
          <section className='posit d-flex'>
      <CartWidget/>
      <ion-icon name="bag-outline"></ion-icon>
      </section>
      <a className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 posita" href="#">LogIn</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>





 


    )
  }
export default NavBar