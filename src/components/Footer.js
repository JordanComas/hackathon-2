import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      @Ironhack Created By: Nelson, Jordan, Jorge, Miguel, and Alejandro &amp;
      Designed by: Ryan, Jessica, Taylor, Vladyslav Riabkov, Shanttel, and Ariel
      <br />
      <Link to="/contact">Contact Us</Link>
    </footer>
  );
};

export default Footer;
