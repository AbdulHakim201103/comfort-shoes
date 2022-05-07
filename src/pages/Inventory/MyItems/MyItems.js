import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyItems = () => {
  const [items, setItems] = useState({});
  const [user] = useAuthState(auth);
  

  useEffect(() => {
    if (user?.email) {
      const url = `https://safe-brook-20632.herokuapp.com/product?email=${user?.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
        });
    }
  }, [user]);

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
      <h1 className="py-5 text-danger text-center">My Items</h1>
      <div className="inventoryContainer">
        {
          items?.length && items.map(item => <CardGroup>
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
          </CardGroup>)
        }
        <ToastContainer />
      </div>
    </div>
  );
};

export default MyItems;
