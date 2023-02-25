

import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useCartContext } from '../../context/CartContext';

function CartWidget(){

    const styles={
      color:'turquoise',
      fontSize: 30,
    }
    const styleL={
      fontSize:15,
    }
    const {totalQty}=useCartContext()
  return (
    <section className='widget' style={styles}>
       
        <label style={styleL}>{totalQty()> 0 && totalQty() }</label>
        <HiOutlineShoppingBag/>
    </section>
  )
}
export default CartWidget
HiOutlineShoppingBag