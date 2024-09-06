import { Container } from "react-bootstrap";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item, onAdd }) => {
  console.log("Item data:", item);

  return (
    <Container className="mt-5 text-center">
      <h2 className="mono-h2">{item.categoryId}</h2>
      <h1 className="mono-h1">{item.name}</h1>
      <img src={item.imageId} height={500} alt={item.name} />
      <br />
      <b className="mono-b">${item.pricing}</b>
      <br />
      <b className="mono-card-text-product">Stock: {item.stock} </b>
      <br />
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </Container>
  );
};

export default ItemDetail;
