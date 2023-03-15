import { Link } from "react-router-dom";
import "../ItemCount/ItemCount.css";


const optionButtons = [
  { name: "Checkout ", route: "/carrito" },
  { name: "Seguir Comprando  →", route: "/" },
];
const Options = () => {
  
  return (
    <>
      <br></br>
      {optionButtons.map((opt, index) => (
        <Link key={index} to={opt.route}>
          <button className="btn-sty">{opt.name}</button>
        </Link>
      ))}
    </>
  );
};
export default Options;
