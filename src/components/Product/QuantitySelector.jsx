function QuantitySelector({ quantity, onIncrement, onDecrement, onChange }) {
    return (
      <div className="input-group product-qty">
        <span className="input-group-btn">
          <button
            type="button"
            className="quantity-left-minus btn btn-danger btn-number"
            onClick={onDecrement}
          >
            <svg width="16" height="16">
              <use xlinkHref="#minus"></use>
            </svg>
          </button>
        </span>
        <input
          type="text"
          className="form-control input-number"
          value={quantity}
          onChange={onChange}
        />
        <span className="input-group-btn">
          <button
            type="button"
            className="quantity-right-plus btn btn-success btn-number"
            onClick={onIncrement}
          >
            <svg width="16" height="16">
              <use xlinkHref="#plus"></use>
            </svg>
          </button>
        </span>
      </div>
    );
  }
  
  export default QuantitySelector;
  