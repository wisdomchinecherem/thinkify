import ArrivalsCarousel from "./components/carousels/ArrivalsCarousel";
import BulkSalesCarousel from "./components/carousels/BulkSalesCarousel";
import DiscountSalesCarousel from "./components/carousels/DiscountSalesCarousel";
import SpecialSalesCarousel from "./components/carousels/SpecialSalesCarousel";
import Categories from "./components/Categories";
import Hereo from "./components/Hereo";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="app">
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
    </>
  );
};

export default App;
