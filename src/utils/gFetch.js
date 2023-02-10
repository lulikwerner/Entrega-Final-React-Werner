let Products=[{id:'1', category:'Relojes', brand: 'Rolex', model:'GMT Master II', price:'$25,000 USD', quantity: '3', description:'Designed to show the time in two different time zones simultaneously during intercontinental flights, the GMT-Master II has come to be recognized for its robustness and versatile appearance.', image:'./public/assets/img/GMT.jpg' },
              {id:'2', category:'Relojes', brand: 'Cartier', model:'Tank Must', price:'$3,200 USD', quantity: '2', description:'Sophistication Measured On Every Level: From Its Redesigned Bracelet To Its Movement. Inspired By The Tank Louis Cartier, The Tank Must Design Pays Homage To The Legend.',image:'./public/assets/img/CartierTank.jpg' },
              {id:'3', category:'Pulseras', brand: 'VanCleef & Arpeel', model:'Sweet Alhambra bracelet ', price:'$1,560 USD', quantity: '7', description:'18K rose gold, Carnelian bracelet.  The Sweet Alhambra® jewelry creations by Van Cleef & Arpels have featured delightful lucky motifs in miniature form since 2007. Light and delicate, they are a discreet way of bringing happiness to each passing day. ',image:'./public/assets/img/VanCleefAlhambra.jpg' },
              {id:'4', category:'Aretes', brand: 'VanCleef & Arpeel', model:'Sweet Alhambra earstuds ', price:'$2,720 USD', quantity: '7', description:'18K rose gold earstuds.  The Sweet Alhambra® jewelry creations by Van Cleef & Arpels have featured delightful lucky motifs in miniature form since 2007. Light and delicate, they are a discreet way of bringing happiness to each passing day. ',image:'./public/assets/img/VanCleefEarstuds.jpg' },
              {id:'5', category:'Collares', brand: 'Chopard', model:'Happy Diamonds', price:'$8,720 USD', quantity: '4', description:'Chopard Round Diamond Pendant With Five Floating Diamonds ',image:'./public/assets/img/ChopardNe.jpg' },
              {id:'6', category:'Anillos', brand: 'Bvlgari', model:'B.zero1 ', price:'$3,500 USD', quantity: '5', description:'Bvlgari Rose 18k Diamond B.Zero1 Ceramic Ring 6 | 53',image:'./public/assets/img/BvlgariRing.jpg' },
              {id:'7', category:'Pulseras', brand: 'Cartier', model:'Love', price:'$6,900 USD', quantity: '10', description:'Its design is made to be put on with the assistance of someone else, specifically a loved one with whom forever seems possible. Ultimately, the Cartier Love Bracelet was created as an industrial piece and a symbol of love to ones paramour ',image:'./public/assets/img/CartierLove.jpg' },
            ]



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

    export const getProduct = (id) => {
      return new Promise((resolve) => {
        const filterProduct = Products.find(item => item.id === parseInt(id))
        setTimeout(() => {
            resolve(filterProduct)
         
        }, 2000)
    })
  }
