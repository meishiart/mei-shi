import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';

const ArtClasses = () => {
    const works = [
        {
            id: 1,
            title: "Project One",
            image: "/imgs/20230830_164456.jpg",
        },
        {
            id: 2,
            title: "Project Two",
            image: "/imgs/20230830_180950a.jpg",
        },
        {
            id: 3,
            title: "Project Three",
            image: "/imgs/20230831_180010.jpg",
        }
    ];

    return (
        <section className="branddesign">
            <div className="branddesign-container">
                <h2>Art Classes</h2>
                {/* <img src={process.env.PUBLIC_URL + '/imgs/20230830_164456.jpg'} className="art-classes-image" alt="Art Classes" /> */}
                <div>
                    <div>
                        <div className="design-flex">
                            {works.map((work) => (
                                <div key={work.id} className="design-card">
                                    <img
                                        src={process.env.PUBLIC_URL + work.image}
                                        alt={work.title}
                                        className="paintings-squares"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="textbox">
                        <h4 className="branddesign-title long">Translate your creativity into a career path in art.</h4>
                        <p>
                            Founded in 2018, MeiShi Art Center, located south of Portland, teaches art and digital design classes to people of all ages and all levels. Today, our innovative program reaches students across the United States and Canada.            </p>

                        <button>Learn More</button>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ArtClasses; 