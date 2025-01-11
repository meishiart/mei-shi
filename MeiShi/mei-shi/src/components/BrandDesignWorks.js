import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Designworks from '../Designworks';
import '../home.css';

const BrandDesignWorks = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: ''
  });

  const works = [
    {
      id: 1,
      title: "Project One",
      image: "/imgs/anta.jpg",
    },
    {
      id: 2,
      title: "Project Two",
      image: "/imgs/china geological survey.jpg",
    },
    {
      id: 3,
      title: "Project Three",
      image: "/imgs/sanyi.jpg",
    }
  ];

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
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="branddesign">
      <div className="branddesign-container">
        <h2>Corporate Brand Design</h2>

        <div className="design-flex">
          <div>
            <div className="design-flex">
              {works.map((work) => (
                <div key={work.id} className="design-card">
                  <img
                    src={process.env.PUBLIC_URL + work.image}
                    alt={work.title}
                    className="design-squares"
                    onClick={() => openLightbox(work.image)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              ))}
            </div>
            <div className="link-block">
              <Link className="designlink" to="/Designworks">
                View All Works
              </Link>
            </div>
          </div>

          <div className="textbox">
            <h4 className="branddesign-title">Elevate your business</h4>
            <p>
              Have a project in mind? Reach out to supercharge your brand with our expert design services.
            </p>
            <a href="mailto:meishi2018@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}><button className="design-button">Start Today</button></a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
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
  );
};

export default BrandDesignWorks; 