
import ProductItem from "./index";

function ProductByCate({item,products, selectCateID}) {
    return (
        <div
        className={`tab-pane fade ${selectCateID === item._id ? 'show active' : ''}`} // So sánh với _id để xác định nội dung của tab nào cần hiển thị
        id={"nav-" + item.CateName}
        role="tabpanel"
        aria-labelledby={"nav-" + item.CateName}
      >
        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {products?.map((item) => (
                    <ProductItem item={item} key={item._id} />
                  ))}
        </div>
      </div>
      );
}

export default ProductByCate;