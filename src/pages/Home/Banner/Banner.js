import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../images/banner/banner1.webp";
import banner2 from "../../../images/banner/banner2.webp";
import banner3 from "../../../images/banner/banner3.webp";


const Banner = () => {
  return (
    <div className="container-fluid">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-capitalize">Run anywhere comfort everywhere.</h3>
            <p className="text-capitalize">We at Comfort Shoe are dedicated in providing excellent quality Footwear for Men-Women and Kids..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src={banner2} alt="Second slide" />

          <Carousel.Caption>
          <h3 className="text-capitalize">Run anywhere comfort everywhere.</h3>
            <p className="text-capitalize">We at Comfort Shoe are dedicated in providing excellent quality Footwear for Men-Women and Kids..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src={banner3} alt="Third slide" />

          <Carousel.Caption>
          <h3 className="text-capitalize">Run anywhere comfort everywhere.</h3>
            <p className="text-capitalize">We at Comfort Shoe are dedicated in providing excellent quality Footwear for Men-Women and Kids..</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
