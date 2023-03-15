import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { React } from "react";
import Button from "react-bootstrap/Button";

function Item({ prod }) {
  const { id, category, brand, model, price, quantity, image } = prod;
  const styles = {
    width: "18rem",
    marginTop: "10%",
    marginLeft: "5%",
    display: "inline-block",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "21 rem",
    padding: "9px 20px 9px 20px",
  };
  const styleI = {
    width: " 16rem",
    height: "15rem",
  };
  const styleB = {
    marginTop: "5px",
    width: "60%",
    height: " 40px",
    border: "none",
    background: "linear-gradient(to bottom right, #4bd4d7, #79ddd9)",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
    color: "white",
  };

  return (
    <Card style={styles}>
      <Card.Img variant="top" style={styleI} src={image} />
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Subtitle>{brand}</Card.Subtitle>
        <Card.Text>
          Categoria: {category}
          <br></br>
          Precio:$ {price} USD
          <br></br>
          Cantidad: {quantity}
        </Card.Text>
        <Link to={`/detalle/${id}`}>
          <Button style={styleB} className="btn-sty">
            Ver Detalles
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Item;
