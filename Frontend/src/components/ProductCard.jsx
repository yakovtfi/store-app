const ProductCard = ({ product, inCart, onAdd }) => {
  return (
    <article className="card">
      <span className="card-category">{product.category}</span>
      <h2 className="card-title">{product.name}</h2>
      <p className="card-description">{product.description}</p>
      <div className="card-meta">
        <span className="card-price">{product.price}</span>
        <span className={`card-status ${inCart ? "in" : "out"}`}>
          {inCart ? "In cart" : "Not in cart"}
        </span>
      </div>
      <button
        className="secondary-button"
        type="button"
        onClick={onAdd}
      >
        Add to cart
      </button>
    </article>
  );
};

export default ProductCard;
