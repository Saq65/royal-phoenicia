import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer row m-0 ">
      <div className="col-lg-4 col-6 col-md-4 d-flex justify-content-center align-items-center">
        <div className="listfooter">
          <ul>
            <li><span>I</span> Rooms</li>
            <li><span>II</span> Wellness</li>
            <li><span>III</span> Gastro</li>
            <li><span>IV</span> Hotel</li>
            <li><span>V</span> Events</li>
          </ul>
        </div>
      </div>

      <div className="col-lg-4 col-6  col-4 d-flex flex-column justify-content-center align-items-center">
        <p className="moreabout-text">More about rooms</p>
        <div className="comfort">
          <span>120 comfortable rooms</span>
          <span>Dinings</span>
          <span>Packages</span>
          <span>Pools</span>
        </div>
      </div>

      <div className="col-lg-4 col-12 col-md-4 footerthird text-center text-light">
        <div className="logo-container mb-3">
          <img
            src="../images/Group 81.png"
            className="img-fluid"
            style={{ maxHeight: "60px" }}
            alt="Hotel Logo"
          />
        </div>
        <p className="footer-heading">Wellness & Pools<br />Hotel Royal Phoenicia</p>
        <div className="address">
          <span>Building 1288</span>
          <span>Road 3931, Block 339</span>
          <span>Umm Al Hasam – Manama</span>
          <span>Bahrain</span>
        </div>
        <div className="mt-3">
          <span>+973 1730 7307</span><br />
          <span>info@royalphoeniciahotel.com</span><br />
          <span className="cursor-pointer">Contacts →</span>
        </div>
        <div className="social-icons mt-5">
          <BsInstagram className="mx-2" />
          <FaFacebookF className="mx-2" />
          <BsYoutube className="mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
