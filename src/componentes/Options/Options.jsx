import { useState } from "react"
import { Link} from "react-router-dom";


const InputCount=()=> {

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
const ButtonCount = ({handleInter})=>{
    return(
        <button className="btn btn-dark"
        onClick={handleInter} >Comprar</button>
    )
}

const Options= () =>{
    const[inputType, setInputType] = useState('button')

    const handleInter=()=>{
        setInputType('input')

    }
    return(
        
        <div>
        {
            inputType ==='button' ?
            <ButtonCount handleInter={handleInter} />
            :
            <InputCount/>
        }
        </div>
    )

}
export default Options

