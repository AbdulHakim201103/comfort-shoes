import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    const url = `https://safe-brook-20632.herokuapp.com/product`;
    fetch (url,{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)

    })
    .then (res => res.json())
    .then (result => {
      toast('Stock Added Successfully');
    })
  };


  return (
    <div className=" container my-5 ">
      <div className="form-container rounded border bg-light border-dark w-75 m-auto">
        <h1 className="text-center my-4 text"> Add A New Items</h1>
        <div className="w-75 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
             value={user?.email}
             readOnly
              className="w-100 my-1 p-1 m"
              {...register("email")}
            />
            <input placeholder="Product Name" className="w-100 my-1 p-1" {...register("name")} />
            <input placeholder="Photo URL" className="w-100 my-1 p-1" {...register("img")} />
            <div className="d-flex justify-content-around">
              <input placeholder="Supplier" className="w-50 me-1 my-1 p-1" {...register("supplier")} />
              <input placeholder="Quantity" className="w-50 my-1 p-1" {...register("quantity")} />
            </div>
            <div className="d-flex justify-content-around">
              <input placeholder="Sold" className="w-50 me-1 my-1 p-1" {...register("sold")} />
              <input placeholder="Price" className="w-50 my-1 p-1" {...register("price")} />
            </div>
            <textarea
              placeholder="Description"
              className="w-100 my-1 p-1"
              {...register("description")}
            />
            <input className="btn btn-success w-100 my-4 p-1" type="submit" value="Add Product" />
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddItems;
