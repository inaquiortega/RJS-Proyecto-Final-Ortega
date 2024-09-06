import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((i) => (
        <Col md={2} key={i.id}>
          <Card className="mono-card">
            <Card.Img variant="top" src={i.imageId} className="mono-card-img" />
            <Card.Body>
              <Card.Title className="mono-card-text-category">
                {i.categoryId}
              </Card.Title>
              <Card.Text className="mono-card-text-product">{i.name}</Card.Text>
              <Card.Text className="mono-card-text-description">
                {i.description}
              </Card.Text>
              <Card.Text className="mono-card-text-pricing">
                ${i.pricing}
              </Card.Text>
              <Link to={`/item/${i.id}`}>
                <Button className="mono-button">¡LO QUIERO!</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ItemList;
