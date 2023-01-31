import CartWidget from "../CartWidget/CartWidget"
import'../NavBar/NavBar.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

function NavBar(){
    return(

        
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top App">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Mia Jewelers</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 list" >
        
          <li className="nav-item">
            <a className="nav-link" href="#">Relojes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Joyas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Servicios</a>
          </li>
        </ul>
     <section className='posit '>
      <CartWidget/>
      <ion-icon name="bag-outline"></ion-icon>
      </section>
      <a className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3 posita" href="#">LogIn</a>
      </div>
    </nav>
  


 


    )
  }
export default NavBar