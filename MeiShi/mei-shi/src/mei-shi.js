import './App.css';
import React from 'react';
import logo from './logo.svg';
import BrandDesignWorks from './components/BrandDesignWorks';
import Paintings from './components/Paintings';
import ParticleBackground from './ParticleBackground';
import './home.css';
import ArtClasses from './components/ArtClasses';
import Paintingworks from './Paintingworks';
import Designworks from './Designworks';
import Classes from './Classes';
function Home() {
  return (
    <div className="App">
      {/* <ParticleBackground /> */}

      <div className="hero" style={{
        backgroundImage: 'url("/mei-shi/imgs/himalaya.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'white',  // Making text white to stand out against the background
      }}>
        <h1 className="hero-title">
          <span className="animate-in">Mei Shi</span>
        </h1>
        {console.log("Image path:", process.env.PUBLIC_URL + "/imgs/himalaya.jpg")}
        {/* <img 
          src="/mei-shi/imgs/himalaya.jpg"
          alt="Himalaya"
          style={{ border: '2px solid blue', maxWidth: '100%', display: 'block' }} 
        /> */}

        <div className="hero-subtext">
          <span className="animate-in delay-1">Brand Designer.</span>
          <span className="animate-in delay-2">Artist.</span>
          <span className="animate-in delay-3">Educator.</span>
        </div>
      </div>
      <header className="App-header">
                      <BrandDesignWorks />
                      <Paintings />
                      <ArtClasses />
        
      </header>
    </div>
  );
}

export default Home;