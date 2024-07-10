import "./cart.css";
import Navbar from "./Navbar";
import Search from "./Search";

const Cart = () => {
  return (
    <div className="cart">
      <Navbar />
      <Search />

      {/* subtotal */}
      <div className="cart_container flex gap-6 justify-between items-center px-[30px] rounded-[20px] max-w-[639px] text-[#525252] font-medium">
        <div className="text-[20px]">Subtotal</div>
        <div>$850</div>
      </div>

      <div className="cart_product">
        <p>cart (4)</p>
        <div className="product-block grid grid-cols-2 gap-4">
          <div className="products">
            <div>
              <div className="product-image">
                <img src="../images/products/product-hard-cover.png" alt="" />
              </div>
              <div className="product-details">
                <div className="product-name">Hard-Cover Books</div>
                <div className="product-desc">
                  Thick cover books for fun writing experience. Never worry
                  about water spill.
                </div>
                <div>
                  <div className="product_price">$40</div>
                  <div className="product_increment_and_decrement">
                    <div>+</div>
                    <div></div>
                    <div>-</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="remove_product">
              <img src="../images/trash-can.png" alt="" />
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
