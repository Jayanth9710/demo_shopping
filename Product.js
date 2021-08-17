import React from "react";

function Product(props) {
  const { product, add, cartItems, inCart } = props;
  return (
    <div class="col mb-5">
      <div class="card h-100">
        <img className="small" src={product.image}></img>
        <div class="card-body p-4">
          <div class="text-center">
            <h3>{product.productName}</h3>
            Rs.{product.price}
          </div>
        </div>
        <div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
            <button
              className="btn btn-success"
              onClick={() => add(product)}
              disabled={cartItems.some((obj) => obj.id === props.product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
