import Item from "../Item/Item";
import { memo, React } from "react";


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
