import "./NavBar.css";
import "../../styles/NavBarQueries.css";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import NavBarUnderline from "../../components/NavBarUnderline/NavBarUnderline";
import { RiPlantFill } from "react-icons/ri";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { useIsSmallScreen } from "../../hooks/useMediaQuery";

export default function NavBar({
  cartItems,
  fruitListOpen,
  setFruitListOpen,
  sectionLoaded,
}) {
  const isSmallScreen = useIsSmallScreen();
  const SHOP_COMP = "SHOP_COMP";
  const navigate = useNavigate();
  return (
    <motion.div className="NavBar">
      {!(isSmallScreen && sectionLoaded === SHOP_COMP) && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="Logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <RiPlantFill title="Fruit plant" />
        </motion.span>
      )}
      <nav className="Navigation">
        <motion.ul
          layout
          transition={{ duration: 1 }}
          style={{
            justifyContent:
              isSmallScreen && sectionLoaded === SHOP_COMP
                ? "flex-start"
                : "flex-end",
          }}
          className="NavigationList"
        >
          <li className="Link">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "LinkActive" : "LinkInactive"
              }
            >
              {({ isActive }) => (
                <>
                  <span className="NavBarText">Home</span>
                  <NavBarUnderline whenActive={isActive} />
                </>
              )}
            </NavLink>
          </li>
          <li className="Link">
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive ? "LinkActive" : "LinkInactive"
              }
            >
              {({ isActive }) => (
                <>
                  <span className="NavBarText">Shop</span>
                  <NavBarUnderline whenActive={isActive} />
                </>
              )}
            </NavLink>
          </li>
          <li className="Link">
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                isActive ? "LinkActive" : "LinkInactive"
              }
            >
              {({ isActive }) => (
                <>
                  <span className="NavBarText">
                    <div className="NavCartItemContainer">
                      {cartItems.length > 0 && (
                        <motion.div className="CartItemNumber">
                          {cartItems.length}
                        </motion.div>
                      )}
                    </div>
                    Cart
                  </span>
                  <NavBarUnderline whenActive={isActive} />
                </>
              )}
            </NavLink>
          </li>
        </motion.ul>
        {isSmallScreen && sectionLoaded === SHOP_COMP && (
          <motion.span
            initial={{ opacity: 0, rotateY: "180deg" }}
            animate={{
              opacity: 1,
              rotateY: 0,
              transition: { duration: 1 },
            }}
            className="MenuIcon"
            key={`MenuIcon-${fruitListOpen}`}
            onClick={() => {
              setFruitListOpen(!fruitListOpen);
            }}
          >
            {fruitListOpen ? (
              <span>
                <VscChromeClose />
              </span>
            ) : (
              <span>
                <VscMenu />
              </span>
            )}
          </motion.span>
        )}
      </nav>
    </motion.div>
  );
}
