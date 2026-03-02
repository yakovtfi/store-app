import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import CartItem from "./CartItem";

const CartPage = () => {
  const products = useStore((state) => state.products);
  const cart = useStore((state) => state.cart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  const items = useMemo(() => {
    return Object.entries(cart)
      .map(([id, quantity]) => {
        const product = products.find((entry) => entry.id === Number(id));
        if (!product) return null;
        return { ...product, quantity };
      })
      .filter(Boolean);
  }, [cart, products]);

  const totals = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    return { itemCount, subtotal };
  }, [items]);

  if (items.length === 0) {
    return (
      <section className="page">
        <div className="empty-state">
          <h1>Your cart is empty</h1>
          <p>Pick something from the starter catalog to get going.</p>
          <Link className="primary-button" to="/">
            Back to shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <div className="cart-header">
        <div>
          <p className="eyebrow">Cart</p>
          <h1>Ready to check out?</h1>
          <p className="hero-body">
            Keep quantities in sync with the shop page thanks to Zustand global
            state.
          </p>
        </div>
        <button className="ghost-button" type="button" onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <div className="cart-grid">
        <div className="cart-items">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => removeFromCart(item.id)}
              onQuantityChange={(quantity) =>
                updateQuantity(item.id, quantity)
              }
            />
          ))}
        </div>
        <aside className="cart-summary">
          <h2>Summary</h2>
          <div className="summary-row">
            <span>Items</span>
            <span>{totals.itemCount}</span>
          </div>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{totals.subtotal}</span>
          </div>
          <button className="primary-button" type="button">
            Continue to checkout
          </button>
          <p className="summary-note">
            This is a demo checkout button for the exercise.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
