import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";

const ItemDetail = ({itemDet}) => {
  const {  category, brand, model, price, quantity, description, image } = itemDet;
  const onAdd = (qty) => {
    console.log(`Compraste ${qty} item`);
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
      <Card.Img style ={styleI} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Subtitle>{brand}</Card.Subtitle>
        <Card.Text style ={styleD}>
          <br></br>
          Detalle: {description}
          <br></br>
          <br></br>
          Precio: {price}
          <br></br>
          Cantidad: {quantity}
        </Card.Text>
        <br></br>
        <ItemCount initial={1} stock={quantity} onAdd={onAdd} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
