import React, { useState, useEffect } from 'react';
import './home.css';
import ParticleBackground from './ParticleBackground';
import designData from './designData.json';

function Designworks() {

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: ''
  });

  const openLightbox = (imagePath) => {
    setLightbox({
      isOpen: true,
      currentImage: process.env.PUBLIC_URL + imagePath
    });
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      currentImage: ''
    });
  };

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div>
      <ParticleBackground />

      <div className="hero">
        <h1 className="hero-title">
          <span className="animate-in">Design</span>
        </h1>
      </div>

      <section className="branddesign">
        <div className="branddesign-container">
          <div className="design-flex">
            <img className="imagebox" src={process.env.PUBLIC_URL + "/imgs/banking.jpg"} alt="Mei Shi in front of China Export and Credit Insurance Corporation" />
            <div className="textbox">
              <p>Mei Shi has been working in corporate visual design for over 30 years. He has been recognized as
                one of the top ten brand designers, and an influential figure in Visual Identity (VI) design
                in China.
              </p>

              <p>Mei Shi has designed visual identity systems for many famous institutions and fortune 500 companies
                including International Union of Geological Sciences, Korea Saiwo, China Credit Insurance, Beijing
                Benz, China Life Insurance, Sany Heavy Equipment, China Export-Import Bank, China Salvage, Hong Kong
                Xinzhong, PetroChina Dagang, Mengniu, Anta, CITIC, World Bank Poverty Alleviation, AVIC Precision
                Machinery, Chinese Academy of Geological Sciences, etc.
              </p>
              <p>Mei Shi executes unified, standard, and international systems of design strategies to communicate a
                highly capable and profound brand image to the public.
                "</p>


              <p>
                Have a project in mind? Reach out today to supercharge your brand with our expert design services.
              </p>
              <a href="mailto:meishi2018@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}><button className="design-button">Get Started</button></a>

            </div>
          </div>

        </div>
      </section >

    <section className="branddesign-container">

      <div className="design-grid">
        {designData.map((work) => (

          <div key={work.id} className="design-card">
            <img
              src={process.env.PUBLIC_URL + work.image}
              alt={work.title}
              className="designpage-squares"
              onClick={() => openLightbox(work.image)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {lightbox.isOpen && (
        <div
          className="lightbox active"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <span className="close-lightbox" onClick={closeLightbox}>×</span>
          <div className="lightbox-content">
            <img src={lightbox.currentImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
    </div >
  );
}

export default Designworks;