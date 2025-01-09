import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';
import ScrollCarousel from 'scroll-carousel-react';


const Paintings = () => {
    const works = [
        {
            id: 1,
            title: "Project One",
            image: "https://placehold.co/450x450",
        },
        {
            id: 2,
            title: "Project Two",
            image: "https://placehold.co/450x450",
        },
        {
            id: 3,
            title: "Project Three",
            image: "https://placehold.co/450x450",
        }
    ];

    return (
        // <section className="no-background">
            <div className="branddesign-container ">
             
            <h2>Painting and Illustration</h2>

            <ScrollCarousel
                autoplay={true}
                autoplaySpeed={4}
                speed={7}
                onReady={() => console.log('Carousel is ready')}
            >
                {works.map((work) => (
                    <div key={work.id} className="paintings-card">
                        <img
                            src={work.image}
                            alt={work.title}
                            style={{ margin: '0 10px' }}
                        />
                    </div>
                ))}
            </ScrollCarousel>

            <div className = "link-block">
                <Link className="designlink" to="/works">
                    View All Works
                </Link>
            </div>
   
            </div>
        // </section>
    );
};

export default Paintings; 