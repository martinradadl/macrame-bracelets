import React from "react";
import { Footer } from "../../components/footer";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import {
  galleryImg,
  inStockImg,
  personalizeImg,
} from "../../assets/export-images";

const Home = () => {
  return (
    <div>
      <div class="intro">
        <h1>TIENDA DE MANILLAS EN MACRAMÉ</h1>
        <p>Ordena tu manilla personalizada o escoge del stock!</p>
      </div>
      <div class="options-container">
        <Link to="/in-stock">
          <div className="option-container">
            <img className="option-img" src={inStockImg} />
            <div className="option-bg"></div>
            <div className="option-descr">
              <h2><b>En Stock</b></h2>
            </div>
          </div>
        </Link>
        <Link to="/select-knot">
          <div className="option-container">
            <img className="option-img" src={personalizeImg} />
            <div className="option-bg"></div>
            <div className="option-descr">
              <h2>
                <b>Personalizadas</b>
              </h2>
            </div>
          </div>
        </Link>
        <Link to="/gallery">
          <div className="option-container">
            <img className="option-img" src={galleryImg} />
            <div className="option-bg"></div>
            <div className="option-descr">
              <h2>
                <b>Galería</b>
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export { Home };
