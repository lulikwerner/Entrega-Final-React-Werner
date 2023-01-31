//Mostrar Greeting prop con styling integrado

import React from 'react'

const ItemListContainer = ({Greeting}) => {
    const styles={
      color:'turquoise',
      fontSize: 50,
     
    }
    

  return (
    <section style={styles}>
    <div>{Greeting}</div>

    </section>
  )
}

export default ItemListContainer