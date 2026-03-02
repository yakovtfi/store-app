const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const handleChange = (event) => {
    const nextValue = Number(event.target.value);
    if (Number.isNaN(nextValue)) return;
    onQuantityChange(nextValue);
  };

  return (
    <article className="cart-item">
      <div>
        <p className="card-category">{item.category}</p>
        <h3>{item.name}</h3>
        <p className="cart-description">{item.description}</p>
      </div>
      <div className="cart-item-controls">
  <span className="cart-price">{item.price}</span>
        <input
          className="quantity-input"
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleChange}
        />
        <button className="ghost-button" type="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </article>
  );
};

export default CartItem;
