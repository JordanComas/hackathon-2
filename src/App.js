import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Carlist from "./components/CarList";
import logo from "./images/login.png";
import Footer from "./components/Footer";
import TermsConditions from "./components/TermsConditions";

function App() {
  <Link to="/car-list">Search Cars</Link>;

  return (
    <div className="App">
      <header>
        <nav>
          <Link className="title" to="/">
            IRONLUX TOYS
          </Link>
          <div className="links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">
              <img height="35" src={logo} />
            </Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="/car-list" element={<Carlist />} />

        <Route path="/termsconditions" element={<TermsConditions />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
