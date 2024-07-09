import DATA from "../public/data/data";
import "./allsales.css";

const Allsales = () => {
  return (
    <div className="mx-[73px] mt-[41px] bg-[white]">
      <div>
        <p className="text-[#B607A4] font-medium text-[40px]">All Sales</p>
      </div>
      <div className="grid gap-[32px] grid-cols-4 product-container mt-[28px]">
        {DATA.map((res) => {
          return (
            <div
              key={res.id}
              className="max-w-[286px] rounded-[24px] p-[23px] bg-[#F8F8F8] slides_items"
            >
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={res.productimage}
                  className="object-cover slide_img"
                  alt=""
                />
              </div>
              <div className="mt-[24px]">
                <div>
                  <p className="text-center text-[#08AC9F] font-semibold">
                    {res.productname}
                  </p>
                  <p className="text-center font-medium leading-[20px] mt-[3px] text-[#9F9F9F]">
                    {res.productdesc}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-[16px] gap-[4px]">
                  <span className="text-[#9F9F9F] font-semibold">
                    ${res.price}
                  </span>
                  <button className="text-center align-middle add_to_cart py-[10px] px-[20px] font-medium text-white bg-[#08AC9F] rounded-[40px] border-[2px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allsales;
