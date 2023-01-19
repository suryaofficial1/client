import React, { useEffect } from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useMediaQuery } from "react-responsive";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(1);
  
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log("-----dfgdfgffghfghfh-----",data)
  useEffect(()=>{
    console.log(data,error)
  },[data,error])
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const renderForMobile = () => (
    <div className="left" style={{ flexDirection: "column" }}>
      <div
        className="flex"
        style={{ flexDirection: "row", justifyContent: "space-evenly" }}
      >
        <img
          className="img-mob"
          src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
          alt="product-image"
          onClick={(e) => setSelectedImg("img")}
        />
        <img
          className="img-mob"
          src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
          alt=""
          onClick={(e) => setSelectedImg("img2")}
        />
      </div>
      <div className="container-main-img">
        <div className="main-img-mob">
          <img
            src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url}
            alt=""
          />
        </div>
      </div>
    </div>
  );
  const renderForDesktop = () => (
    <>
      <div className="images">
        <img
          src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
          alt=""
          onClick={(e) => setSelectedImg("img")}
        />
        <img
          src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
          alt=""
          onClick={(e) => setSelectedImg("img2")}
        />
      </div>
      <div className="mainImg">
        <img
          src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url}
          alt=""
        />
      </div>
    </>
  );
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            {isTabletOrMobile ? renderForMobile() : renderForDesktop()}
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>

            <div>
              <label htmlFor="size">Select Size</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e)=>setSelectedSize(e.target.value)}
              >
                
                <option value="">Select a size</option>
                {data?.length>0  ? Object.keys(data?.attributes?.Size?.size).map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                )):null}
              </select>
            </div>

            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              {/* <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div> */}
            </div>
            <div className="info">
              {/* <span>Vendor: Polo</span> */}
              <span>Product Type: T-Shirt</span>
              {/* <span>Tag: T-Shirt, Women, Top</span> */}
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
