import { createContext, useContext, useState } from "react";

 const CartContext = createContext([])
 export const useCartContext = () => useContext(CartContext)







export const CartContextProvider = ({children}) =>{
    const[cartList,setCartList]=useState([])

    //Falta agregar la logica para cuando agrego el mismo producto se sume y no se me vuelva a producir


    const addToCart = ( Product) =>{
        const aux = cartList.findIndex((x) => x.id === Product.id);
     
      
       
        if(aux!=-1){
           
            cartList[aux].qty+=Product.qty
            setCartList([...cartList])
            return
    } else{
        setCartList([
            ...cartList,
            Product
        ] )
       
    }
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