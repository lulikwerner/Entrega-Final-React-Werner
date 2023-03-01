import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";
import { useCartContext } from "../../context/CartContext";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Options from "../Options/Options";






const ItemDetail = ({itemDet}) => {
  const {  brand, model, price, quantity, description, image } = itemDet;
  const {addToCart, cartList} = useCartContext()
  const [purchase, setPurchase] =useState(false)
  const successToast = () => toast.success("Se agrego exitosamente ", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    
    });
  function onAdd (qty)  {
    console.log(`Compraste ${qty} item`);
    console.log(itemDet)
    
    addToCart({...itemDet,qty})
    setPurchase(true)
    console.log('Cart list:' ,cartList)
    successToast()
  };


  const styleI ={
    width:' 16rem',
    height:'15rem',
    marginLeft: '15%'
    
}
const styleD ={
  width:' 20rem',
  height:'15rem'
  
}
  return (
    <Card>
       <ToastContainer transition={Zoom} toastStyle={{ backgroundColor: "#f4fdff", color: "#44dee3"}}/>
      <Card.Img style ={styleI} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Subtitle>{brand}</Card.Subtitle>
        <Card.Text style ={styleD}>
          <br></br>
          Detalle: {description}
          <br></br>
          <br></br>
          Precio:$ {price} USD
          <br></br>
          Cantidad: {quantity}
        </Card.Text>
    

        {
          purchase ? <Options/> : <ItemCount initial={1} stock={quantity} onAdd={onAdd} />
        }
       
      </Card.Body>
     
    </Card>
  );
};

export default ItemDetail;
