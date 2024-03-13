import React from "react";
import ProductItem from "../../components/product-item";
import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div className="product-list">
      {products?.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <ProductItem product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
