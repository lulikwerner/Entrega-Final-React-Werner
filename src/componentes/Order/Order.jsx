import { useState } from "react"
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";


 const Order = () =>{

  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    emailRepeat:'',
  
  })

const[order,setOrder]=useState("")
const { cartList, emptyCart, totalPrice } = useCartContext();
const createOrder= ({setOrder}) =>{
const order ={}
order.buyer = dataForm
order.totalPrice=totalPrice()
setOrder(order.products= cartList.map(({id,brand,price})=>({id,brand,price})))

//Agregar una orden en Firestore
const db = getFirestore()
const queryCollection = collection(db, 'orders')

addDoc(queryCollection, order)
.then(resp => setId(resp.id) )
.catch( err =>console.log(err))
.finally(() =>{
emptyCart(),
setDataForm({
  name: '',
  phone: '',
  email: '',

})
})
}
if(order !== ''){
  return(
    <div>Muchas gracias por su compra su orden es: {id}</div>
   
  )
}
 }
export default Order;