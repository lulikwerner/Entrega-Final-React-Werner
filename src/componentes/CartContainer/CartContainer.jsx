import { useCartContext } from "../../context/CartContext";
import "../CartContainer/CartContainer.css";

const CartContainer = () => {
    
  const { cartList, emptyCart } = useCartContext();
  console.log("en el cart:", cartList);
  const styleI = {
    width: " 5rem",
    height: "5rem",
    marginLeft: "15%",
  };
  return (
    <div>
        <div className="title">Shopping Bag </div>
      {cartList.map((Products) => (
        <label key={Products.id}>
          <div className="shopping-cart">
            <div className="item">
              <div className="buttons"></div>

              <div>
                <img style={styleI} variant="top" src={Products.image} />
              </div>

              <div className="description"> {Products.brand}</div>
                <div className="model">{Products.model}</div>
              
              <div className="total-qty">
                {Products.qty}
              </div>
              <div className="total-price">
                {Products.price}
              </div>
            </div>
          </div>
        
        </label>
        
      ))}
      <button  className="Empty" onClick={emptyCart}>
       Vaciar Carrito
     </button>
     <button  link to = '/'>
       Volver al inicio
     </button>
    </div>
    
  );
};

export default CartContainer;
