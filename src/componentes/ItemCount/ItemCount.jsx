import "../ItemCount/ItemCount.css";
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
    <div>
      <br></br>
      <div className="counter">
        <div className="btn-con" onClick={substract}>
          -
        </div>
        <div className="count">{count}</div>
        <div className="btn-con" onClick={add}>
          +
        </div>
      </div>
      <br></br>
      <button
        className="btn-sty"
        onClick={() => {
          onAdd(count);
        }}
      >
        {" "}
        Comprar{" "}
      </button>
    </div>
  );
};

export default ItemCount;
