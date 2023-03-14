import { memo, React } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ Products }) => {
  const activeProducts = Products.filter((prod) => prod.active);
  
  return (
    <div>
      {activeProducts.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
});

export default ItemList;