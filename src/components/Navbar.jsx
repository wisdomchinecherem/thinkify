// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname == path;

  return (
    <div className="navbar">
      <header className="header flex items-center justify-center px-[52px] py-[34px]">
        <nav className="nav_bar flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <div className="nav-brand w-[110px] flex items-center">
              <img
                src="../images/logo.png"
                className="w-full h-full object-cover"
                alt="logo"
              />
            </div>
          </Link>
          {/* left nav */}
          {/* nav-links */}
          <div className={`nav_links flex-1 ml-[120px]`}>
            <ul className="flex justify-start items-end gap-[64px]">
              <li className={isActive("/") ? "active_link" : ""}>
                <Link className={"font-medium"} to="/">
                  Shop
                </Link>
              </li>
              <li className={isActive("/cart") ? "active_link" : ""}>
                <Link className="font-medium" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          {/* right-nav */}
          <div className="right-nav">
            {/* cart area */}
            <Link to="/cart">
              <div className="cart_container flex items-center justify-center">
                <div className="flex cursor-pointer items-center gap-[16px]">
                  <div className="cart-area flex items-center">
                    <img
                      src="../images/shopping-cart.png"
                      className="w-[24px]"
                      alt="shopping cart"
                    />
                    <span className="cart-count">+4</span>
                  </div>
                  <span className="nav-cart">Cart</span>
                </div>
              </div>
            </Link>
            <div className="menu">
              <img src="../images/home-icon.png" alt="" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
