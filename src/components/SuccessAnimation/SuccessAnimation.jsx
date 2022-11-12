import { motion } from "framer-motion";

export default function SuccessAnimation({ setCartItems, setCheckoutVisible }) {
  return (
    <div className="SuccessAnimationContainer">
      <svg className="Checkmark" viewBox="0 0 52 52">
        <motion.circle
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1 },
          }}
          className="checkmark__circle"
          cx="26"
          fill="#83F28F"
          cy="26"
          r="25"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, transition: { duration: 1, delay: 0.4 } }}
          onAnimationComplete={() => {
            setCartItems([]);
						setTimeout(() => {
							setCheckoutVisible(false)
						}, 2000);
          }}
          className="checkmark__check"
          stroke="#ffffff"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      <h3>Your froots are shipped!</h3>
    </div>
  );
}
