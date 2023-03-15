import ItemDetail from "../../componentes/ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getFirestore, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const [itemDet, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", idProduct);
    getDoc(queryDoc)
      .then((respProd) =>
        setItemDetail({ id: respProd.id, ...respProd.data() })
      )
      .catch((error) => console.log(error))
      .finally(() => {
        setTimeout(() => setLoading(false), 2000);
      });
  }, [idProduct]);






  return <>{loading ? <Spinner /> : <ItemDetail itemDet={itemDet} />}</>;
};

export default ItemDetailContainer;
