import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLine from "../../components/AnimatedLine/AnimatedLine";
import ButtonBackground from "../../components/ButtonBackground/ButtonBackground";
import FruitList from "../../components/FruitList/FruitList";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import TextBigHead from "../../components/TextBigHead/TextBigHead";
import fruits from "../../data/fruits";
import { useIsSmallScreen } from "../../hooks/useMediaQuery";
import "../../styles/Shop.css";
import "../../styles/ShopQueries.css";

export default function Shop({
  fruitIndex,
  setSectionLoaded,
  cartItems,
  setCartItems,
  fruitListOpen,
  setFruitListOpen,
}) {
  const isSmallScreen = useIsSmallScreen();
  const [currentFruit, setCurrentFruit] = useState(fruits[fruitIndex]);
  const [itemAdded, setItemAdded] = useState(false);

  useEffect(() => {
    const SHOP_COMP = "SHOP_COMP";
    setSectionLoaded(SHOP_COMP);
  }, [setSectionLoaded]);

  useEffect(() => {
    isSmallScreen ? setFruitListOpen(false) : setFruitListOpen(true);
  }, [isSmallScreen, setFruitListOpen]);

  useEffect(() => {
    setCurrentFruit(fruits[0]);
  }, [setCurrentFruit]);

  useEffect(() => {
    const existsInCart = cartItems.find((item) => {
      if (item.id === currentFruit.id) {
        return true;
      }
      return false;
    });
    existsInCart !== undefined ? setItemAdded(true) : setItemAdded(false);
  }, [currentFruit, cartItems]);

  const addToCart = (fruit) => {
    const fruitInCart = cartItems.find((item) => {
      if (item.id === fruit.id) {
        return true;
      }
      return false;
    });
    if (fruitInCart === undefined) {
      setCartItems([...cartItems, { ...fruit, cartQuantity: 1 }]);
    } else {
      setCartItems(cartItems.filter((item) => item.id !== fruitInCart.id));
    }
  };

  const detailsParentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    hideBack: {
      opacity: 0,
      x: "-40%",
      transition: { duration: 0.2 },
    },
  };

  const detailsChildVariant = {
    hidden: {
      opacity: 0,
      x: "40%",
    },
    visible: {
      x: 0,
      opacity: 1,
      color: currentFruit.backColor,
      transition: { duration: 1 },
    },
  };

  const detailsNutritionVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      style={{
        "--fruit-light-color": currentFruit.backColor,
        "--fruit-dark-color": currentFruit.textColor,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="ShopContainer"
    >
      {isSmallScreen && (
        <MobileMenu
          fruitListOpen={fruitListOpen}
          currentFruit={currentFruit}
          setCurrentFruit={setCurrentFruit}
        />
      )}
      <motion.div className="ShopTopContainer">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{
            x: 0,
            transition: { duration: 0.4, when: "afterChildren" },
          }}
          className="ShopLeftContainer"
        >
          <FruitList
            currentFruit={currentFruit}
            setCurrentFruit={setCurrentFruit}
            fruitListOpen={fruitListOpen}
          />
          <AnimatedLine />
        </motion.div>
        <div className="ShopRightContainer">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              variants={detailsParentVariant}
              initial="hidden"
              animate="visible"
              exit="hideBack"
              key={`DetailsContainer-${currentFruit.index}`}
              className="DetailsContainer"
            >
              <motion.h2
                variants={detailsChildVariant}
                className="DetailsBoxName"
              >
                {currentFruit.name}
              </motion.h2>
              <motion.div
                variants={detailsChildVariant}
                className="DetailsBoxBottomContainer"
              >
                <div className="DetailsBoxFruitDetails">
                  {currentFruit.details}
                </div>
                <motion.div
                  variants={detailsParentVariant}
                  className="DetailsBoxFruitNutrition"
                >
                  <motion.div
                    variants={detailsNutritionVariant}
                    className="NutritionValue NutritionOne"
                  >
                    <motion.span
                      animate={{ color: currentFruit.backColor }}
                      className="NutritionHead"
                    >
                      Carbs
                    </motion.span>
                    <span className="NutritionValueData">
                      {currentFruit.nutrition.carbs}
                    </span>
                  </motion.div>
                  <motion.div
                    variants={detailsNutritionVariant}
                    className="NutritionValue NutritionTwo"
                  >
                    <motion.span
                      animate={{ color: currentFruit.backColor }}
                      className="NutritionHead"
                    >
                      Sugar
                    </motion.span>
                    <span className="NutritionValueData">
                      {currentFruit.nutrition.sugar}
                    </span>
                  </motion.div>
                  <motion.div
                    variants={detailsNutritionVariant}
                    className="NutritionValue NutritionThree"
                  >
                    <motion.span
                      animate={{ color: currentFruit.backColor }}
                      className="NutritionHead"
                    >
                      Energy
                    </motion.span>
                    <span className="NutritionValueData">
                      {currentFruit.nutrition.energy} calories
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.8, delay: 2 },
                    }}
                    className="DetailsBoxUnit"
                  >
                    {currentFruit.nutrition.unit === "fruit" ? "1 " : "100 "}
                    {currentFruit.nutrition.unit}
                  </motion.div>
                </motion.div>
              </motion.div>
              <div
                className="AddToCartContainer"
                onClick={() => addToCart(currentFruit)}
              >
                <button className="AddToCartButton">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                    key={`IsItemAdded-${itemAdded}`}
                  >
                    {itemAdded ? "Cancel" : "Add to Cart"}
                  </motion.span>
                </button>
                <ButtonBackground className="ButtonSpiralBackground" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <div
        key={`ShopBottomContainer-${currentFruit.index}`}
        className="ShopBottomContainer"
      >
        <TextBigHead
          title="Know what's the"
          subTitle={`nutrition in your ${currentFruit.name}.`}
          currentFruit={currentFruit}
        />
        <div className="NutritionTableContainer">
          <table className="NutritionTable">
            <thead>
              <tr>
                <th className="TableColumnOne">Nutrients</th>
                <th className="TableColumnTwo">
                  <span className="TableColumnTwoText">Amount</span>
                  <span className="TableApproximation">
                    (in approx {currentFruit.nutrition.unit}.)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentFruit.table.map((tbRow, key) => {
                return (
                  <tr key={`NutrientTableRows-${key}`}>
                    <td className="TableColumnOne">{tbRow[0]}</td>
                    <td className="TableColumnTwo">{tbRow[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
