import React, { useEffect, useState } from "react";
// import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 6500,
      rating: 4.5,
      inStock: true,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 8900,
      rating: 4.8,
      inStock: false,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 3200,
      rating: 4.3,
      inStock: true,
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 2400,
      rating: 4.1,
      inStock: true,
    },
    {
      id: 5,
      name: "Laptop",
      price: 35000,
      rating: 4.8,
      inStock: true,
    },
    {
    id: 6,
      name: "Phone",
      price: 12000,
      rating: 5,
      inStock: false,
    },
    {
      id: 7,
      name: "Tv",
      price: 43000,
      rating: 4.4,
      inStock: true,
    },
    {
      id: 8,
      name: "Mini Keyboard",
      price: 10000,
      rating: 4.1,
      inStock: false,
    },
    // {
    //   id: 9,
    //   name: "Desktop",
    //   price: 50000,
    //   rating: 4.1,
    //   inStock: true,
    // },
    // {
    //   id: 10,
    //   name: "Study Table",
    //   price: 12000,
    //   rating: 4.6,
    //   inStock: true,
    // },
  ];

  const [searchItem, setSearchItem] = useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
  }
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchItem.toLowerCase()),
  );

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>
      <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
      <h2>🛒 Cart Items: {cart.length}</h2>

      <ProductList
        products={filteredProducts}
        cart={cart}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
