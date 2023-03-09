import { useCartContext } from "../../context/CartContext";
import "../CartContainer/CartContainer.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeartWidget from "../widget/widget";
import Form from "../Form/Form";

const CartContainer = () => {
  const [active, setAct] = useState({});
  const toggleActive = (ProductsId) => () =>
    setAct({ ...active, [ProductsId]: !active[ProductsId] });

  const { cartList, emptyCart, deleteProduct, totalPrice } = useCartContext();
  const styleI = {
    width: " 5rem",
    height: "5rem",
    marginLeft: "15%",
  };

  if (cartList.length === 0) {
    return (
      <>
        <h2>El carrito de compras esta vacio</h2>
        <div>
          <Link to="/">
            <button>Volver al inicio</button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="title">Shopping Bag </div>
      {cartList.map((Products) => (
        <label key={Products.id}>
          <div className="shopping-cart">
            <div className="item">
              <div className="buttons">
                <span className="deleteBtn"
                  style={{ fontSize: 21 }}
                  onClick={() => deleteProduct(Products.id)}>
                  {" "} x
                </span>
                <div key={Products.id}>
                  <span
                    className="likeBtn"
                    onClick={toggleActive(Products.id)}
                    style={{ color: active[Products.id] ? "red" : "gray" }}
                  >
                    <HeartWidget />
                  </span>
                </div>
              </div>
              <div>
                <img style={styleI} variant="top" src={Products.image} />
              </div>
              <div className="description"> {Products.brand}</div>
              <div className="model">{Products.model}</div>
              <div className="total-qty">
                <div className="quantity">{Products.qty}</div>
              </div>
              <div className="total-price">
                ${Products.price * Products.qty}
              </div>
            </div>
          </div>
        </label>
      ))}
      <br></br>
      <button className="Empty" onClick={emptyCart}>
        Vaciar Carrito
      </button>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
      $ {totalPrice()} USD
      <Form />
      <button> Crear Ordenn </button>
    </div>
  );
};

export default CartContainer;
