
import { useEffect, useState } from "react";
import ProductItem from "../../components/Product/index";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "~/untils/ApiHelper";

function ProductByCate() {
    const [products, setProducts] = useState([]);
    const categoryId = useParams().id;
    const getProducts = async (categoryId) => {
        try {
            const response = await getProductsByCategory(categoryId);
            if (response && response.data)
                console.log(response.data)
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProducts(categoryId)
        return () => { }; // cleanup
    }, []);
    console.log("cateId", categoryId)
    console.log("product", products)
    return (
            <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {products?.map((item) => (
                    <ProductItem item={item} key={item._id} />
                ))}
            </div>
    );
}

export default ProductByCate;