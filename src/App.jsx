// App.jsx
import { useState } from "react";
import Categories from "./components/Categories";
import Hereo from "./components/Hereo";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Allsales from "./Allsales.jsx";
import DATA from "../public/data/data.js";
import Cart from "./components/Cart.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hereo />
                  <Search />
                  <div className="contain-element">
                    <Categories onCategoryChange={handleCategoryChange} />
                    <div className="fixed z-[20] bg-green-600 right-[0]">
                      <img src="../images/cart-vector.png" alt="" />
                    </div>
                    <Allsales
                      data={filterProducts(selectCategory)}
                      selectedCategory={selectCategory}
                    />
                  </div>
                  <Footer />
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
