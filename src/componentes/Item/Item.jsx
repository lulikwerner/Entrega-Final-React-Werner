import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ prod }) {
  const {id, category, brand, model, price, quantity, image } =
    prod;
  const styles = {
    width: "18rem",
    marginTop: "10%",
    marginLeft:'5%',
    display: "inline-block",
    flexDirection: "row",
    flexWrap: "wrap",
 
  };
  return (
    <Card style={styles} >
      <Card.Img variant="top" src={prod.image} />
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
        <Link to = {`/detalle/${id}`}>
        <Button variant="primary">Ver Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Item;
