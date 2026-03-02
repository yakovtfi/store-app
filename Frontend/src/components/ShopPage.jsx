import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import ProductCard from "./ProductCard";

const ShopPage = () => {
  const products = useStore((state) => state.products);
  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);

  const cartItems = useMemo(
    () => new Set(Object.keys(cart)),
    [cart]
  );

  return (
    <section className="page">
      <div className="hero">
        <p className="eyebrow">Exercise idea</p>
        <h1>Starter Store</h1>
        <p className="hero-body">
          Use global state to keep the cart in sync everywhere. The products come
          from a JSON file, and both the shop page and cart page read the same
          Zustand store.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/cart">
            View cart
          </Link>
          <span className="hero-note">Scroll to see the catalog</span>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart={cartItems.has(String(product.id))}
            onAdd={() => addToCart(product.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopPage;
