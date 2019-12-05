import React, {Component} from 'react'
import Product from './Items.js';
import DisplayList from './Display.js';
import 'bootstrap/dist/css/bootstrap.min.css';

var totalBill=0
let displayCart=[]
let message="Your cart is empty!"
const products=[
    {
      id:1,
      name:"Milk",
      price: 50,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1565504052130-29d2211abd47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      bill: 0
    },
    {
      id:2,
      name:"Bread",
      price: 40,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80",
      bill: 0
    },
    {
      id:3,
      name:"Cereal",
      price: 100,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=677&q=80",
      bill: 0
    },
    {
        id:4,
        name:"Apples",
        price: 30,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
        bill: 0
      },
      {
        id:4,
        name:"Banana",
        price: 20,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        bill: 0
      },
      {
        id:5,
        name:"Tomato",
        price: 70,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1517666005606-69dea9b54865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
        bill: 0
      },
      {
        id:6,
        name:"Onion",
        price: 90,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1467019972079-a273e1bc9173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        bill: 0
      },
      {
        id:7,
        name:"Cauliflower",
        price: 110,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
        bill: 0
      },
      {
        id:8,
        name:"Okra",
        price: 105,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        bill: 0
      },
      {
        id:9,
        name:"Carrots",
        price: 85,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        bill: 0
      },
      {
        id:10,
        name:"Cucumber",
        price: 65,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        bill: 0
      },
      {
        id:11,
        name:"Mango",
        price: 90,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1565279159111-6f289a47739c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
        bill: 0
      },
      {
        id:12,
        name:"Grapes",
        price: 75,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1538648721163-306fbe73105e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        bill: 0
      },
      {
        id:13,
        name:"Strawberries",
        price: 95,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
        bill: 0
      },
      {
        id:14,
        name:"Biscuits",
        price: 45,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80",
        bill: 0
      },
      {
        id:15,
        name:"Juice",
        price: 100,
        quantity: 0,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
        bill: 0
      },
  ]

class List extends Component{
    constructor(){
        super()
        this.state={
            cart: [], 
        }
    }

    addToCart(product){
        let productIndex=products.findIndex(p => p.id===product.id)
        let cartProduct=products.slice();
        let existingProduct=cartProduct[productIndex]
        let updatedProduct={
            ...existingProduct,
            quantity: existingProduct.quantity + 1,
        }
        updatedProduct.bill=updatedProduct.quantity*updatedProduct.price
        cartProduct[productIndex]=updatedProduct;
        let position=displayCart.findIndex(p=> p.name==product.name)
        if(position!=-1)
        {
            displayCart[position].quantity= displayCart[position].quantity + 1
        }
        else
        {
            displayCart.push(updatedProduct)
        }
        this.setState({
            cart: displayCart
        });
        totalBill=totalBill + updatedProduct.price
        if(totalBill!=0)
        {
            message=""
        }
    }

    removeFromCart(product){
        let productIndex=this.state.cart.findIndex(p => p.id===product.id)
        let cartProduct=this.state.cart.slice();
        let existingProduct=[]
        if(productIndex!=-1)
        {
            existingProduct=cartProduct[productIndex]
        }
        if(existingProduct.quantity>0)
        {
            let updatedProduct={
                ...existingProduct,
                quantity: existingProduct.quantity - 1
            }
        updatedProduct.bill=updatedProduct.quantity*updatedProduct.price
        let position=displayCart.findIndex(p=> p.name==product.name)
        if(position!=-1&&displayCart[position].quantity>0)
        {
            displayCart[position].quantity= displayCart[position].quantity - 1
        }
        if(displayCart[position].quantity==0)
        {
            displayCart.splice(position,1)
        }
        cartProduct[productIndex]=updatedProduct;
        totalBill=totalBill - updatedProduct.price
        }
        this.setState({
            cart: displayCart
        });
        if(totalBill==0)
        {
            message="Your cart is empty!"
        }
    }

    checkout()
    {
        if(totalBill==0)
        {
            alert("Your cart is empty!")
        }
        else
        {
            alert("Order successfully placed! Delivery expected in 1-2 days. Thank you for shopping with us!")
        }
    }

    render(){
        return(
            <div>
                <h1>ONLINE SUPERMARKET</h1>
                <hr />
                <div class="row">
                    <div class="col-lg-6">
                        <h2 id="productHeading">LIST OF ITEMS</h2>
                        {
                            products.map(p => <Product key={products.id} {...p} addElement={this.addToCart.bind(this)} deleteElement={this.removeFromCart.bind(this)}></Product>)
                        }
                    </div>
                    <div class="col-lg-6">
                        <h2 id="displayHeading">SHOPPING CART</h2>
                        {
                            this.state.cart.map(p => <DisplayList key={this.state.cart.id} {...p}></DisplayList>)
                        }
                        <p>{message}</p>
                        <h2 id="totalBill">Total Bill- Rs {totalBill}</h2>
                        <button class="btn btn-success" onClick={this.checkout.bind(this)}>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default List