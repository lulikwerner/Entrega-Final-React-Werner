import { useCartContext } from "../../context/CartContext";
import "../CartContainer/CartContainer.css";
import { Link} from "react-router-dom";
import { useState } from "react";





const CartContainer = () => {
  
  const { cartList, emptyCart, deleteProduct, totalPrice } = useCartContext();
  console.log("en el cart:", cartList);
  const styleI = {
    width: " 5rem",
    height: "5rem",
    marginLeft: "15%",
  };

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
