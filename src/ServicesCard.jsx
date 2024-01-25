import React from "react";
import "react-multi-carousel/lib/styles.css";
import Face1 from "./assets/face1.png";
import Face2 from "./assets/face2.png";
import Face3 from "./assets/face3.png";
import Face4 from "./assets/face4.png";
import Face5 from "./assets/face5.png";
import Face6 from "./assets/face6.png";

const ServicesCard = () => {
  return (
    <>
      <div className="carousel-card">
        <div className="carousel-card-inner">
          <div className="carousel-card-img">
            <img src={Face2}></img>
          </div>

          <div className="carousel-card-content">
            <h4 className="carousel-card-name">Anna R.</h4>
            <span className="carousel-card-service">Career Consulting</span>
            <h5 className="carousel-card-highlight">
              "Working with Mehnaz changed my life!"
            </h5>
            <p className="carousel-card-review">
              “Sed ut dolor lacinia felis rhoncus faucibus. Pellentesque
              malesuada nunc mollis neque maximus, vitae fermentum elit
              sagittis. Vivamus interdum quam ac sagittis tincidunt. Quisque
              elementum suscipit arcu ac blandit. Vestibulum orci ex,
              vestibulum.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
