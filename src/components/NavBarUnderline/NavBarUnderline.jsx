import { AnimatePresence, motion } from "framer-motion"
export default function NavBarUnderline({ whenActive }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={`NavBarUnderline-${whenActive}`}
        initial={{ x: "-100%" }}
        animate={{ x: "-10%", transition: { duration: 0.4 } }}
        exit={{ x: "200%", transition: { duration: 0.4 } }}
        className="NavUnderline"
      ></motion.div>
    </AnimatePresence>
  )
}
