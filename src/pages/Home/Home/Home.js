import React from "react";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Inventory from "../../Inventory/Inventory/Inventory";
import WareHouse from "../WareHouse/WareHouse";
import Address from "../Address/Address";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <WareHouse></WareHouse>
      <Address></Address>
      <Footer></Footer>
    </div>
  );
};

export default Home;
