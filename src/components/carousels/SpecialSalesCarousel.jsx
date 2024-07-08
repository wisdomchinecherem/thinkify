import "swiper/css";
import "swiper/css/navigation";
import "./arrivalscarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const SpecialSalesCarousel = () => {
  return (
    <div className="bg-white mt-[80px] pt-[44px] pb-[34px] pl-[89px] carousel_container">
      <div className="flex items-center text-[#9F9F9F] font-medium text-[27px] justify-between">
        <p className="text-[#B607A4] font-medium text-[40px]">Special Sales</p>
        <span className="mr-[101px] cursor-pointer">See All</span>
      </div>
      <Swiper
        className="mt-[53px] pl-[12px] py-[20px]"
        slidesPerView={3}
        breakpoints={{}}
        spaceBetween={44}
        navigation={true}
        modules={[Navigation]}
      >
        {/* first slide */}
        <SwiperSlide>
          <div className="max-w-[286px] rounded-[24px] p-[23px] bg-[#F8F8F8] slides_items">
            <div className="overflow-hidden rounded-[32px]">
              <img
                src="../images/products/product-hard-cover.png"
                className="object-cover slide_img"
                alt=""
              />
            </div>
            <div className="mt-[24px]">
              <div>
                <p className="text-center text-[#08AC9F] font-semibold">
                  Hard-Cover Books
                </p>
                <p className="text-center font-medium leading-[20px] mt-[3px] text-[#9F9F9F]">
                  Thick cover books for fun writing experience. Never worry
                  about water spill.
                </p>
              </div>
              <div className="flex items-center justify-between mt-[16px] gap-[4px]">
                <span className="text-[#9F9F9F] font-semibold">$35</span>
                <button className="text-center align-middle add_to_cart py-[10px] px-[20px] font-medium text-white bg-[#08AC9F] rounded-[40px] border-[2px]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* second slide */}
        <SwiperSlide>
          <div className="max-w-[286px] rounded-[24px] p-[23px] bg-[#F8F8F8] slides_items">
            <div className="overflow-hidden rounded-[32px]">
              <img
                src="../images/products/product-water-proof-bag.png"
                className="object-cover slide_img"
                alt=""
              />
            </div>
            <div className="mt-[24px]">
              <div>
                <p className="text-center text-[#08AC9F] font-semibold">
                  Waterproof Bags
                </p>
                <p className="text-center font-medium leading-[20px] mt-[3px] text-[#9F9F9F]">
                  Waterproof school bags for your next schooling adventure.
                  Explore now.
                </p>
              </div>
              <div className="flex items-center justify-between mt-[16px] gap-[4px]">
                <span className="text-[#9F9F9F] font-semibold">$55</span>
                <button className="text-center align-middle add_to_cart py-[10px] px-[20px] font-medium text-white bg-[#08AC9F] rounded-[40px] border-[2px]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* third slide */}
        <SwiperSlide>
          <div className="max-w-[286px] rounded-[24px] p-[23px] bg-[#F8F8F8] slides_items">
            <div className="overflow-hidden rounded-[32px]">
              <img
                src="../images/products/product-screen-laptop.png"
                className="object-cover slide_img"
                alt=""
              />
            </div>
            <div className="mt-[24px]">
              <div className="overflow-hidden">
                <p className="text-center text-[#08AC9F] font-semibold">
                  3-screen Laptop
                </p>
                <p className="text-center font-medium leading-[20px] mt-[3px] text-[#9F9F9F]">
                  Different screens for multi-kid usage. Explore our different
                  options.
                </p>
              </div>
              <div className="flex items-center justify-between mt-[16px] gap-[4px]">
                <span className="text-[#9F9F9F] font-semibold">$450</span>
                <button className="text-center align-middle add_to_cart py-[10px] px-[20px] font-medium text-white bg-[#08AC9F] rounded-[40px] border-[2px]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* fourth slide */}
        <SwiperSlide>
          <div className="max-w-[286px] rounded-[24px] p-[23px] bg-[#F8F8F8] slides_items">
            <div className="overflow-hidden rounded-[32px]">
              <img
                src="../images/products/product-screen-laptop.png"
                className="object-cover slide_img"
                alt=""
              />
            </div>
            <div className="mt-[24px]">
              <div className="overflow-hidden">
                <p className="text-center text-[#08AC9F] font-semibold">
                  3-screen Laptop
                </p>
                <p className="text-center font-medium leading-[20px] mt-[3px] text-[#9F9F9F]">
                  Different screens for multi-kid usage. Explore our different
                  options.
                </p>
              </div>
              <div className="flex items-center justify-between mt-[16px] gap-[4px]">
                <span className="text-[#9F9F9F] font-semibold">$450</span>
                <button className="text-center align-middle add_to_cart py-[10px] px-[20px] font-medium text-white bg-[#08AC9F] rounded-[40px] border-[2px]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SpecialSalesCarousel;
