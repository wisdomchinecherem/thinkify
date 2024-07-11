const Ads = () => {
  return (
    <div>
      <div className="more_like_this mt-[84px] mb-[50px] bg-white p-[20px]">
        <p className="text-[#B607A4] text-[30px] font-medium ml-[30px] pb-[20px] ad_text">
          More Like This
        </p>
        <div className="products-scroll overflow-auto py-[20px]">
          <div className="product_ad flex items-center gap-[16px]">
            <div className="max-w-[286px] rounded-[24px] p-[23px] bg-[#F8F8F8] slides_items">
              <div className="overflow-hidden rounded-[32px] max-h-[166.86px]">
                <img
                  src={"./images/products/product-fancybag.png"}
                  className="object-cover slide_img w-full"
                  alt=""
                />
              </div>
              <div className="mt-[24px]">
                <div>
                  <p className="text-center text-[#08AC9F] font-semibold">
                    Fancy Bag
                  </p>
                  <p className="text-center font-medium leading-[20px] mt-[3px] text-[#9F9F9F]">
                    Thick kid’s bag for fun carrying experience. With a roller
                    and different colours.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-[16px] gap-[4px]">
                  <span className="text-[#9F9F9F] font-semibold">$45</span>
                  <button className="text-center whitespace-nowrap hover:bg-transparent hover:border-[#08AC9F] cursor-pointer align-middle add_to_cart py-[10px] px-[20px] font-medium text-white bg-[#08AC9F] hover:text-[#08AC9F] transition rounded-[40px] border-[2px] text-[15px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-[286px] rounded-[24px] p-[23px] bg-[#F8F8F8] slides_items">
              <div className="overflow-hidden rounded-[32px] max-h-[166.86px]">
                <img
                  src={"./images/products/product-lunchbox.png"}
                  className="object-cover slide_img w-full"
                  alt=""
                />
              </div>
              <div className="mt-[24px]">
                <div>
                  <p className="text-center text-[#08AC9F] font-semibold">
                    Lunch Box
                  </p>
                  <p className="text-center font-medium leading-[20px] mt-[3px] text-[#9F9F9F]">
                    Lunch bok with double compartments. All your kid’s school
                    meal in one place.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-[16px] gap-[4px]">
                  <span className="text-[#9F9F9F] font-semibold">$35</span>
                  <button className="text-center whitespace-nowrap hover:bg-transparent hover:border-[#08AC9F] cursor-pointer align-middle add_to_cart py-[10px] px-[20px] font-medium text-white bg-[#08AC9F] hover:text-[#08AC9F] transition rounded-[40px] border-[2px] text-[15px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-[286px] rounded-[24px] p-[23px] bg-[#F8F8F8] slides_items">
              <div className="overflow-hidden rounded-[32px] max-h-[166.86px]">
                <img
                  src={"./images/products/product-bag.png"}
                  className="object-cover slide_img w-full"
                  alt=""
                />
              </div>
              <div className="mt-[24px]">
                <div>
                  <p className="text-center text-[#08AC9F] font-semibold">
                    School Bag
                  </p>
                  <p className="text-center font-medium leading-[20px] mt-[3px] text-[#9F9F9F]">
                    School bag in different designs and colours. Explore our
                    different options.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-[16px] gap-[4px]">
                  <span className="text-[#9F9F9F] font-semibold">$150</span>
                  <button className="text-center whitespace-nowrap hover:bg-transparent hover:border-[#08AC9F] cursor-pointer align-middle add_to_cart py-[10px] px-[20px] font-medium text-white bg-[#08AC9F] hover:text-[#08AC9F] transition rounded-[40px] border-[2px] text-[15px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
