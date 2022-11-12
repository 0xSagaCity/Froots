import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import fruits from "./data/fruits";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

export default function App() {
  const [fruitIndex, setFruitIndex] = useState(0);
  const [sectionLoaded, setSectionLoaded] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [fruitListOpen, setFruitListOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const clearId = setTimeout(() => {
      if (fruitIndex < fruits.length - 1) {
        setFruitIndex(fruitIndex + 1);
      } else {
        setFruitIndex(0);
      }
    }, 20000);
    return () => {
      clearTimeout(clearId);
    };
  }, [fruitIndex]);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return (
    <div className="App">
      <NavBar
        fruitListOpen={fruitListOpen}
        setFruitListOpen={setFruitListOpen}
        cartItems={cartItems}
        sectionLoaded={sectionLoaded}
        currentFruit={fruits[fruitIndex]}
      />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            default
            path="/"
            element={
              <Home
                currentFruit={fruits[fruitIndex]}
                sectionLoaded={sectionLoaded}
                setSectionLoaded={setSectionLoaded}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                fruitIndex={fruitIndex}
                sectionLoaded={sectionLoaded}
                setSectionLoaded={setSectionLoaded}
                cartItems={cartItems}
                setCartItems={setCartItems}
                fruitListOpen={fruitListOpen}
                setFruitListOpen={setFruitListOpen}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                fruitIndex={fruitIndex}
                cartItems={cartItems}
                setCartItems={setCartItems}
                sectionLoaded={sectionLoaded}
                setSectionLoaded={setSectionLoaded}
                currentFruit={fruits[fruitIndex]}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
