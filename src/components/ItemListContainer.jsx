import data from "../data/catalogue.json";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve(data), 2000))
      .then((response) => {
        if (!id) {
          setItems(response);
        } else {
          const filtered = response.filter((i) => i.category === id);
          setItems(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Cargando...";
  return (
    <Container className="mt-5">
      <Row>
        {items.map((i) => (
          <Col md={2} key={i.id}>
            <Card className="mono-card">
              <Card.Img variant="top" src={i.image} className="mono-card-img" />
              <Card.Body>
                <Card.Title className="mono-card-text-category">
                  {i.category}
                </Card.Title>
                <Card.Text className="mono-card-text-product">
                  {i.name}
                </Card.Text>
                <Card.Text className="mono-card-text-pricing">
                  {i.pricing}
                </Card.Text>
                <Link to={`/item/${i.id}`}>
                  <Button className="mono-button">¡LO QUIERO!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
