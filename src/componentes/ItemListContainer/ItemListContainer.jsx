

import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [loading, setLoading] =useState(true);
  const {idCategoria}  = useParams();
  useEffect(() => {
    if(idCategoria){
      gFetch()
      .then((resp) => setProducts(resp.filter(Products => Products.category ===idCategoria)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }else{
      gFetch()
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
  },[idCategoria]);
  

console.log(products)
console.log(idCategoria)
  
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
