import "./hereo.css";

const Hereo = () => {
  return (
    <div className="hereo flex items-center justify-center mt-[50px]">
      <div className="hereo-content max-w-[1219px] flex items-center justify-center">
        <div className="hereo-text">
          <div className="leading-[70px]">
            <div className="abstract-text text-nowrap text-[#B607A4] font-semibold text-[60px]">
              ..innovative tools
            </div>
            <div className="text-nowrap text-black font-semibold text-[60px]">
              for today’s learners.
            </div>
          </div>
          <div className="text-[#6A6A6A] mt-[28px] text-[18px]">
            cutting-edge resources designed to inspire and empower your
            educational journey.
          </div>
          <button className="bg-[#08AC9F] text-white py-[16px] px-[52px] border-[2px] border-[white] add_cart_btn rounded-[67px]">
            View Cart
          </button>
        </div>
        <div className="hereo-img">
          <img src="../images/hereo-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hereo;
