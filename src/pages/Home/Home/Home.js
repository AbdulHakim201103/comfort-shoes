import React from "react";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Inventory from "../../Inventory/Inventory/Inventory";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <Footer></Footer>
    </div>
  );
};

export default Home;
