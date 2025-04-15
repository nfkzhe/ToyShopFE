import "swiper/css";
import { useEffect, useState } from "react";
import {
  getAllCategories,
  getProductsByCategory,
  getTopSold,
} from "~/untils/ApiHelper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBox from "~/components/Product/ProductBox";
import ProductTabs from "~/components/Product/ProductTabs";

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [topSold, setTopSold] = useState([]);

  const getTopSoldProducts = async () => {
    try {
      const response = await getTopSold();
      setTopSold(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getCategories = async () => {
    try {
      const response = await getAllCategories();
      console.log(response.data);
      
      // Kiểm tra nếu response.data là một mảng
      if (Array.isArray(response.data)) {
        setCategories(response.data);
        setSelectedCategoryId(response.data[0]._id);
      } else {
        console.error('Categories is not an array');
      }
    } catch (error) {
      console.log(error);
    }
};

  const getProducts = async (categoryId) => {
    try {
      const response = await getProductsByCategory(categoryId);
      setProducts(response.data);
      console.log("Fetched products:", response.data); // Log fetched products
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    getTopSoldProducts();
    return () => {}; // cleanup
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      getProducts(selectedCategoryId);
    }
    return () => {}; // cleanup
  }, [selectedCategoryId]);

  const handleTabClick = (id) => {
    setSelectedCategoryId(id);
  };

  return (
    <div>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasSearch"
        aria-labelledby="Search"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Search</span>
            </h4>
            <form
              role="search"
              action="index.html"
              method="get"
              className="d-flex mt-3 gap-0"
            >
              <input
                className="form-control rounded-start rounded-0 bg-light"
                type="email"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
              />
              <button
                className="btn btn-dark rounded-end rounded-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <ProductTabs
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        handleTabClick={handleTabClick}
        products={products}
      />
      <ProductBox topProducts={topSold} products={products} />
    </div>
  );
}

export default Home;
