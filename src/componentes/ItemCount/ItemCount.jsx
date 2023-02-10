import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    const substract = () => {
      if (count > 0) {
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
        <button className="btn btn-dark"  onClick={add}>
          +
        </button>
      </div>
      <button
        className="btn btn-dark"
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(count)}
      >
        Comprar
      </button>
   </>
  )
}

export default ItemCount;