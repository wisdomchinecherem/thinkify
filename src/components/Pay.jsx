import "./pay.css";

const Pay = () => {
  return (
    <div className="mx-auto max-w-[894px] bg-white rounded-3xl px-[64px] py-[71px]">
      <div className="text-[#B607A4] font-medium text-[21px] mb-[36px]">
        Pay With Card
      </div>
      <div>
        <div className="flex gap-[20px] justify-end mb-[21px]">
          <img
            className="cursor-pointer"
            src="../images/Master Card.png"
            alt=""
          />
          <img className="cursor-pointer" src="../images/Visa.png" alt="" />
          <img className="cursor-pointer" src="../images/Troy.png" alt="" />
        </div>
        <div className="flex items-center gap-[40px] justify-between">
          <div className="leading-[12px]">
            <p className="heading font-medium text-[24px] text-[#030802]">
              Card number
            </p>
            <br />
            <span className="text-[#6A6A6A] text-[15px]">
              Enter the 16-digit card number on the card
            </span>
          </div>
          <div className="flex items-center max-w-[394px] gap-[14px]">
            <div className="flex items-center w-full pl-[18px] border-[1.7px] border-solid border-[#9F9F9F] rounded-[3.17px]">
              <img src="../images/wallet.png" alt="" />
              <input
                type="text"
                className="outline-none max-w-[394px] border-none indent-[4px] py-[17px]"
              />
            </div>
            <img className="cursor-pointer" src="../images/check.png" alt="" />
          </div>
        </div>
      </div>
      {/* second input */}
      <div className="mt-[32px]">
        <div className="flex items-center gap-[40px] justify-between">
          <div className="leading-[12px]">
            <p className="heading font-medium text-[24px] text-[#030802]">
              Card owner
            </p>
            <br />
            <span className="text-[#6A6A6A] text-[15px]">
              Enter the name on the card
            </span>
          </div>
          <div className="flex items-center flex-[1] gap-[14px]">
            <div className="flex items-center w-full pl-[18px] border-[1.7px] border-solid border-[#9F9F9F] rounded-[3.17px]">
              <img src="../images/wallet.png" alt="" />
              <input
                type="text"
                className="outline-none max-w-[394px] border-none indent-[4px] py-[17px]"
              />
            </div>
            <img
              className="pointer-events-none"
              style={{ visibility: "hidden" }}
              src="../images/check.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Pay;
