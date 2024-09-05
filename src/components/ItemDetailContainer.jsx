import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemCount } from "./ItemCount";
import { ItemsContext } from "../contexts/ItemsContext";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const {addItem} = useContext(ItemsContext)

  const { id } = useParams();

  useEffect(() => {
 const db = getFirestore();

 const refDoc = doc(db, "items", id);

 getDoc(ref);
 .then((snapshot) => {
   setItem({...snapshot.docs(), id: snapshot.id });
  })
.finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => { addItem({ ... item, quantity});};

  if (loading)
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <h2 className="mono-h2 mt-5">Cargando monadas...</h2>
      </Container>
    );

  return (
    <Container className="mt-5 text-center">
      <h2 className="mono-h2">{item.categoryId}</h2>
      <h1 className="mono-h1">{item.name}</h1>
      <img src={item.imageId} height={600} />
      <br />
      <b className="mono-b">{item.pricing}</b>
      <br />
      <b className="mono-b">{item.stock}</b>
      <ItemCount stock={item.stock} onAdd={onAdd}/>
    </Container>
  );
};
