import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Login</h2>
        <ul className="nav-links">
          <li><a href="/Home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Tourist App</h1>
        <p>Discover amazing destinations with us</p>
        <button onClick={() => navigate("/discover")}>
          Discover
        </button>
      </div>
    </div>
  );
}

export default Home;
