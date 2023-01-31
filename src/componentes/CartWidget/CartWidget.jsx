//Icono CART que este dentro del Navbar.js con numero hardcodeado(fijo). Tiene que ir dentro del Navbar

import React from 'react'
import shoppingBag from '/public/assets/img/ShoppingBag.png'


function CartWidget(){
    let count =0
  return (
    <section>
        
        <img src={shoppingBag}></img>
        <lavel>{count}</lavel>
    </section>
  )
}
export default CartWidget