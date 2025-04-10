import React from 'react';
import ProductByCate from '~/components/Product/ProductByCate';

function ProductTabs({ categories, selectedCategoryId, handleTabClick, products }) {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="bootstrap-tabs product-tabs">
              <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                <h3>Sản phẩm theo danh mục</h3>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {categories?.map((item) => (
                      <a
                        key={item._id}
                        href="#"
                        className={`nav-link text-uppercase fs-6 ${selectedCategoryId === item._id ? "active" : ""}`}
                        onClick={() => handleTabClick(item._id)}
                        role="tab"
                        aria-controls={"nav-" + item.CateName}
                        aria-selected={selectedCategoryId === item._id ? "true" : "false"}
                      >
                        {item.CateName}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="tab-content" id="nav-tabContent">
                {categories?.map((item) => (
                  <ProductByCate
                    item={item}
                    key={item._id}
                    selectCateID={selectedCategoryId}
                    products={products}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductTabs;
