import { useState } from "react"
import { Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const successToast = () => toast.success("This is a success toast.");
const message=()=>{
    
return(
   
        <div>
          <button onClick={successToast}>Success toast</button>
          <ToastContainer />
        </div>
)
}
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



const Options =() =>{
    const[inputType, setInputType] = useState('button')

    const handleInter=()=>{
        setInputType('input')
        
    }
    return(
        
        <div>
        {
            inputType ==='button' ?
            <ButtonCount handleInter={handleInter}/>
            :
            <InputCount/>
        }
        </div>
    )

}
export default Options