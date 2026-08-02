import React, { useState } from "react";

function ProductCard({ product, cart, addToCart }) {
  const [likes, setLikes] = useState(12);
  const [liked, setLiked] = useState(false);

  function handleLiked() {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }
  const isInCart = cart.some((item) => item.id === product.id);
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>KSh {product.price}</p>
      <p>⭐{product.rating}</p>
      {!product.inStock && <p>❌Out of Stock</p>}
      {/* <p>🛒{product.cart}</p> */}

      <button
        onClick={handleLiked}
        aria-label={liked ? "Unlike product" : "Like product"}
      >
        {liked ? "❤️" : "🤍"} {likes}
      </button>

      <button
        onClick={() => addToCart(product)}
        disabled={isInCart || !product.inStock}
      >
        {!product.inStock
          ? "Out of Stock"
          : isInCart
            ? "Added ✓"
            : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
