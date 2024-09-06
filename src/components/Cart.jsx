import { useContext, useState } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import Container from "react-bootstrap/Container";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = { telefono: "", email: "", nombre: "" };

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);

  const { items, removeItem, reset } = useContext(ItemsContext);

  const handleChange = (ev) => {
    setBuyer((prev) => {
      return { ...prev, [ev.target.name]: ev.target.value };
    });
  };

  const total = items.reduce((acc, act) => acc + act.pricing * act.quantity, 0);

  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Tu orden: " + id + " fue completada. ¡Gracias!");
        }
      })
      .finally(() => {
        reset();
        setBuyer(initialValues);
      });
  };

  if (items.length === 0) return "Tu carrito está vacío, volvamos al home";

  return (
    <Container className="mt-5 text-center">
      {items.map((item) => {
        return (
          <div key={item.Id}>
            <h2 className="mono-card-text-product">{item.categoryId}</h2>
            <h1 className="mono-h2">{item.name}</h1>
            <img src={item.imageId} height={300} />
            <div style={{ height: "20px" }}></div>
            <p>Cantidad: {item.quantity}</p>
            <p className="mono-card-text-description">
              Precio por unidad: ${item.pricing}
            </p>
            <button
              className="monkey-button mono-button-decrease-2"
              onClick={() => removeItem(item.id)}
            >
              Eliminar <br />
              este producto
            </button>
            <button
              className="monkey-button mono-button-decrease"
              onClick={reset}
            >
              Eliminar todos
              <br />
              los productos
            </button>
            <div style={{ height: "40px" }}></div>
          </div>
        );
      })}
      <br />
      <div>TOTAL: $ {total}</div>
      <br />
      <form>
        <div>
          <p>Datos para contactarnos:</p>
          <label>Nombre: </label>
          <input value={buyer.nombre} name="nombre" onChange={handleChange} />
        </div>
        <div>
          <label>Teléfono: </label>
          <input
            value={buyer.telefono}
            name="telefono"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Correo: </label>
          <input value={buyer.email} name="email" onChange={handleChange} />
        </div>
        <button
          type="button"
          className="monkey-button mono-button-add"
          onClick={sendOrder}
        >
          ¡ C O M P R A R !
        </button>
      </form>
    </Container>
  );
};
