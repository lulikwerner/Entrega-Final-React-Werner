



export const gFetch = () => new Promise( (res,rej)=>{
    let condition = true
    if(condition){
      setTimeout(()=>{
        res(Products)
      },2000)
      }else{
        rej('No hay productos')
      }
    })


