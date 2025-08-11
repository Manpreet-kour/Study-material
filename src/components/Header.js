import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-pic-container">
            <img 
              src="/profile-pic.jpg" 
              alt="Manpreet Kour" 
              className="profile-pic"
            />
          </div>
          <div className="profile-info">
            <h1 className="name">Manpreet Kour</h1>
            <p className="tagline">B.Tech IT | Research-Driven AI Innovator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
