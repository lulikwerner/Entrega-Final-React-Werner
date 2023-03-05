import { useCartContext } from "../../context/CartContext";
import "../CartContainer/CartContainer.css";
import { Link} from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";





const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
  
  })
  const { cartList, emptyCart, deleteProduct, totalPrice } = useCartContext();
  const styleI = {
    width: " 5rem",
    height: "5rem",
    marginLeft: "15%",
  };

const createOrder = (event) =>{
  event.preventDefault()
const order ={}
order.buyer = dataForm
order.totalPrice=totalPrice()
order.products= cartList.map(({id,brand,price})=>({id,brand,price}))

//Agregar una orden en Firestore
const db = getFirestore()
const queryCollection = collection(db, 'orders')

addDoc(queryCollection, order)
.then(resp => console.log(resp))
.catch( err =>console.log(err))
.finally(() =>{
  emptyCart(),
  setDataForm({
    name: '',
    phone: '',
    email: '',
  
  })
})

}

const handleOnChange = (evet) =>{
setDataForm({
  ...dataForm,
  [evet.target.name]: evet.target.value,
})
}

  
  if(cartList.length === 0){
    return <>
    <h2>El carrito de compras esta vacio</h2><div>
      <Link to="/">
        <button>
          Volver al inicio
        </button>
      </Link>
    </div>
    </>
  }

  return (
    <div>
        <div className="title">Shopping Bag </div>
      {cartList.map((Products) => (
        <label key={Products.id}>
          <div className="shopping-cart">
            <div className="item">
            <div className="buttons">
      <span className="delete-btn" onClick={()=>deleteProduct(Products.id)}> x</span>
  
      <span className="like-btn"></span>
    </div>

              <div>
                <img style={styleI} variant="top" src={Products.image} />
              </div>

              <div className="description"> {Products.brand}</div>
                <div className="model">{Products.model}</div>
              
              <div className="total-qty">

        <div className="quantity">
  
    
       {Products.qty} 


    </div>

              </div>
              <div className="total-price">
              
             ${Products.price*Products.qty}
              
              </div>
            </div>
          </div>
        
        </label>
        
      ))}

<div className="container " onSubmit ={createOrder}>
<form>
  <h1>Registrarse</h1>
  <p>Por favor ingrese sus datos</p>
  <label ><b>Username</b></label>
  <input type="text" placeholder="Ingresar el nombre" onChange={handleOnChange} name="name" value ={dataForm.name} id="name" require />

  <label><b>Telefono</b></label>
  <input type="text" placeholder="Ingresar telefono" onChange={handleOnChange} name="phone" value ={dataForm.phone} id="phone" require />

  <label><b>Email</b></label>
  <input type="text" placeholder="Ingresar Email"  onChange={handleOnChange} name="email" value ={dataForm.email} id="email" require />

  <label ><b>Validar email</b></label>
  <input type="text" placeholder="Validar email" onChange={handleOnChange} name="emailRepeat" value ={dataForm.emailRepeat} id="emailRepeat" required />
<button > Crear Orden </button>
</form>

</div>
<br></br>
      <button  className="Empty" onClick={emptyCart}>
       Vaciar Carrito
     </button>
     <Link to ="/">
     <button>
       Volver al inicio
     </button>

    
     </Link>    
      $ {totalPrice()} USD
    </div>
    
  );
};

export default CartContainer;



