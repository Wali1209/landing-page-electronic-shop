import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import bannerImg from "../assets/mainImage.png";
const Banner = () => {
  return (
    <div id="home" className="banner">
      <div className="row w-100">
        <div className="col-lg-7">
          <div className="banner-text">
            <h1 className="tagline">ARUS ROG XXI New Launch.</h1>
            <div className="description">
              <span>Premium Design - Quality Perfomance</span>
              <p>
                Lorem ipsum dolor sit amet, consecteturat adipiscing elit, a ed
                do eiusmod tempoatra incididunt ut labore et dolore magna{" "}
              </p>
            </div>
            <div className="buttons">
              <button className="order">Pre Order</button>
              <button className="details">
                View Details <BsArrowRight />
              </button>
            </div>
            <h1 className="web-link">
              <a href="#">www.electronicshop.com</a>
            </h1>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <AiOutlineInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <AiOutlineTwitter />
              </a>
              <a href="#" className="social-icon">
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 banner-img-container">
          <div className="banner-img  ">
            <img src={bannerImg} alt="Banner img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
