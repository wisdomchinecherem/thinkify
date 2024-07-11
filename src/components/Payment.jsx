import { Link } from "react-router-dom";
import Ads from "./Ads";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./payment.css";

const Payment = () => {
  return (
    <div>
      <Navbar />
      <div className="payment mt-[205px]">
        <div className="payment_main_container max-w-[638px] p-[40px] bg-white rounded-3xl mx-auto">
          <p className="text-[#B607A4] mb-[40px] font-medium text-[28px]">
            Choose Payment Method
          </p>
          <div className="grid grid-cols-2 gap-[20px]">
            <div className="card_payment flex align-middle items-center justify-center gap-[16px] bg-white px-[38px] py-[26px] rounded-[20px] pay cursor-pointer">
              <img src="./images/card.png" alt="" />
              <p className="font-medium">
                Pay with <br /> Card
              </p>
            </div>
            <div className="paypal_payment cursor-pointer flex align-middle items-center justify-center gap-[16px] bg-white px-[38px] py-[26px] rounded-[20px] pay">
              <img src="./images/paypal.png" alt="" />
              <p className="font-medium">
                Pay with <br /> PayPal
              </p>
            </div>
            <div className="usdt_payment cursor-pointer flex align-middle items-center justify-center gap-[16px] bg-white px-[38px] py-[26px] rounded-[20px] pay">
              <img src="./images/usdt.png" alt="" />
              <p className="font-medium">
                Pay with <br /> USDT
              </p>
            </div>
            <div className="ussd_payment cursor-pointer flex align-middle items-center justify-center gap-[16px] bg-white px-[38px] py-[26px] rounded-[20px] pay">
              <img src="./images/ussd.png" alt="" />
              <p className="font-medium">
                Pay with <br /> USSD
              </p>
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-[48px]">
            <Link to={"/checkout"}>
              <button className="text-center btn-shadow py-[19px] px-[225px] whitespace-nowrap rounded-[46px] bg-[#08AC9F] text-white border-[2px] border-white text-[18px]">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Ads />
      <Footer />
    </div>
  );
};

export default Payment;
