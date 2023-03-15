import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../CartContainer/CartContainer.css";
import "../Form/Form.css";


const Form = ({ setId }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    emailRepeat: "",
  });
  const handleOnChange = (evet) => {
    setDataForm({
      ...dataForm,
      [evet.target.name]: evet.target.value,
    });
  };
  const { cartList, emptyCart, totalPrice } = useCartContext();
  const createOrder = () => {
    const order = {};
    order.buyer = dataForm;
    order.totalPrice = totalPrice();
    order.products = cartList.map(({ id, brand, price }) => ({
      id,
      brand,
      price,
    }));

    //Agregar una orden en Firestore
    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        emptyCart(),
          setDataForm({
            name: "",
            phone: "",
            email: "",
          });
      });
  };

  //Valida que sea el mismo email
  const [error, setError] = useState("");

  const handleSubmit = (eve) => {
    eve.preventDefault();
    if (dataForm.email !== dataForm.emailRepeat) {
      setError("Por favor ingresar el mismo email");
      return;
    } else {
      setError(""), createOrder();
    }
  };
  return (
    <div className="container ">
      <form onSubmit={handleSubmit}>
        <h1>Registrarse</h1>
        <p>Por favor ingrese sus datos</p>
        <label>
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Ingresar el nombre"
          onChange={handleOnChange}
          name="name"
          id="name"
          required
        />
        <label>
          <b>Telefono</b>
        </label>
        <input
          type="text"
          placeholder="Ingresar telefono"
          onChange={handleOnChange}
          name="phone"
          id="phone"
          required
        />
        <label>
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Ingresar email"
          onChange={handleOnChange}
          name="email"
          id="email"
          required
        />
        <label>
          <b>Validar email</b>
        </label>
        <input
          type="text"
          placeholder="Validar email"
          onChange={handleOnChange}
          name="emailRepeat"
          id="emailRepeat"
          required
        />
        {error && <div>{error}</div>}
        <button className="create"> Crear orden</button>
      </form>
      <Link to="/">
        <div className="text-muted">
          <span className="back-to-shop2"> &#8592; Volver al inicio</span>
        </div>
      </Link>
    </div>
  );
};
export default Form;
