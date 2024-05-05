
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import cartcontext from "../Store/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartctx = useContext(cartcontext);
  const totalitems = cartctx.items.reduce((currno, item) => {
    return currno + item.amount;
  }, 0);

  // Get the current location
  const location = useLocation();

  // Determine if the "Store" route is active
  const isStoreRouteActive = location.pathname === "/";

  const handleCartClick = () => {
    props.onShowCart();
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.menu}>
          <Link to="/home"><h2>Home</h2></Link>
          <Link to="/"><h2>Store</h2></Link>
          <Link to="/about"><h2>About</h2></Link>
        </div>
        {isStoreRouteActive && <button onClick={handleCartClick}>cart: {totalitems}</button>}
      </header>
    </div>
  );
};

export default Header;


/*
// Header.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartcontext from "../Store/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartctx = useContext(cartcontext);
  const totalitems = cartctx.items.reduce((currno, item) => {
    return currno + item.amount;
  }, 0);
  console.log("this is header",cartctx)

  const handleCartClick = () => {
    props.onShowCart();
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.menu}>
          <Link to="/home"><h2>Home</h2></Link>
          <Link to="/"><h2>Store</h2></Link>
          <Link to="/about"><h2>About</h2></Link>
        </div>
        <button onClick={handleCartClick}>cart: {totalitems}</button>
      </header>
    </div>
  );
};

export default Header;
*/

