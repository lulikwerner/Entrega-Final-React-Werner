import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { gFetch, getProduct } from '../../utils/gFetch';
import ItemDetail from '../../componentes/ItemDetail/ItemDetail';




const ItemDetailContainer = ({filterProduct}) => {
    const [itemDet, setItemDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const { id, category, brand, model, price, quantity, description, image } =
    itemDet;
    useEffect(() => {
      getProduct(id)
        .then(( item) => setItemDetail(item))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [id]);
    return (
      <div>
        {loading ? <Spinner /> : <ItemDetail itemDet={itemDet}/>  }
       
      </div>
   
    );
   
  };
  
export default ItemDetailContainer;