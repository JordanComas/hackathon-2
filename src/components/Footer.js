import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      @Ironhack Created By: Nelson, Jordan, Jorge, Miguel, Alejandro &amp; UX/UI
      Design
      <Link to="/contact">Contact Us</Link>
    </footer>
  );
};

export default Footer;
