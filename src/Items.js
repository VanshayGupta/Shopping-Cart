import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product= ({id, name, price, addElement, deleteElement, image})=>{
    return(
        <div>
            <div id="productList">
                <img src={image} class="picture"></img>
                <h2>{name}</h2>
                <h3>Rs {price}</h3>
                <button class="btn btn-outline-primary" id="addButton" onClick={()=> addElement({id,name,price})}>Add</button>  
                <button class="btn btn-outline-primary" id="deleteButton" onClick={()=> deleteElement({id,name,price})}>Remove</button>
                <p></p>
            </div>
        </div>
    )
}

export default Product