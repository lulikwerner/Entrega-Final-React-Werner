import { createContext, useContext, useState } from "react";

 const CartContext = createContext([])
 export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{
    const[cartList,setCartList]=useState([])

    //Falta agregar la logica para cuando agrego el mismo producto se sume y no se me vuelva a producir
    const addToCart = (Product) =>{
        setCartList([
            ...cartList,
            Product
        ] )
    }
    const emptyCart = () => {
        setCartList([])
    }
    return(
        <CartContext.Provider value ={{
            cartList,
            addToCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}