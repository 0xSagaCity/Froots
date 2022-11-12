import "./OrderSummary.css";
export default function OrderSummary({
  cartItems,
  setCheckoutStage,
  stages,
	stagesComplete,
	setStagesComplete,
}) {
  const totalPrice = cartItems.reduce(
    (total, cartItem) =>
      parseInt(total) +
      parseInt(cartItem.price) * parseInt(cartItem.cartQuantity),
    0
  );
  return (
    <div className="OrderSummaryContainer">
      <h3 className="SummaryTitle">Order Summary</h3>
      <div className="OrderItemsContainer">
        {cartItems.map((item, key) => {
          return (
            <div className="OrderItem" key={`OrderItem-${key}`}>
              <span className="OrderItemQuantity">
                {item.name} [
                {item.nutrition.unit === "fruit"
                  ? item.cartQuantity
                  : item.cartQuantity * 100}{" "}
                {item.nutrition.unit}]
              </span>
              <span className="OrderItemPrice">
                {item.cartQuantity * item.price} ₹
              </span>
            </div>
          );
        })}
        <div className="OrderTotalContainer">
          <span className="OrderTotalText">Total</span>
          <span className="OrderTotalNumber">{totalPrice} ₹</span>
        </div>
      </div>
      <button
        onClick={() => {
          setCheckoutStage(stages[2]);
					setStagesComplete(stagesComplete.concat(stages[1]));
        }}
        className="SubmitButton"
      >
        Continue to Payment
      </button>
    </div>
  );
}
