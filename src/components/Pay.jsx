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
            alt="Master Card"
          />
          <img className="cursor-pointer" src="../images/Visa.png" alt="Visa" />
          <img className="cursor-pointer" src="../images/Troy.png" alt="Troy" />
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
          <div className="flex items-center w-[394px] gap-[14px]">
            <div className="flex items-center w-full pl-[18px] border-[1.7px] border-solid border-[#9F9F9F] rounded-[3.17px]">
              <img src="../images/wallet.png" alt="wallet icon" />
              <input
                type="text"
                className="outline-none max-w-[394px] border-none indent-[4px] py-[17px]"
              />
            </div>
            <img
              className="cursor-pointer"
              src="../images/check.png"
              alt="check icon"
            />
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
          <div className="flex items-center w-[394px] gap-[14px]">
            <div className="flex items-center w-full pl-[18px] border-[1.7px] border-solid border-[#9F9F9F] rounded-[3.17px]">
              {/* <img src="../images/wallet.png" alt="wallet icon" /> */}
              <input
                type="text"
                className="outline-none max-w-[394px] border-none indent-[4px] py-[17px]"
              />
            </div>
            <img
              className="pointer-events-none"
              style={{ visibility: "hidden" }}
              src="../images/check.png"
              alt="check icon"
            />
          </div>
        </div>
      </div>
      {/* third */}
      <div className="flex items-center mt-[14px] justify-between">
        <div>
          <p className="font-medium text-[24px]">Expiry date</p>
          <p className="text-[#6A6A6A]">Enter the expration date of the card</p>
        </div>
        <div className="flex items-center w-[394px] gap-[20px] justify-between pr-[48px]">
          <div className="flex items-center gap-[8px]">
            <input
              type="text"
              className="w-[36px] h-[35px] border border-solid border-[#9F9F9F] rounded outline-none indent-[3px]"
            />
            <span>/</span>
            <input
              type="text"
              className="w-[36px] h-[35px] border border-solid border-[#9F9F9F] rounded outline-none indent-[3px]"
            />
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="leading-[20px]">
              <p>CVV2</p>
              <p className="text-[#6A6A6A]">Security code</p>
            </div>
            <div>
              <input
                type="text"
                className="w-[36px] h-[35px] border border-solid border-[#9F9F9F] rounded outline-none indent-[3px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ................. */}
      <div className="mt-[32px] flex items-center justify-center">
        <button className="bg-[#08AC9F] border border-white btn-checkout rounded-[30px] text-white py-[16px] px-[87px] text-[18px]">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Pay;
