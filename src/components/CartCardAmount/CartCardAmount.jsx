import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import "./CartCardAmount.css";

export default function CartCardAmount({ fruit, cartItems, setCartItems }) {
  function changeQuantity(fruitId, type) {
    switch (type) {
      case "INC":
        setCartItems(
          cartItems.map((item) =>
            item.id === fruitId
              ? Object.assign({}, item, { cartQuantity: item.cartQuantity + 1 })
              : item
          )
        );
        break;
      case "DEC":
        const fruitToDec = cartItems.find((item) => item.id === fruitId);
        fruitToDec.cartQuantity === 1
          ? setCartItems(cartItems.filter((item) => fruitId !== item.id))
          : setCartItems(
              cartItems.map((item) =>
                item.id === fruitId
                  ? Object.assign({}, item, {
                      cartQuantity: item.cartQuantity - 1,
                    })
                  : item
              )
            );
        break;
      default:
        console.warn("Something insane apparently happened here!");
    }
  }

  return (
    <div className="CartCardButtonContainer">
      <button
        onClick={() => changeQuantity(fruit.id, "DEC")}
        className="CartCardButton CartCardIncrement"
      >
        <CgMathMinus />
      </button>
      <span className="CartCardAmountContainer">
        <span className="CartCardPrice">
          {fruit.price * fruit.cartQuantity} ₹
        </span>
        <span className="CartCardAmount">
          {fruit.nutrition.unit === "fruit"
            ? fruit.cartQuantity
            : fruit.cartQuantity * 100}{" "}
          {fruit.nutrition.unit}
        </span>
      </span>
      <button
        onClick={() => changeQuantity(fruit.id, "INC")}
        className="CartCardButton CartCardDecrement"
      >
        <CgMathPlus />
      </button>
    </div>
  );
}
