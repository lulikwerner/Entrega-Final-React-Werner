import {React,  useEffect, useState } from 'react';
import Spinner from "../Spinner/Spinner";
import { gFetch} from '../../utils/gFetch';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Options from '../Options/Options';




const ItemDetailContainer = () => {
  const{idProduct}= useParams()
  const [itemDet, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    gFetch()
      .then((Products) => setItemDetail(Products.find((item) => item.id === idProduct)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idProduct]);

  return (
    <>
      {loading ? 
      <Spinner/> 
      : <ItemDetail itemDet={itemDet}/>

       }
      
    </>
  );
};

export default ItemDetailContainer;