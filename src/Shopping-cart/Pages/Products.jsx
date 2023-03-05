import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch= useDispatch()
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      console.log(products)
    };
    fetchProducts();
  }, []);

  const handleAdd =(product)=>{
    dispatch(add(product))
  }
   
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col mt-3" key={product.id}>
              <div
                className="card m-1"
                style={{ width: "18rem", height: "100%" }}
              >
                <img
                  src={product.image}
                  className="card-img-top mx-auto"
                  style={{ width: "12rem", height:"15rem" }}
                  alt="Loading..."
                />
                <p className="card-title m-2">
                  {product.title} 
                </p>
                <h2 className="mx-2">${product.price}</h2>
                <div className="card-body">
                  <button className="btn btn-primary ml-auto" onClick={()=>handleAdd(product)}>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
