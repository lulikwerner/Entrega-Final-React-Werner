import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { gFetch } from '../../utils/gFetch';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';




const ItemDetailContainer = () => {
    const [itemDet, setItemDetail] = useState({});
    const [loading, setLoading] = useState(true);
  
    console.log(itemDet)
    useEffect(() => {
      gFetch()
        .then((Products) => setItemDetail(Products.find((item) => item.id === '3')))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <div>
        {loading ? <Spinner /> : <ItemDetail itemDet={itemDet}/>  }
       
      </div>
   
    );
   
  };
  
export default ItemDetailContainer;