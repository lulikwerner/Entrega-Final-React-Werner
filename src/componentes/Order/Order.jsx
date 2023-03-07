import { useState } from "react"



 const CreateOrder = (event) =>{

const [id,setId] = useState('')


    event.preventDefault()
  const order ={}
  order.buyer = dataForm
  order.totalPrice=totalPrice()
  order.products= cartList.map(({id,brand,price})=>({id,brand,price}))
  
  //Agregar una orden en Firestore
  const db = getFirestore()
  const queryCollection = collection(db, 'orders')
  
  addDoc(queryCollection, order)
  .then(resp => setId(resp.id))
  .catch( err =>console.log(err))
  .finally(() =>{
    emptyCart(),
    setDataForm({
      name: '',
      phone: '',
      email: '',
    
    })
  })

  if(id!==''){
    return <>
    {id!== '' &&<div> <h1> Gracias por su compra</h1><h2>El numero de orden es: </h2> <h4>{id}</h4>
    <Link to="/">
          <button>
            Volver al inicio
          </button>
        </Link></div>}
    </>
  }
    
    else  if(cartList.length === 0 ){
      return <>
      
      <h2>El carrito de compras esta vacio</h2><div>
        <Link to="/">
          <button>
            Volver al inicio
          </button>
        </Link>
      </div>
      </>
    }
  




  }


export default CreateOrder;