import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
const Form = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',

      
      })
      const [mail,setMail] = useState(null);
      let email = (e) => { setMail(e.target.value) }
      const [validMail,setValidMail] = useState(null);
      let validEmail = (e) => { setValidMail(e.target.value) }
      const { cartList, emptyCart, totalPrice } = useCartContext();
      const [id,setId] = useState('')



   const handleOnChange = (evet) =>{
    setDataForm({
      ...dataForm,
      [evet.target.name]: evet.target.value,
    })
  }

  //Valida que sea el mismo email
   /*const  [emailValidate,setEmailValidate]=useState("")
   const handleSubmit= (eve) =>{
   eve.preventDefault()
       if(email!==validEmail){
           setEmailValidate('Por favor ingresar el mismo email')
           console.log(mail)
           console.log(validMail)
           return
   }
   setEmailValidate("")
   createOrder()
   }*/

   

       
      

  


    return(
        <div className="container " >
<form >
  <h1>Registrarse</h1>
  <p>Por favor ingrese sus datos</p>
  <label ><b>Username</b></label>
  <input type="text" placeholder="Ingresar el nombre" onChange={handleOnChange} name="name"  id="name" require />

  <label><b>Telefono</b></label>
  <input type="text" placeholder="Ingresar telefono" onChange={handleOnChange} name="phone"  id="phone" require />

  <label ><b>Email</b></label>
  <input type="text" placeholder="Validar email" onChange={handleOnChange} name="email"  id="email" required />

  <label ><b>Validar email</b></label>
  <input type="text" placeholder="Validar email" onChange={handleOnChange}  name="emailRepeat"  id="emailRepeat" required />

</form>

</div>
    )
    
    }

export default Form