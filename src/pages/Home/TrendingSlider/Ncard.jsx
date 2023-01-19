import React from "react";
import "./Ncard.scss";
import { Link } from "react-router-dom";

const Ncard = ({ item ,isTabletOrMobile}) => {
  if(isTabletOrMobile){
    return (
  
      <Link className="link" to={`/product/${item.id}`}>
       <div style={{width:'90%',padding:20}}>
        <img 
        style={{objectFit:'cover',height:'100%',width:'100%'}}
        src={
          process.env.REACT_APP_UPLOAD_URL +    item.attributes?.img?.data?.attributes?.url
              }
              alt=""
              className="mainImg"
            />
         </div>
        </Link>
  
    )}
  // console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="imagee">
          <img src={
     process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          {/* <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.product_images?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          /> */}
        </div>
        {/* <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div> */}
      </div>
    </Link>
  );
};

export default Ncard;
