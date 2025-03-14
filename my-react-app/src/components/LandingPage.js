import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <NavBar />
      <div className="landing-page-content">
        <h1 className="landing-page-title">Greetings, Welcome to the Grade System</h1>
        <p className="landing-page-description">
          Your tool for tracking and reporting missing grades.
        </p>
        <Link to="/login">
          <button className="landing-page-button">Login To Start</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;