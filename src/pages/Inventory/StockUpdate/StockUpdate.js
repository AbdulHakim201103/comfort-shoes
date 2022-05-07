import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StockUpdate = () => {
  const { shoeId } = useParams();
  const [stock, setStock] = useState({});
  const { _id, img, name, supplier, price, sold, description, quantity } = stock;

  useEffect(() => {
    const url = `https://safe-brook-20632.herokuapp.com/inventory/${shoeId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, [stock]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const confirm = window.confirm("Are you Sure?");
    if (confirm) {
      const newQuantity = parseInt(event.target.quantity.value);
      const totalQuantity = parseInt(quantity + newQuantity);
      const id = _id;
      const totalSold = parseInt(sold + 0);
      const update = { id, totalQuantity, totalSold };

      const url = `https://safe-brook-20632.herokuapp.com/inventory/${shoeId}`;
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(update),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          event.target.reset();
          toast("Stock Update Successfully");
        });
    }
  };
  const handleDelivered = () => {
    if (quantity > 0) {
      const totalQuantity = parseInt(quantity - 1);
      const id = _id;
      const totalSold = parseInt(sold + 1);
      const update = { id, totalQuantity, totalSold };

      const url = `https://safe-brook-20632.herokuapp.com/inventory/${shoeId}`;
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(update),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Stock Update Successfully");
        });
    }
  };

  return (
    <div className="container bg-light my-5">
      <h1 className="py-5 text-danger text-center">Stock Update</h1>
      <div className="border mb-4 rounded w-75 mx-auto">
        <div>
          <img className="w-100" src={img} alt="" />
        </div>
        <div className="p-4 my-5">
          <h2 className="text-danger">{name}</h2>
          <small>Id:{_id}</small>
          <h6>Supplier: {supplier}</h6>
          <h5>Quantity: {quantity}</h5>
          <h5>Sold: {sold}</h5>
          <h4>Price: $ {price}</h4>
          <p>{description}</p>
        </div>
        <div>
          <form
            onSubmit={handleUpdate}
            className="d-flex my-3 justify-content-center align-content-center p-1"
          >
            <input
              className="w-25 p-1 me-1"
              type="text"
              name="quantity"
              placeholder="Update Stock"
            />
            <input className="w-25 btn btn-success" type="submit" value="update" />
          </form>
          <div className="d-flex my-3 justify-content-center align-content-center">
            <button onClick={handleDelivered} className="btn w-50  btn-danger">
              Delivered
            </button>
          </div>
          <div className="d-flex my-3 justify-content-center align-content-center">
          <Link className="btn w-50  btn-primary" to="/manageitem">
              Manage Inventory
            </Link>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default StockUpdate;
