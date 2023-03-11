import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

export const ItemListContainer = ({ Greeting }) => {
  const styles = {
    color: "turquoise",
    fontSize: 50,
    marginTop: "8%",
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const queryFilter = idCategoria
      ? query(queryCollection, where("category", "==", idCategoria))
      : queryCollection;

    getDocs(queryFilter)
      .then((respCollection) =>
        setProducts(
          respCollection.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        )
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [idCategoria]);

  return (
    <>
      <section style={styles}>
        <div>{Greeting}</div>
      </section>
      {loading ? <Spinner /> : <ItemList Products={products} />}
    </>
  );
};

export default ItemListContainer;
