import React from 'react'
import Product from './Product'

function Main(props) {
    const {products,add,cartItems} =props
    return (
        <div className="row">
        {products.map((product)=>(
            <Product key={product.id} product={product} add={add} cartItems={cartItems}></Product>
        ))}
        </div>
    )
}

export default Main
