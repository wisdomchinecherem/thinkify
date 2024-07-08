import "./categories.css";

const Categories = () => {
  return (
    <div className="categories pb-[105px]">
      <div className="heading text-[#B607A4] font-medium text-[40px] pt-[44px] pl-[89px]">Categories</div>
      <div className="flex items-center mt-[63px] justify-center">
        <div className="cards">
          {/* first card */}
          <div className="card flex items-center justify-center bg-[#657DAC]">
            <img
              className="w-[110px]"
              src="../images/categories_cart.png"
              alt=""
            />
            <div className="ml-[24px] text-[30px] leading-[30px] font-semibold text-white">
              <p>Bulk</p>
              <p>Sales</p>
            </div>
          </div>
          {/* second card */}
          <div className="card flex items-center justify-center bg-[#F59C05]">
            <img className="w-[80px]" src="../images/discount.png" alt="" />
            <div className="ml-[24px] text-[30px] leading-[30px] font-semibold text-white">
              <p>Discount</p>
              <p>Sales</p>
            </div>
          </div>
          {/* third card */}
          <div className="card flex items-center justify-center bg-[#B607A4]">
            <img className="w-[110px]" src="../images/specials.png" alt="" />
            <div className="ml-[24px] text-[30px] leading-[30px] font-semibold text-white">
              <p>Special</p>
              <p>Sales</p>
            </div>
          </div>
          {/* fourth card */}
          <div className="card flex items-center justify-center bg-[#08AC9F]">
            <img className="w-[110px]" src="../images/new.png" alt="" />
            <div className="ml-[24px] text-[30px] leading-[30px] font-semibold text-white">
              <p>New</p>
              <p>Arrivals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
