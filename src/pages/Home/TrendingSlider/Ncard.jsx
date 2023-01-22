import React from "react";
import "./Ncard.scss";
import { Link } from "react-router-dom";

const Ncard = ({ item ,isTabletOrMobile}) => {
  if(isTabletOrMobile){
    return (
  
      <Link className="link" to={`/product/${item.id}`}>
       <div style={{width:'90%',padding:40,inlineSize:"fit-content"}}>
        <img 
        style={{objectFit:'cover',height:'100%',width:'100%'}}
        src={item.attributes?.img?.data?.attributes?.url}
              alt=""
              className="mainImg"
            />
         </div>
        </Link>
  
    )}
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="imagee">
          <img src={item?.attributes?.img?.data?.attributes?.url}
            alt=""
            className="mainImg"
          />
        </div>
      </div>
    </Link>
  );
};

export default Ncard;
