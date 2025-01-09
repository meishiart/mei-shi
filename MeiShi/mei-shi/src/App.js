// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';


function App() {

  return (

    <div className="App">
      <nav className="navbar">
        <h2 className="nav-brand">Mei Shi</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="footer">

        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: meishi2018@email.com</p>
            <p>Phone: (555) 555-5555</p>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>123 Art Studio Way</p>
            <p>San Francisco, CA 94110</p>
          </div>
          <div className="footer-section">
            <h3>Social</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright">
          © 2024 Mei Shi. All rights reserved.
        </div>
        
      </footer>
      
    </div>

  );

}


export default App;