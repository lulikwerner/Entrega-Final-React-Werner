import { getFirestore } from "firebase/firestore";
import { createContext, useContext, useState } from "react";

 const CartContext = createContext([])
 export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) =>{
    const[cartList,setCartList]=useState([])



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


const totalPrice= () => cartList.reduce((count,product) => count +=(product.qty*product.price),0)

const totalQty= () => cartList.reduce((count,product) => count +=product.qty,0)

const deleteProduct =(id) =>setCartList(cartList.filter(prod => prod.id!==id))







 


    const emptyCart = () => {
        setCartList([])
    }
    return(
        <CartContext.Provider value ={{
            cartList,
            addToCart,
            emptyCart,
            totalQty,
            totalPrice,
            deleteProduct,

        }}>
            {children}
        </CartContext.Provider>
    )
}