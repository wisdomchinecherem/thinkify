import PropTypes from "prop-types";
import "./categories.css";

const Categories = ({ onCategoryChange }) => {
  return (
    <div className="categories pb-[105px]">
      <div className="flex navigate_cover items-center mt-[63px] justify-center">
        <div className="cards">
          {/* first card */}
          <div
            onClick={() => onCategoryChange("Bulk Sales")}
            className="card flex items-center justify-center bg-[#657DAC]"
          >
            <img
              className="w-[110px] navigate_sales_img"
              src="../images/categories_cart.png"
              alt=""
            />
            <div className="ml-[24px] text-[30px] leading-[30px] navigate_sales font-semibold text-white">
              <p>Bulk</p>
              <p>Sales</p>
            </div>
          </div>
          {/* second card */}
          <div
            onClick={() => onCategoryChange("Discount Sales")}
            className="card flex items-center justify-center bg-[#F59C05]"
          >
            <img className="w-[80px]" src="../images/discount.png" alt="" />
            <div className="ml-[24px] text-[30px] leading-[30px] navigate_sales font-semibold text-white">
              <p>Discount</p>
              <p>Sales</p>
            </div>
          </div>
          {/* third card */}
          <div
            onClick={() => onCategoryChange("Special Sales")}
            className="card flex items-center justify-center bg-[#B607A4]"
          >
            <img
              className="w-[110px] navigate_sales_img"
              src="../images/specials.png"
              alt=""
            />
            <div className="ml-[24px] text-[30px] leading-[30px] navigate_sales font-semibold text-white">
              <p>Special</p>
              <p>Sales</p>
            </div>
          </div>
          {/* fourth card */}
          <div
            onClick={() => onCategoryChange("New Arrivals")}
            className="card flex items-center justify-center bg-[#08AC9F]"
          >
            <img
              className="w-[110px] navigate_sales_img"
              src="../images/new.png"
              alt=""
            />
            <div className="ml-[24px] text-[30px] leading-[30px] navigate_sales font-semibold text-white">
              <p>New</p>
              <p>Arrivals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default Categories;
