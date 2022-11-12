export default function ShippingForm({
  shippingAddress,
  setShippingAddress,
  setCheckoutStage,
  stages,
  stagesComplete,
  setStagesComplete,
}) {
  const shipFruits = (evt) => {
    evt.preventDefault();
    setCheckoutStage(stages[1]);
    setStagesComplete(stagesComplete.concat(stages[0]));
  };

  return (
    <div className="ShippingFormContainer">
      <form className="ShippingForm" onSubmit={shipFruits}>
        <label htmlFor="name">
          Full Name{" "}
          <input
            type="text"
            value={shippingAddress.name}
            required
            minLength="3"
            placeholder="John Doe"
            onChange={(e) => {
              setShippingAddress({
                ...shippingAddress,
                name: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="address">
          Street Address{" "}
          <input
            type="text"
            minLength="3"
            required
            value={shippingAddress.address}
            placeholder="688 Hickory Street"
            onChange={(e) => {
              setShippingAddress({
                ...shippingAddress,
                address: e.target.value,
              });
            }}
          />
        </label>
        <div className="ShippingRow">
          <label htmlFor="city" className="ShippingRowElder">
            Town/City{" "}
            <input
              type="text"
              value={shippingAddress.city}
              required
              minLength="3"
              placeholder="West Valley City"
              onChange={(e) => {
                setShippingAddress({
                  ...shippingAddress,
                  city: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="pin">
            Pin Code{" "}
            <input
              type="number"
              value={shippingAddress.pin}
              minLength="5"
              required
              placeholder="84120"
              onChange={(e) => {
                setShippingAddress({
                  ...shippingAddress,
                  pin: e.target.value,
                });
              }}
            />
          </label>
        </div>
        <label htmlFor="email">
          Email address{" "}
          <input
            type="email"
            value={shippingAddress.email}
            required
            placeholder="johndoe@mail.com"
            onChange={(e) => {
              setShippingAddress({
                ...shippingAddress,
                email: e.target.value,
              });
            }}
          />
        </label>
        <button type="submit" className="SubmitButton">
          Ship my froots
        </button>
      </form>
    </div>
  );
}
