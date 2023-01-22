import React from "react";
import { Link } from "react-router-dom";
import "./SliderCard.css";


const SliderCard = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`} >
          <img src={item?.attributes?.img?.data?.attributes?.url}alt="" className="slideImages"/>
    </Link>
  );
};

export default SliderCard;
