import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { ItemsContext } from "../contexts/ItemsContext";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addItem } = useContext(ItemsContext);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ ...snapshot.data(), id: snapshot.id });
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
    addItem({ ...item, quantity });
  };

  if (loading)
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <h2 className="mono-h2 mt-5">Cargando monadas...</h2>
      </Container>
    );

  return item ? (
    <ItemDetail item={item} onAdd={onAdd} />
  ) : (
    <Container className="mt-5 text-center">
      <h2 className="mono-h2">Producto no encontrado</h2>
    </Container>
  );
};
