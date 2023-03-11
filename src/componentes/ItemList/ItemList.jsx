import { memo, React } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ Products }) => {
  return (
    <div>
      {Products.map((prod) => (
        <Item prod={prod} />
      ))}
    </div>
  );
});
export default ItemList;
