import { motion, AnimatePresence } from "framer-motion"
import FruitList from "../FruitList/FruitList"

export default function MobileMenu({
  fruitListOpen,
  currentFruit,
  setCurrentFruit,
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{
          x: fruitListOpen ? 0 : "-100%",
          transition: { duration: 0.4 },
        }}
        exit={{ x: "-100%", transition: { duration: 0.4 } }}
        key={`FruitNameList-${fruitListOpen}`}
        className="MobileMenu"
      >
        {fruitListOpen && (
          <FruitList
            currentFruit={currentFruit}
            setCurrentFruit={setCurrentFruit}
            fruitListOpen={fruitListOpen}
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
