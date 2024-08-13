import data from "../data/catalogue.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(data), 2000))
      .then((response) => {
        const finded = response.find((i) => i.id === Number(id));
        setItem(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <h2 className="mono-h2 mt-5">Cargando monadas...</h2>
      </Container>
    );

  return (
    <Container className="mt-5 text-center">
      <h2 className="mono-h2">{item.category}</h2>
      <h1 className="mono-h1">{item.name}</h1>
      <img src={item.image} height={600} />
      <br />
      <b className="mono-b">{item.pricing}</b>
    </Container>
  );
};
