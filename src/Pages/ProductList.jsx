import ProductCard from "../Components/Productcard";
import { products } from "../Services/Product";
import "./ProductList.css";

function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;
