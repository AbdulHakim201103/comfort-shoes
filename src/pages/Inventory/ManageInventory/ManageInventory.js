import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ManageInventory = () => {
  const [items,setItems] = useInventory([]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you Sure?");
    if (confirm) {
      const url = `https://safe-brook-20632.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Stock Delete Successfully");
          const remaining = items.filter(item => item._id !== id );
          setItems(remaining);
        });
    }
  };
  return (
    <div className="container bg-light my-5">
      <h1 className="py-5 text-danger text-center">Manage Item</h1>
      <div className="d-flex my-3 justify-content-center align-content-center">
          <Link className="btn w-25 mb-4 btn-primary" to="/additem">
              Add New Item +
            </Link>
          </div>
      <div className="inventoryContainer">
        {items.map((item) => (
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title className="text-danger">
                  <h2>{item.name}</h2>
                </Card.Title>
                <Card.Text>
                  <small>id: {item._id}</small>
                </Card.Text>
                <Card.Text>
                  <small>Supplier: {item.supplier}</small>
                </Card.Text>
                <Card.Text>
                  <h5>Quantity :{item.quantity}</h5>
                </Card.Text>
                <Card.Text>
                  <h5>Sold :{item.Sold}</h5>
                </Card.Text>
                <Card.Text>
                  <h3>Price: &{item.price}</h3>
                </Card.Text>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-center">
                  <button onClick={() => handleDelete(item._id)} className="btn btn-danger w-75">
                    Delete
                  </button>
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};
export default ManageInventory;
