// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Paintingworks from './Paintingworks';
import Designworks from './Designworks';
import Classes from './Classes';


function App() {

  return (

    <div className="App">
      <nav className="navbar">
        <h2 className="nav-brand">Mei Shi</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="mailto:meishi2018@gmail.com">Contact</a></li>
        </ul>
      </nav>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Paintingworks" element={<Paintingworks />} />
        <Route path="/Designworks" element={<Designworks />} />
        <Route path="/Classes" element={<Classes />} />
      </Routes>


      <footer className="footer">

        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: meishi2018@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>Lake Oswego, OR</p>
          </div>
          <div className="footer-section">
            <h3>Social</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/meishi_art/" target="_blank" rel="noopener noreferrer">
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