import React from "react";
import Slider from "../Slider/Slider";
import img1 from '../../images/1-1.jpg'
import img2 from '../../images/1-2.jpg'

const Tuxedos = () => {
   const sliderData = [
    {
      image: img1,
      heading: "Ornamented Tuxedos",
      btnTitle:"Shop Now"
    },
    {
      image: img2,
      heading: "Ornamented Tuxedos",
      btnTitle:"Shop Now"
    },
  ];

  return (
    <div>
      <Slider sliderData={sliderData} />
    </div>
  )
};

export default Tuxedos;