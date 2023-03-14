# Ecommerce
## _Mia Jewelers_
_Jewelery ecommerce_

DEMO: [MiaJewelers](https://miajewelers.netlify.app)


---


## Features

- User friendly navigation
- Navigate through different categories
- Extensive Product Information
- Add items to the cart
- Complete form with personal information
- Get your order ID



## Tech

* [Firebase](https://firebase.google.com/) 9.17.1 y breve descripcion
* [Boostrap](https://getbootstrap.com/) 5.2.3 breve descripcion
* [React](https://reactjs.org/) 18.2.3 breve descripcion
    *  [React-toastify](https://www.npmjs.com/package/react-toastify) 9.1.1 Allows you to add notifications to your app
    * [React-boostrap](https://react-bootstrap.github.io/) 2.7.0 React-Bootstrap replaces the Bootstrap JavaScript
    * [React-dom](https://reactjs.org/docs/react-dom.html#:~:text=The%20react%2Ddom%20package%20provides,model%20if%20you%20need%20to.) 18.2.0 Is the glue between React and the DOM
    * [React-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) 5.3.4 Provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view
    *  [React-router-dom](https://reactrouter.com/en/main/start/tutorial)  6.8.1 Enables you to implement dynamic routing in a web app
    * [React-spinner-kit](https://www.npmjs.com/package/react-spinners-kit) 1.9.1  A collection of loading spinners built with styled-components
    * [React-icons](https://www.npmjs.com/package/react-icons) 4.7.1 Include popular icons in your React projects 


And of course MiaJewelers itself is open source with a [public reposit](https://github.com/lulikwerner/Entrega-Final-React-Werner.git)
 on GitHub.

## Website

1. ***Main page***

On the main page, you can choose between two main categories: 'Relojes' or 'Joyas'. Within the 'Joyas' category, new subcategories will appear.

   * 1. Relojes.     
   * 2. Joyas.
        * Anillos
        * Aretes
        * Collares
        * Pulseras


2. ***Navbar***  

You will have access to the categories and to the shopping bag. The shopping bag will display the quantity of items you have in your shopping cart.

3. ***Item***

Each item has its own description card, where you can view the product's stock availability, picture, details, and price. This is where you can add as many pieces to your cart as you want, as long as they are available. If you click 'Comprar', you will have the option to either proceed to checkout or continue shopping by clicking 'Seguir Comprando'. 
Please note that if a product runs out of stock, the item will no longer be displayed on the site.

4. ***Shopping Cart***  

n this section of the site, you can view the items you have added to your cart and the total of you order. You have the option to delete the entire cart, remove individual items, or return to the main page. If you click 'Continuar', you will be directed to a form where you will need to enter your information. Note that your email address must match the one you enter in the 'Validar email' field. Once the form is complete and correct, an Order ID will be generated and displayed on the screen

## FireBase

The data base is hosted in Firebase. There are two collections:

|Collection | Description|
| ------ | ------ |
|orders | Stores the ID of the orders generated, as well as the buyer and product information." |
| products | Stores information for each product, including the stock quantity. The stock is updated every time an order is placed, and if the stock of a product reaches 0, the product is deactivated and will no longer be displayed on the website. |


---


Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:5173
```



