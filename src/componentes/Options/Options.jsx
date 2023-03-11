import { Link } from "react-router-dom";

const optionButtons = [
  { name: "Checkout", route: "/carrito" },
  { name: "Seguir Comprando", route: "/" },
];

const Options = () => {
  return (
    <>
      {optionButtons.map((opt) => (
        <Link to={opt.route}>
          <button
            className="btn btn-outline-primary"
          >
            {opt.name}
          </button>
        </Link>
      ))}
    </>
  );
};
export default Options;
