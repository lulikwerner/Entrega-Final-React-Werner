
import { Link} from "react-router-dom";



const Options= () =>{

    return(
        <>
        <Link to ='/carrito'>
            <button className="btn btn-outline-primary"
            onClick={()=>console.log('Cart')}>Checkout</button>
        </Link>
        <Link to='/'>
        <button className="btn btn-outline-primary"
           onClick={()=>console.log('Home')}>Seguir Comprando</button>
        </Link>
        </>
    )

}
export default Options
