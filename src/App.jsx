import ArrivalsCarousel from "./components/carousels/ArrivalsCarousel";
import BulkSalesCarousel from "./components/carousels/BulkSalesCarousel";
import DiscountSalesCarousel from "./components/carousels/DiscountSalesCarousel";
import SpecialSalesCarousel from "./components/carousels/SpecialSalesCarousel";
import Categories from "./components/Categories";
import Hereo from "./components/Hereo";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Allsales from "./Allsales.jsx";

const App = () => {
  const _isPage = true;
  return (
    <>
      <div className="app">
        {_isPage ? (
          <div>
            <Navbar />
            <Hereo />
            <Search />
            <div className="contain-element">
              <Categories />
              <ArrivalsCarousel />
              <BulkSalesCarousel />
              <DiscountSalesCarousel />
              <SpecialSalesCarousel />
            </div>
            <Footer />
          </div>
        ) : (
          <Allsales />
        )}
      </div>
    </>
  );
};

export default App;
