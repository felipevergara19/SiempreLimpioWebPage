import React from "react";
import AwesomeSlider from "react-awesome-slider";
import Image1 from "../Images/Imagen1.jpg";
import Image2 from "../Images/Imagen2.jpg";
import Image3 from "../Images/Imagen3.jpg";
import "react-awesome-slider/dist/styles.css";

const Slide = () => {
  const slideData = [
    { id: 1, image: Image1, title: "Slide 1" },
    { id: 2, image: Image2, title: "Slide 2" },
    { id: 3, image: Image3, title: "Slide 3" },
  ];

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden mt-[-100px]">
      <AwesomeSlider className="w-3/6 h-2/4 z-0">
        {slideData.map((imagen) => (
          <div className="relative">
            <img
              src={imagen.image}
              alt={imagen.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Slide;
