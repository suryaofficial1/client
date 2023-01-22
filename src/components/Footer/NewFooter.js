import React from "react";
import { Link } from "react-router-dom";
import "./NewFooter.css";

const NewFooter = () => {
  return (
    <div className="footerr">
      <div className="footer-ites">
        <a href="https://instagram.com">Instagram</a>
        <a href="https://facebook.com">Facebook</a>
      </div>
      <div className="footer-itemss">
        <Link to="/shipping-info">Shipping Information</Link>
        <Link to="/return-policy">Return Policy</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-condition">Terms & Condition</Link>
      </div>
    </div>
  );
};

export default NewFooter;
