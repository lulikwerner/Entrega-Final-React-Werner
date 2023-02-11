import CartWidget from "../CartWidget/CartWidget"
import'../NavBar/NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from "react-router-dom";

function NavBar(){
    return(

      <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container fluid>
        <Link to ='/'>Mia Jewelers</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
            <NavLink to = 'categoria/relojes'>Relojes</NavLink>

            <NavDropdown title="Joyas" id="navbarScrollingDropdown">
            
              <NavDropdown.Item>
              <NavLink to = 'categoria/joyas/anillos'>Anillos</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
              <NavLink to = 'categoria/joyas/collares'>Collares</NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
              <NavLink to = 'categoria/joyas/pulseras'>
               Pulseras
              </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink to = 'categoria/joyas/aretes'>
               Aretes
              </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
  
          </Nav>
        
          <section className='posit d-flex'>
          <Link >
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