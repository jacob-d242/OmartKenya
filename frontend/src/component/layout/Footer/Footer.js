import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
      <Link to="/">
        <img src={logo} alt="Omart" />
      </Link>
      
        <p>#Discover A better Way to Shop</p>

        <p>Copyrights 2021 &copy; OmartKenya</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="Omart">Instagram</a>
        <a href="Omart">Youtube</a>
        <a href="Omart">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
