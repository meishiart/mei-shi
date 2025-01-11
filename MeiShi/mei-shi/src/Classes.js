import React, { useState, useEffect } from 'react';
import './home.css';
import ParticleBackground from './ParticleBackground';
import studentImages from './studentData.json';


function Classes() {
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
                    <span className="animate-in">Classes</span>
                </h1>
            </div>

            <section className="branddesign">
                <div className="branddesign-container">

                    <div className="design-flex">
                        <div className="textbox">
                            <h1>Our Story</h1><p>Founded in 2018, Mei Shi Art Center, located south of Portland, teaches art and digital design classes to people of
                                all ages and all levels. Today, our innovative program reaches students across the United States and Canada.</p>

                            <h1>Our Educational Philosophy</h1>
                            <p>
                                Mei Shi Art Center has developed a unique art curriculum emphasizing the creative and imaginative process. Every day,
                                we encourage students to forge their own creative paths, aiming to create works with broader perspectives and
                                immersive artistic experiences. This includes inspiring student works that advocate for environmental and social
                                justice, as many award-winning works embody a sense of responsibility and commitment to world peace and justice. We
                                are passionate arts educators, and we care deeply about helping every student realize their dreams through art. We
                                strive to improve students' abilities in artistic appreciation, expression, and creation, while instilling
                                perseverance through difficulties.
                            </p>

                            <p><em style={{ color: '#FFE89C' }}>Translate your creativity into a career path in art.</em>
                            </p><p>
                                Through the experiential approach of MeiShi Art Center, you'll build hands-on experience that combines traditional fine arts with today's digital tools and techniques.
                            </p>
                            <p>Start your journey and <a href="mailto:meishi2018@gmail.com" style={{ color: '#FFE89C' }}>contact us</a> today!</p>
                        </div>
                        <div >
                            <img className="imagebox" src={process.env.PUBLIC_URL + "/imgs/20230830_164456.jpg"} alt="students painting in studio" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="branddesign-container">

                <div className="design-grid">
                    {studentImages.map((work) => (

                        <div key={work.id} className="design-card">
                            <img
                                src={process.env.PUBLIC_URL + work.image}
                                alt={work.title}
                                className="classes-squares"
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
        </div>
    );
}

export default Classes;