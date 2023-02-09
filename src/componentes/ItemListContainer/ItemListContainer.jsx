

import { React, useEffect, useState } from "react";
import { gFetch } from "../../utils/gFetch";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";



export const ItemListContainer = ({ Greeting }) => {
  const styles = {
    color: "turquoise",
    fontSize: 50,
    marginTop:'8%',
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] =useState(true)
  useEffect(() => {
    gFetch()
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

console.log(products)
  
  return (
    <>
      <section style={styles}>
        <div>{Greeting}</div>
      </section>
      {loading ? 
        <Spinner/>
       : 
       <ItemList Products={products} />
      }
    </>
  );
};

export default ItemListContainer;
