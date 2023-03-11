import { useState } from "react"
import { updateDoc,doc,  getFirestore } from "firebase/firestore";
const options =[
    {value:1, text:"Oro Amarillo"},
    {value:2, text:"Oro Rosado"},
    {value:3, text:"Oro blanco"},
]

//Pasar el Select a OTRO CONTENEDOR
const Select = ({options, optionSelected}) =>{
return(
    <select
    onChange={(evet) => optionSelected(Number(evet.target.value))}>

{options.map((val) => (
<option value ={val.value}>{val.text}</option>
))}


    </select>
)

}
console.log(options)    

const updateOrder =() =>{
const db =getFirestore()
const queryDoc = doc(db, 'products', '6PIZIy6WpQxvmjj3vB3p')
updateDoc(queryDoc, {image:{option}})
.then(()=> console.log('producto actualizado'))
}
export default function Caso1(){
    const[option, setOptions]=useState(1)

    function optionSelected(value){
        setOptions(value)
        
    }
  
    
    return(
        <>

        {option===1 ?


        <img src="../public/assets/img/CartierLoveYG.jpg"/>
        :
        <img src="../public/assets/img/CartierLove.jpg"/>
  
        }
        
        <Select
        options ={options}
        optionSelected = {optionSelected}
        option = {option}
        
        />
        <h2>{option}</h2>
        </>
    );
    updateOrder()
}

