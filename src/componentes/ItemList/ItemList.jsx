import Item from "../Item/Item";



const ItemList = ({Products}) => {
 
    return(
        <div  >
        {Products.map((prod)=><Item key={prod.id} prod={prod}/>)}
        </div>
        )
}
export default ItemList;
