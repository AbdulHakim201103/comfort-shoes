import React from "react";
import "./WareHouse.css";
import extar1 from "../../../images/extar1.jpg";

const WareHouse = () => {
  return (
    <div className="container my-5 bg-light rounded-3 p-5">
      <div className="extra">
        <div className="mx-auto">
          <img className="w-100" src={extar1} alt="" />
        </div>
        <div className="mx-auto">
          <h1 className="text-center text-danger">Comfort Shoes</h1>
          <div>
            <p>
              Get great deals every day at The Warehouse. Shop online and browse through our massive
              range of products, with great deals on Shoes.The Warehouse will have what you need. We are Bangladesh biggest one-stop-shop for great products at low prices. Look no further than
              The Warehouse: where everyone gets a bargain!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
