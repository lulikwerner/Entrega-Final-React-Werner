import CartWidget from "../CartWidget/CartWidget";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";


function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          Mia Jewelers
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className={({ isActive }) => (isActive ? "Activo" : "NoActivo")}
              to="categoria/Relojes"
            >
              Relojes
            </NavLink>
            <NavDropdown
              className={({ isActive }) => (isActive ? "Activo" : "NoActivo")}
              title="Joyas"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                className={({ isActive }) => (isActive ? "Activo" : "NoActivo")}
                as={Link}
                to="categoria/Anillos"
              >
                Anillos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categoria/Aretes">
                Aretes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categoria/Collares">
                Collares
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="categoria/Pulseras">
                Pulseras
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <section>
            <Link className="me-auto my-2 bag" to="carrito">
              <CartWidget />
            </Link>
          </section>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
