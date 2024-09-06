import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import {
  getFirestore,
  getDocs,
  where,
  query,
  collection,
} from "firebase/firestore";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const ref = id
      ? query(collection(db, "items"), where("categoryId", "==", id))
      : collection(db, "items");

    getDocs(ref)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Cargando...";

  return (
    <Container className="mt-5">
      <Row>
        <ItemList items={items} />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
