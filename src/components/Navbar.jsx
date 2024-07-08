import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <header className="header flex items-center justify-center px-[52px] py-[34px]">
        <nav className="nav_bar flex justify-between items-center">
          {/* logo */}
          <div className="nav-brand w-[110px] flex items-center">
            <img src="../images/logo.png" className="w-full h-full object-cover" alt="logo" />
          </div>
          {/* left nav */}
          {/* nav-links */}
          <div className="nav_links">
            <ul className="flex justify-between items-end gap-[64px]">
              <li className="active_link">
                <a className={"font-medium"} href="">
                  Home
                </a>
              </li>
              <li>
                <a className="font-medium" href="">
                  About
                </a>
              </li>
              <li>
                <a className="font-medium" href="">
                  Shop
                </a>
              </li>
              <li>
                <a className="font-medium" href="">
                  Account
                </a>
              </li>
              <li>
                <a className="font-medium" href="">
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            {/* cart area */}
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
              <div className="menu">
                <img src="../images/hambuger-icon.png" alt="" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
