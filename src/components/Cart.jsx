import { Link } from "react-router-dom";
import "./cart.css";
import Navbar from "./Navbar";
import Search from "./Search";
import Footer from "./Footer";
import Ads from "./Ads";

const Cart = () => {
  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart max-w-[1140px] mx-auto">
        <Search />

        {/* subtotal */}
        <div className="subtotal_container flex gap-6 justify-between items-center px-[30px] mt-[90px] rounded-[20px] max-w-[639px] text-[#525252] font-medium">
          <div className="text-[20px]">Subtotal</div>
          <div>$850</div>
        </div>

        <div className="cart_product mx-[20px] xl:bg-transparent bg-transparent">
          <p className="text-[#B607A4] font-medium cart_amount text-[22px] ml-[10px] mt-[80px] mb-[14px]">
            cart (4)
          </p>
          <div className="product-block grid place-items-center grid-cols-2 gap-4">
            <div className="products flex flex-col bg-white relative z-index-[3] max-w-[554px] py-[39px] px-[32px] rounded-[30px] items-center">
              <div className="flex items-center gap-[32px]">
                <div className="product-image">
                  <img src="../images/products/product-hard-cover.png" alt="" />
                </div>
                <div className="product-details">
                  <div className="product-name text-[#08AC9F]">
                    Hard-Cover Books
                  </div>
                  <div className="product-desc text-[#9F9F9F]">
                    Thick cover books for fun writing experience. Never worry
                    about water spill.
                  </div>
                  <div className="flex items-center gap-[20px] mt-[29px]">
                    <div className="product_price text-[#9F9F9F] font-medium text-[22px]">
                      $40
                    </div>
                    <div className="product_increment_and_decrement flex items-center">
                      <div className="px-[21px] py-[9px] bg-[#08AC9F] rounded-[10px] hover:bg-[#08ac9ec1] text-white cursor-pointer">
                        +
                      </div>
                      <div className="px-[21px] py-[9px]">1</div>
                      <div className="px-[21px] py-[9px] bg-[#08AC9F] rounded-[10px] hover:bg-[#08ac9ec1] text-white cursor-pointer">
                        -
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="remove_product cursor-pointer flex items-center whitespace-nowrap gap-[7.4px] mt-[25px]">
                <img src="../images/trash-can.png" alt="" />
                <span className="text-red-500 font-medium">Remove</span>
              </div>
            </div>
            <div className="products flex flex-col bg-white relative z-index-[3] max-w-[554px] py-[39px] px-[32px] rounded-[30px] items-center">
              <div className="flex items-center gap-[32px]">
                <div className="product-image">
                  <img src="../images/products/product-hard-cover.png" alt="" />
                </div>
                <div className="product-details">
                  <div className="product-name text-[#08AC9F]">
                    Hard-Cover Books
                  </div>
                  <div className="product-desc text-[#9F9F9F]">
                    Thick cover books for fun writing experience. Never worry
                    about water spill.
                  </div>
                  <div className="flex items-center gap-[20px] mt-[29px]">
                    <div className="product_price text-[#9F9F9F] font-medium text-[22px]">
                      $40
                    </div>
                    <div className="product_increment_and_decrement flex items-center">
                      <div className="px-[21px] py-[9px] bg-[#08AC9F] rounded-[10px] hover:bg-[#08ac9ec1] text-white cursor-pointer">
                        +
                      </div>
                      <div className="px-[21px] py-[9px]">1</div>
                      <div className="px-[21px] py-[9px] bg-[#08AC9F] rounded-[10px] hover:bg-[#08ac9ec1] text-white cursor-pointer">
                        -
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="remove_product cursor-pointer flex items-center whitespace-nowrap gap-[7.4px] mt-[25px]">
                <img src="../images/trash-can.png" alt="" />
                <span className="text-red-500 font-medium">Remove</span>
              </div>
            </div>
            <div className="products flex flex-col bg-white relative z-index-[3] max-w-[554px] py-[39px] px-[32px] rounded-[30px] items-center">
              <div className="flex items-center gap-[32px]">
                <div className="product-image">
                  <img src="../images/products/product-hard-cover.png" alt="" />
                </div>
                <div className="product-details">
                  <div className="product-name text-[#08AC9F]">
                    Hard-Cover Books
                  </div>
                  <div className="product-desc text-[#9F9F9F]">
                    Thick cover books for fun writing experience. Never worry
                    about water spill.
                  </div>
                  <div className="flex items-center gap-[20px] mt-[29px]">
                    <div className="product_price text-[#9F9F9F] font-medium text-[22px]">
                      $40
                    </div>
                    <div className="product_increment_and_decrement flex items-center">
                      <div className="px-[21px] py-[9px] bg-[#08AC9F] rounded-[10px] hover:bg-[#08ac9ec1] text-white cursor-pointer">
                        +
                      </div>
                      <div className="px-[21px] py-[9px]">1</div>
                      <div className="px-[21px] py-[9px] bg-[#08AC9F] rounded-[10px] hover:bg-[#08ac9ec1] text-white cursor-pointer">
                        -
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="remove_product cursor-pointer flex items-center whitespace-nowrap gap-[7.4px] mt-[25px]">
                <img src="../images/trash-can.png" alt="" />
                <span className="text-red-500 font-medium">Remove</span>
              </div>
            </div>
            <div className="products flex flex-col bg-white relative z-index-[3] max-w-[554px] py-[39px] px-[32px] rounded-[30px] items-center">
              <div className="flex items-center gap-[32px]">
                <div className="product-image">
                  <img src="../images/products/product-hard-cover.png" alt="" />
                </div>
                <div className="product-details">
                  <div className="product-name text-[#08AC9F]">
                    Hard-Cover Books
                  </div>
                  <div className="product-desc text-[#9F9F9F]">
                    Thick cover books for fun writing experience. Never worry
                    about water spill.
                  </div>
                  <div className="flex items-center gap-[20px] mt-[29px]">
                    <div className="product_price text-[#9F9F9F] font-medium text-[22px]">
                      $40
                    </div>
                    <div className="product_increment_and_decrement flex items-center">
                      <div className="px-[21px] py-[9px] bg-[#08AC9F] rounded-[10px] hover:bg-[#08ac9ec1] text-white cursor-pointer">
                        +
                      </div>
                      <div className="px-[21px] py-[9px]">1</div>
                      <div className="px-[21px] py-[9px] bg-[#08AC9F] rounded-[10px] hover:bg-[#08ac9ec1] text-white cursor-pointer">
                        -
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="remove_product cursor-pointer flex items-center whitespace-nowrap gap-[7.4px] mt-[25px]">
                <img src="../images/trash-can.png" alt="" />
                <span className="text-red-500 font-medium">Remove</span>
              </div>
            </div>
          </div>
        </div>
        {/* checkout btn */}
        <Link to={"/"}>
          <div className="flex justify-center py-[34px]">
            <Link to={"/payment"}>
              <button className="check_out text-center align-middle whitespace-nowrap py-[13px] bg-[#08AC9F] px-[85px] rounded-[40px] text-white font-medium text-[18px] cursor-pointer">
                Checkout
              </button>
            </Link>
          </div>
        </Link>
      </div>

      {/* more like these */}
      <Ads />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Cart;
