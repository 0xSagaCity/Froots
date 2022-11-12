export default function PaymentForm({
  paymentInfo,
  setPaymentInfo,
  stages,
  setCheckoutStage,
  setOrderSuccess,
  stagesComplete,
  setStagesComplete,
}) {
  const payment = (evt) => {
    evt.preventDefault();
    setCheckoutStage(stages[0]);
    setOrderSuccess(true);
    setStagesComplete(stagesComplete.concat(stages[2]));
  };
  return (
    <div className="PaymentFormContainer">
      <form className="PaymentForm" onSubmit={payment}>
        <label htmlFor="card-number">
          Card Number{" "}
          <input
            type="number"
            value={paymentInfo.cardNum}
            required
            placeholder="4713656391499240"
            onChange={(e) => {
              setPaymentInfo({
                ...paymentInfo,
                cardNum: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="card-name">
          Card Holder Name{" "}
          <input
            type="text"
            value={paymentInfo.holderName}
            required
            placeholder="John Doe"
            onChange={(e) => {
              setPaymentInfo({
                ...paymentInfo,
                holderName: e.target.value,
              });
            }}
          />
        </label>
        <div className="PaymentRow">
          <label htmlFor="expiry-date" className="PaymentRowElder">
            Card Expiry Date{" "}
            <input
              type="date"
              value={paymentInfo.expiryDate}
              required
              onChange={(e) => {
                setPaymentInfo({
                  ...paymentInfo,
                  expiryDate: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="cvv-number">
            CVV{" "}
            <input
              type="number"
              value={paymentInfo.cvvNum}
              required
              placeholder="362"
              onChange={(e) => {
                setPaymentInfo({
                  ...paymentInfo,
                  cvvNum: e.target.value,
                });
              }}
            />
          </label>
        </div>
        <button type="submit" className="SubmitButton">
          Pay and Proceed
        </button>
      </form>
    </div>
  );
}
