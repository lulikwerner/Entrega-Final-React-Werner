import CartWidget from "../CartWidget/CartWidget"
import'../NavBar/NavBar.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar(){
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top App">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Mia Jewelers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Relojes</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Joyas
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Pulseras</a></li>
            <li><a className="dropdown-item" href="#">Anillos</a></li>
            <li><a className="dropdown-item" href="#">Collares</a></li>
          </ul>
        </li>
      </ul>
     
      <section className='posit d-flex'>
      <CartWidget/>
      <ion-icon name="bag-outline"></ion-icon>
      </section>
      <a className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 posita" href="#">LogIn</a>
      </div>
    
   
  </div>
</nav>
        



 


    )
  }
export default NavBar