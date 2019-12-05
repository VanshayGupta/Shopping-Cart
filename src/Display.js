import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayList=({id, name, quantity, price, bill}) =>{
    return(
        <div id="displayList">
            <h4 id="displayName">{name}</h4>
            <h5 id="displayBill">{quantity}X  | Rs {bill}</h5>
            <hr />
        </div>
    )
}

export default DisplayList