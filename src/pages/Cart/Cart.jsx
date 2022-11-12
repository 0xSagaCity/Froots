import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import AnimatedLine from "../../components/AnimatedLine/AnimatedLine";
import ButtonBackground from "../../components/ButtonBackground/ButtonBackground";
import CartCardAmount from "../../components/CartCardAmount/CartCardAmount";
import CheckoutProcess from "../../components/CheckoutForm/CheckoutProcess";
import TextBigHead from "../../components/TextBigHead/TextBigHead";
import "../../styles/Cart.css";
import "../../styles/CartQueries.css";

export default function Cart({
  cartItems,
  setCartItems,
  setSectionLoaded,
  currentFruit,
}) {
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const STAGES = ["Shipping", "Summary", "Payments"];
  const [checkoutStage, setCheckoutStage] = useState(STAGES[0]);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    pin: "",
    email: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNum: "",
    expiryDate: "",
    cvvNum: "",
    holderName: "",
  });

  useEffect(() => {
    const CART_COMP = "CART_COMP";
    setSectionLoaded(CART_COMP);
  }, [setSectionLoaded]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="CartContainer"
    >
      <AnimatePresence>
        {checkoutVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="CheckoutWrapper"
            onClick={() => {
              setCheckoutVisible(false);
            }}
          >
            <CheckoutProcess
              setCheckoutVisible={setCheckoutVisible}
              checkoutStage={checkoutStage}
              setCheckoutStage={setCheckoutStage}
              cartItems={cartItems}
              setCartItems={setCartItems}
              stages={STAGES}
              shippingAddress={shippingAddress}
              setShippingAddress={setShippingAddress}
              paymentInfo={paymentInfo}
              setPaymentInfo={setPaymentInfo}
              orderSuccess={orderSuccess}
              setOrderSuccess={setOrderSuccess}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatedLine />
      <div className="CartRightContainer">
        {cartItems.length > 0 ? (
          <>
            <div>
              <TextBigHead
                currentFruit={currentFruit}
                title="Froots you have"
                subTitle="in your cart."
              />
              <div className="CheckoutContainer">
                <button
                  onClick={() => {
                    setCartItems([]);
                  }}
                  className="RemoveAllButton"
                >
                  Remove all froots?
                </button>
                <div
                  onClick={() => {
                    setCheckoutVisible(!checkoutVisible);
                  }}
                  className="CheckoutButtonContainer"
                >
                  <button className="CheckoutButton">
                    Checkout <CgArrowLongRight />
                  </button>
                  <ButtonBackground className="ButtonSpiralBackground" />
                </div>
              </div>
            </div>
            <div className="CartCardsContainer">
              <ul>
                {cartItems.map((cartFruit, key) => (
                  <li
                    style={{
                      "--cart-card-dark-color": cartFruit.textColor,
                      "--cart-card-accent-color": cartFruit.backColor,
                    }}
                    className="CartCard"
                    key={`CartCard-${key}`}
                  >
                    <div className="CartCardBackgroundCircle"></div>
                    <div className="CartCardElements">
                      <div className="CartCardTextWrapper">
                        <span className="CartCardName">{cartFruit.name}</span>
                        <span className="CartCardCalories">
                          {cartFruit.nutrition.energy * cartFruit.cartQuantity}{" "}
                          calories
                        </span>
                      </div>
                      <CartCardAmount
                        fruit={cartFruit}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                      />
                      <button
                        onClick={() => {
                          setCartItems(
                            cartItems.filter((item) => cartFruit.id !== item.id)
                          );
                        }}
                        className="RemoveItemButton"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            className="NoItemWarningContainer"
          >
            <h3 className="NoItemWarning">No froots in cart.</h3>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
