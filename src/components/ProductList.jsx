import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products,addToCart,cart}) {
  if(products.length === 0){
    return <h2>No products found.</h2>;
  }
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}

        />
      ))}
    </div>
  );
}

export default ProductList;
