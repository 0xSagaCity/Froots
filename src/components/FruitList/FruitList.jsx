import { motion, AnimatePresence } from "framer-motion";
import fruits from "../../data/fruits";
import "./FruitList.css";

export default function FruitList({ currentFruit, setCurrentFruit }) {
  const shopListVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.08 },
    },
    hideBack: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const shopListItemVariant = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, x: { duration: 1 } },
    },
  };
  return (
    <AnimatePresence>
      <motion.ul
        variants={shopListVariant}
        initial="hidden"
        animate="visible"
        exit="hideBack"
        className="FruitNameList"
      >
        {fruits.map((fruit, key) => {
          const isCurrentFruit = currentFruit.index === fruit.index;
          return (
            <li
              key={`FruitNameContainer-${key}`}
              className="FruitNameContainer"
            >
              <AnimatePresence>
                {isCurrentFruit && (
                  <motion.div
                    style={{}}
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{
                      backgroundColor: currentFruit.backColor,
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.8 },
                    }}
                    exit={{
                      opacity: 0,
                      x: "100%",
                      transition: { duration: 0.4 },
                    }}
                    className="FruitNameBackground"
                  ></motion.div>
                )}
              </AnimatePresence>
              <motion.button
                animate={{
                  color: isCurrentFruit ? currentFruit.textColor : "#ccc",
                  transition: { duration: 0.6 },
                }}
                onClick={() => {
                  setCurrentFruit(fruits[key]);
                }}
                tabIndex={0}
                variants={shopListItemVariant}
                className={
                  isCurrentFruit
                    ? "FruitName CurrentFruitName"
                    : "FruitName NotCurrentFruitName"
                }
              >
                {fruit.name}
              </motion.button>
            </li>
          );
        })}
      </motion.ul>
    </AnimatePresence>
  );
}
