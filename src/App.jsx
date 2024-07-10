// App.jsx
import { useState } from "react";
import Categories from "./components/Categories";
import Hereo from "./components/Hereo";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Allsales from "./Allsales.jsx";
import DATA from "../public/data/data.js";

const App = () => {
  const [selectCategory, setSelectCategory] = useState("All Sales");

  const filterProducts = (category) => {
    if (category === "All Sales") {
      return DATA;
    }
    return DATA.filter((res) => res.category === category);
  };

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  };

  const _isProductPage = true;
  
  return (
    <>
      <div className="app">
        {_isProductPage ? (
          <div>
            <Navbar />
            <Hereo />
            <Search />
            <div className="contain-element">
              <Categories onCategoryChange={handleCategoryChange} />
              <div className="fixed z-[20] bg-green-600 right-[0]">
                <img src="../images/cart-vector.png" alt="" />
              </div>
              <Allsales data={filterProducts(selectCategory)} selectedCategory={selectCategory} />
            </div>
            <Footer />
          </div>
        ) : (
          <Allsales data={filterProducts(selectCategory)} selectedCategory={selectCategory} />
        )}
      </div>
    </>
  );
};

export default App;
