const Search = () => {
  return (
    <div
      style={{ background: "rgba(225, 225, 225,)" }}
      className="search max-w-[1048px] mt-[99px] border-[6px] rounded-[40px] px-[16px] py-[13px] border-[white] flex items-center my-0 mx-auto "
    >
      <input
        className="flex-1 bg-transparent border-none h-[40px] rounded-[40px] outline-none"
        type="text"
        placeholder="Search Categories, Products and Brands"
      />
      <button
        style={{ boxShadow: "0 8.76px 28px rgba(0, 93, 106, 0.32)" }}
        className="rounded-[40px] text-white bg-[#08AC9F] px-[28px] py-[12px] border-[2px] border-[white]"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
