//Icono CART que este dentro del Navbar.js con numero hardcodeado(fijo). Tiene que ir dentro del Navbar

import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";

function CartWidget(){
    let count =0
  return (
    <section className='widget'>
        <HiOutlineShoppingBag/>
        <lavel>{count}</lavel>
    </section>
  )
}
export default CartWidget
HiOutlineShoppingBag