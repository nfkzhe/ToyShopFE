import React, { useRef, useMemo } from 'react';
import ProductByCate from '~/components/Product/ProductByCate';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/ProductTabs.css';

function ProductTabs({ categories, selectedCategoryId, handleTabClick, products }) {
    // ✅ Tạo ref cho mỗi category id
    const nodeRefs = useMemo(() => {
        const refs = {};
        categories?.forEach((item) => {
            refs[item._id] = React.createRef();
        });
        return refs;
    }, [categories]);

    return (
        <section className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bootstrap-tabs product-tabs">
                            <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                                <h3>Sản phẩm theo danh mục</h3>
                                <nav>
                                    {/* Desktop: tab ngang */}
                                    <div className="nav nav-tabs d-none d-md-flex" role="tablist">
                                        {categories?.map((item) => (
                                            <a
                                                key={item._id}
                                                href="#"
                                                className={`nav-link text-uppercase fs-6 ${
                                                    selectedCategoryId === item._id ? 'active' : ''
                                                }`}
                                                onClick={() => handleTabClick(item._id)}
                                                role="tab"
                                                aria-selected={selectedCategoryId === item._id ? 'true' : 'false'}
                                            >
                                                {item.CateName}
                                            </a>
                                        ))}
                                    </div>

                                    {/* Mobile: dropdown */}
                                    <div className="d-block d-md-none mt-3">
                                        <select
                                            className="form-select"
                                            value={selectedCategoryId || ''}
                                            onChange={(e) => handleTabClick(e.target.value)}
                                        >
                                            {categories?.map((item) => (
                                                <option key={item._id} value={item._id}>
                                                    {item.CateName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </nav>
                            </div>

                            <TransitionGroup component={null}>
                                {categories?.map((item) =>
                                    selectedCategoryId === item._id ? (
                                        <CSSTransition
                                            key={item._id}
                                            nodeRef={nodeRefs[item._id]}
                                            timeout={300}
                                            classNames="fade-tab"
                                            unmountOnExit
                                        >
                                            <div ref={nodeRefs[item._id]} className="w-100">
                                                <ProductByCate
                                                    item={item}
                                                    selectCateID={selectedCategoryId}
                                                    products={products}
                                                />
                                            </div>
                                        </CSSTransition>
                                    ) : null,
                                )}
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductTabs;
