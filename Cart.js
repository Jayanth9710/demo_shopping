import React from 'react'
import Data from '../productData';

function Cart(props) {
    const {cartItems,add,remove,} = props;
    const itemTotal = cartItems.reduce((a,c) => a+c.price * c.qty,0)
    
    return (
        
            <div>
            {cartItems.length===0 && <div>Cart is Empty</div>}
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div>{item.productName}</div>
                    <div>
                        <button onClick={()=>add(item)} className="add btn btn-primary badge">+{item.qty} </button>
                        {/* <span>{item.qty}</span> */}
                        <button onClick={()=>remove(item)} className="subtract btn btn-primary badge">-</button>
                    </div>
                    <div> {item.qty} x Rs.{item.price} = {(item.qty)*(item.price)}</div>
                   
                </div>
            ))}
            <div>
                <hr></hr>
               <h1>Total Cart Value :{itemTotal}</h1>
            </div>
        </div>
        
    )
}

export default Cart
