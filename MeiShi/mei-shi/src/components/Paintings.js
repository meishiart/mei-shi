import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';
import ScrollCarousel from 'scroll-carousel-react';


const Paintings = () => {
    const works = [
        {
            id: 1,
            image: "/imgs/Li Ka-shing.jpg",
        },
        {
            id: 2,
            image: "/imgs/Elderly Ukranian.JPG",
        },
        {
            id: 3,
            image: "/imgs/Ge Ge.jpg",
        }
    ];

    return (
        // <section className="no-background">
        <div className="branddesign-container ">

            <h2>Painting and Illustration</h2>




            <div className="branddesign-container">

                {/* Desktop Carousel */}
                <div className="carousel-view">
                    <ScrollCarousel
                        autoplay={true}
                        autoplaySpeed={4}
                        speed={7}
                        onReady={() => console.log('Carousel is ready')}
                    >
                        {works.map((work) => (
                            <div key={work.id} className="paintings-card">
                                <img
                                    src={process.env.PUBLIC_URL + work.image}
                                    alt={work.title}
                                    className="paintings-squares"
                                />
                            </div>
                        ))}
                    </ScrollCarousel>
                    <div className="link-block">
                        <Link className="designlink" to="/Paintingworks">
                            View All Works
                        </Link>
                    </div>
                </div>

                {/* Mobile Grid */}
                <div className="grid-view">
                    {works.map((work) => (
                        <div key={work.id} className="design-card">
                            <img
                                src={process.env.PUBLIC_URL + work.image}
                                alt={work.title}
                                className="paintings-squares"
                            />
                        </div>
                    ))}
                    <div className="link-block">
                        <Link className="designlink" to="/Paintingworks">
                            View All Works
                        </Link>
                    </div>
                </div>
            </div>
        {/* </section> */}
        </div>
    );
};

export default Paintings; 