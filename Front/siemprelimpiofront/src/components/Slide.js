import React from "react";
import AwesomeSlider from "react-awesome-slider";
import Image1 from "../Images/Imagen1.jpg";
import Image2 from "../Images/Imagen2.jpg";
import Image3 from "../Images/Imagen3.jpg";
import "react-awesome-slider/dist/styles.css";

const Slide = () => {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden mt-[-100px]">
      <AwesomeSlider className="w-3/6 h-2/4 z-0">
        <div className="relative">
          <img src={Image1} alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Image2} alt="Slide 2" className="w-full  h-full object-cover" />
        </div>
        <div>
          <img src={Image3} alt="Slide 3" className="w-full  h-full object-cover" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slide;
