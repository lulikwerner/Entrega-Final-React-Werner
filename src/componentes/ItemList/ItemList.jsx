import Item from "../Item/Item";
import { memo, React } from "react";



const ItemList = memo(({Products}) => {


    return(
        <div  >
        {Products.map((prod)=><Item  prod={prod}/>)}
        </div>
        )
})
export default ItemList;
