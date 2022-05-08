import React from "react";
import "./Address.css";
import apex from "../../../images/brand/apex.png";
import addids from "../../../images/brand/addids.png";
import bata from "../../../images/brand/bata.png";
import nike from "../../../images/brand/nike.png";
import power from "../../../images/brand/power.png";
import puma from "../../../images/brand/puma.png";
const Address = () => {
  return (
    <div className="container-fluid rounded-top bg-secondary">
      <div className="container address-container">
        <div className="">
          <h4 className="text-center py-3  text-light">Address</h4>
          <p className="text-center">Comfort Shoes Limited</p>
          <p className="text-center">Head Office House # 06, Road # 137</p>
          <p className="text-center">Block # SE(D), Gulshan-1, Dhaka-1212. Bangladesh.</p>
          <p className="text-center">Email: comfortshoes@gmail.com</p>
          <p className="text-center">Customer care: +880961000000</p>
        </div>
        <div>
          <h4 className="text-center py-3 text-light ">Customer Service</h4>
          <p className="text-center">FAQs</p>
          <p className="text-center">Contact us</p>
          <p className="text-center">Privacy</p>
          <p className="text-center">Terms & Conditions</p>
        </div>
        <div>
          <h4 className="text-center py-3 text-light">Brand</h4>
          <div >
            <div className="text-center ">
              <img className="d-inline w-25 m-3 rounded-3 " src={apex} alt="" />
              <img className="d-inline w-25 m-3 rounded-3 " src={addids} alt="" />
              <img className="d-inline w-25 m-3 rounded-3 " src={bata} alt="" />
              <img className="d-inline w-25 m-3 rounded-3 " src={nike} alt="" />
              <img className="d-inline w-25 m-3 rounded-3 " src={power} alt="" />
              <img className="d-inline w-25 m-3 rounded-3 " src={puma} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
