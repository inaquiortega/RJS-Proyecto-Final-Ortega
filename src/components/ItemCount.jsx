import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <>
      <button
        className="monkey-button mono-button-increase"
        onClick={handleIncrease}
      >
        +
      </button>
      <span> {count} </span>
      <button
        className="monkey-button mono-button-decrease"
        onClick={handleDecrease}
      >
        -
      </button>
      <br />
      <button className="monkey-button mono-button-add" onClick={handleAdd}>
        AGREGAR AL CARRITO
      </button>
    </>
  );
};
