import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function NavBar() {
  const items= useSelector((state)=> state.cart.length)
  return (
    <>
      <div>
        <nav className="navbar navbar-default navbar-light bg-light">
          <h2 className="navbar-brand" href=" ">
            REDUX
          </h2>
            <Link className="btn" to="/">Home</Link>
            <Link className="btn my-2 my-sm-0" to="/cart">Cart Items ({items})</Link>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
