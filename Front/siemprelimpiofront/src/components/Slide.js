import React from "react";
import AwesomeSlider from "react-awesome-slider";
import Image1 from "../Images/Imagen1.jpg";
import Image2 from "../Images/Imagen2.jpg";
import Image3 from "../Images/Imagen3.jpg";
import "react-awesome-slider/dist/styles.css";

const Slide = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <AwesomeSlider>
        <div>
          <img src={Image1} alt="Slide 1" />
        </div>
        <div>
          <img src={Image2} alt="Slide 2" />
        </div>
        <div>
          <img src={Image3} alt="Slide 3" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slide;
