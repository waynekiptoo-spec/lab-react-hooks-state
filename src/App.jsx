import { useState } from "react";

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <button
        data-testid="dark-mode-toggle"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>

      <select
        data-testid="category-filter"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
      </select>

      <h2>Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.category}</p>

            <button
              data-testid={`product-${product.id}`}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}

      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} is in your cart.
        </p>
      ))}
    </div>
  );
}