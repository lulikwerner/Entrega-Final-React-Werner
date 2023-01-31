//Icono CART que este dentro del Navbar.js con numero hardcodeado(fijo). Tiene que ir dentro del Navbar

import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";

function CartWidget(){
    let count =0
    const styles={
      color:'turquoise',
      fontSize: 20,
    }
    const styleL={
      fontSize:15
    }
  return (
    <section className='widget' style={styles}>
        <HiOutlineShoppingBag/>
        <lavel style={styleL}>{count}</lavel>
    </section>
  )
}
export default CartWidget
HiOutlineShoppingBag