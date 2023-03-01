import { useState } from "react"

const options =[
    {value:1, text:"Oro Amarillo"},
    {value:2, text:"Oro Rosado"},
    {value:3, text:"Oro blanco"},
]

//Pasar el Select a OTRO CONTENEDOR
const Select = ({options, optionSelected, option}) =>{
return(
    <select
    onChange={(evet) => optionSelected(Number(evet.target.value))}>

{options.map((val) => (
<option value ={val.value}>{val.text}</option>
))}


    </select>
)
}
export default function Caso1(){
    const[option, setOptions]=useState(1)

    function OptionSelected(value){
        setOptions(value)
    }
    return(
        <>
        {option===1 ?
        <img src=""/>
        :
        <img src="./public/assets/CartierLove.jpg"/>
        }
        <Select
        options ={options}
        optionSelected = {optionSelected}
        option = {option}
        />
        </>
    );
}