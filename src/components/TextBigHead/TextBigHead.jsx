import { motion, AnimatePresence } from "framer-motion";
import "./TextBigHead.css";

export default function TextBigHead({ title, subTitle, currentFruit }) {
  return (
    <div className="TextBigHead OverflowContainer">
      <h2 className="Title">{title}</h2>
      <span className="SubTitle OverflowContainer">
        <span>{subTitle}</span>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: "-30%",
              transition: { duration: 2, delay: 1.4 },
            }}
            exit={{ x: "100%", transition: { duration: 2 } }}
            key={`TitleUnderline-${currentFruit.index}`}
            className="TitleUnderline"
          ></motion.div>
        </AnimatePresence>
      </span>
    </div>
  );
}
