import { useContext } from "react";

import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserPregressContext";

export default function Header() {
 const cartCtx = useContext(CartContext);
 const userProgressCtx = useContext(UserProgressContext);
 const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
  return totalNumberOfItems + item.quantity;
 }, 0)

  function hanleShowCart(){
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="restaurant image" />
        <h1>TastyFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={hanleShowCart}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
