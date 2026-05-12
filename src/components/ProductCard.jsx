export default function ProductCard({ product, addToCart }) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.category}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}