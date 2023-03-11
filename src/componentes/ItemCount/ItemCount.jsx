import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const substract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div>
        <button className="btn btn-dark" onClick={substract}>
          -
        </button>

        <span className="btn ">{count}</span>
        <button className="btn btn-dark" onClick={add}>
          +
        </button>
        <br></br>
        <button
          onClick={() => {
            onAdd(count);
          }}
        >
          Comprar
        </button>
      </div>
    </>
  );
};

export default ItemCount;
