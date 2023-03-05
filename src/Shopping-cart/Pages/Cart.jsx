import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch= useDispatch()


  const handleRemove = (productId)=>{
    dispatch(remove(productId))
  }


  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col mt-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="" />
                <div className="card-body">
                  {/* <p>{product.description} </p> */}
                  <p>{product.title} </p>
                  <h2>${product.price} </h2>
                  <button className="btn btn-outline-danger" onClick={()=>handleRemove(product.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
