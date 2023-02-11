import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { gFetch} from '../../utils/gFetch';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const{idProduct}= useParams()
  const [itemDet, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    gFetch()
      .then((Products) => setItemDetail(Products.find((item) => item.id === idProduct)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idProduct]);

  return (
    <div>
      {loading ? <Spinner /> : <ItemDetail itemDet={itemDet}/>  }

    </div>

  );

};

export default ItemDetailContainer;