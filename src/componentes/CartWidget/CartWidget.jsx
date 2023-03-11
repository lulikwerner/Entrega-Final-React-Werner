import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useCartContext } from "../../context/CartContext";

function CartWidget() {
  const styles = {
    color: "turquoise",
    fontSize: 30,
  };
  const styleL = {
    fontSize: 10,
    fontWeight: 600,
    color: "turqoise",
    borderRadius: "50%",
    border: "turqoise",
    position: "relative",
    height: "14px",
    width: "18px",
    background: "none",
    top: "10%",
    left: "50%",
  };
  const { totalQty } = useCartContext();
  return (
    <section className="widget" style={styles}>
      <label style={styleL}>{totalQty() >= 0 && totalQty()}</label>
      <HiOutlineShoppingBag />
    </section>
  );
}
export default CartWidget;
HiOutlineShoppingBag;
