import { motion } from "framer-motion";
import {useState} from "react";
import { CgClose } from "react-icons/cg";
import CheckoutProgress from "../CheckoutProgress/CheckoutProgress";
import OrderSummary from "../OrderSummary/OrderSummary";
import PaymentForm from "../PaymentForm/PaymentForm";
import ShippingForm from "../ShippingForm/ShippingForm";
import SuccessAnimation from "../SuccessAnimation/SuccessAnimation";
import "./CheckoutProcess.css";

export default function CheckoutProcess({
  setCheckoutVisible,
  checkoutStage,
  setCheckoutStage,
  stages,
  cartItems,
  setCartItems,
  shippingAddress,
  setShippingAddress,
  paymentInfo,
  setPaymentInfo,
  orderSuccess,
  setOrderSuccess,
}) {
  const [stagesComplete, setStagesComplete] = useState([]);
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { duration: 0.4, delay: 0.2 } }}
      exit={{ x: "100%", transition: { duration: 0.4 } }}
      key={`CheckoutForm-${setCheckoutVisible}`}
      className="CheckoutProcessContainer"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        onClick={() => {
          setCheckoutVisible(false);
          setOrderSuccess(false);
          setCheckoutStage(stages[0]);
        }}
        className="CloseCheckoutForm"
      >
        <CgClose />
      </div>
      {orderSuccess ? (
        <SuccessAnimation
          setCartItems={setCartItems}
          setCheckoutVisible={setCheckoutVisible}
        />
      ) : (
        <>
          <CheckoutProgress
            checkoutStage={checkoutStage}
            stages={stages}
            setCheckoutStage={setCheckoutStage}
            stagesComplete={stagesComplete}
            setStagesComplete={setStagesComplete}
          />
          <div className="CurrentProcessContainer">
            {checkoutStage === stages[0] && (
              <ShippingForm
                shippingAddress={shippingAddress}
                setShippingAddress={setShippingAddress}
                setCheckoutStage={setCheckoutStage}
                stages={stages}
                stagesComplete={stagesComplete}
                setStagesComplete={setStagesComplete}
              />
            )}
            {checkoutStage === stages[1] && (
              <OrderSummary
                cartItems={cartItems}
                setCheckoutStage={setCheckoutStage}
                stages={stages}
                stagesComplete={stagesComplete}
                setStagesComplete={setStagesComplete}
              />
            )}
            {checkoutStage === stages[2] && (
              <PaymentForm
                paymentInfo={paymentInfo}
                setPaymentInfo={setPaymentInfo}
                stages={stages}
                stagesComplete={stagesComplete}
                setStagesComplete={setStagesComplete}
                setCheckoutStage={setCheckoutStage}
                setOrderSuccess={setOrderSuccess}
              />
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}
