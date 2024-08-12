import cart from "../assets/bananaCart.png";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} height={40} alt="Carrito!" />
      <span>8</span>
    </>
  );
};
