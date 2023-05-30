import React from "react";
import { Link } from "react-router-dom";
import FirstBackground from "../assets/FirstBackground.jpg";
import SecondBackground from "../assets/SecondBackground.jpg";
import "../styles/Home.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../content_option";
import Typewriter from "typewriter-effect";


function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${FirstBackground})` }}>
        <div className="headerContainer">
          <h1> Curious to see what you get when you combine </h1>
          <p> Luxury & AI & Robotics </p>
        </div>
        
      </div>
      {/* Second image */}
      <div className="home2" style={{ backgroundImage: `url(${SecondBackground})` }}>
        <div className="headerContainer">
          <h1> We present to you </h1>
          <p> Epsilon </p>
          <p> The first Luxury AI powered assistance Bot </p>
          <Link to="/products">
            <button> Preorder Now </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
