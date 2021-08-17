import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import Data from "./productData";
import { useState } from "react";
import Navbar from "./Components/navbar";


function App() {
  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);
  
  
  const addItems = (product) => {

    
    const prod = cartItems.find((obj) => obj.id === product.id);
    
    
    if (prod) {
      
      setCartItems(
        cartItems.map((obj) =>
          obj.id === product.id ? { ...prod, qty: prod.qty + 1 } : obj
        )
        
      );
      
      
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    
  };
  const remove = (product) => {
    const prod = cartItems.find((obj) => obj.id===product.id);
    if(prod.qty===1){
      setCartItems(cartItems.filter((obj)=> obj.id!==product.id))
    } else {
      setCartItems(
        cartItems.map((obj) =>
          obj.id === product.id ? { ...prod, qty: prod.qty - 1 } : obj
        )
      );
    }
  }


  return (
    <>
      <Navbar cartItems={cartItems}></Navbar>
      <Header></Header>
      <div className="container-fluid" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <Main products={products} add={addItems} remove={remove} cartItems={cartItems}></Main>
            </div>
          </div>
        
        <div className="col-lg-3">
  
          <Cart cartItems={cartItems} add={addItems} remove={remove}  ></Cart>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
