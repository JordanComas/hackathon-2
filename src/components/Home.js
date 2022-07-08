import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import lambo from "../images/takeofflambo.gif";

const Home = () => {
  return (
    <div className="home">
      <img id="hero" src={lambo} width="1450vw" height="400vh" alt="" />

      <h1 className="home-title"> IRONLUX TOYS </h1>
      <p>
        If you work hard You wanna play harder. We are here to help you with
        your luxury Toys
      </p>
      <p>
        We are the most hooked up group in the bussines<br></br> no cap!
      </p>

      <div className="home-btn">
        <Link to="/car-list">
          <button id="btn">Search Vehicles</button>
        </Link>
      </div>
      <br></br>
    </div>
  );
};

export default Home;
