import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const InventoryCard = ({ shoe }) => {
  const { _id, name, img, description, quantity, supplier, price } = shoe;
  const navigate = useNavigate();

  const navigateStockUpdate = id => {
      navigate (`/update/${id}`);
  }
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-danger">
            <h2>{name}</h2>
          </Card.Title>
          <Card.Text>
            <small>Supplier: {supplier}</small>
          </Card.Text>
          <Card.Text>
            <h5>Quantity :{quantity}</h5>
          </Card.Text>
          <Card.Text>
            <h3>Price: ${price}</h3>
          </Card.Text>
          <Card.Text>{description.slice(0, 80)}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-center">
            <button onClick={() => navigateStockUpdate(_id)} className="btn btn-danger w-75">Stock Update</button>
          </div>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default InventoryCard;
