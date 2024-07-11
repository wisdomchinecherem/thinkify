import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./checkout.css";
import Ads from "./Ads";

const Checkout = () => {
  return (
    <div className="checking">
      <Navbar />
      <div className="confirmation bg-white mx-auto rounded-3xl px-20px py-[40px] max-w-[894px] my-[248px]">
        <img src="../images/confirm.png" className="mx-auto mb-[20px]" alt="" />
        <div className="text-[#6A6A6A] text-[24px] text-center text-confirm">
          Thank you for shopping with us. Your order is on its way!
        </div>
        <div className="flex w-full justify-center mt-[20px]">
          <Link to={"/"}>
            <button className="bg-[#08AC9F] border-[2px] border-white btn-checkout rounded-[30px] text-white py-[16px] px-[87px] text-[18px]">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <Ads />
      <Footer />
    </div>
  );
};

export default Checkout;
