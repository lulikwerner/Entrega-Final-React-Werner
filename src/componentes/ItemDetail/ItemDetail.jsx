import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";

const ItemDetail = ({itemDet}) => {
  const { id, category, brand, model, price, quantity, description, image } = itemDet;
    console.log(itemDet)
  const onAdd = (qty) => {
    console.log(`Compraste ${qty} item`);
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Subtitle>{brand}</Card.Subtitle>
        <Card.Text>
          Categoria: {category}
          <br></br>
          Precio: {price}
          <br></br>
          Cantidad: {quantity}
        </Card.Text>
        <ItemCount initial={1} stock={quantity} onAdd={onAdd} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
