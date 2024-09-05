import cart from "../assets/bananaCart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

export const CartWidget = () => {
  const { items } = useContext(ItemsContext);

  const quantity = items.reduce((acc, act) => acc + act.quantity, 0);

  return (
    <Link to="/cart">
      <img src={cart} height={40} alt="¡Carrito!" />
      {quantity}
    </Link>
  );
};
