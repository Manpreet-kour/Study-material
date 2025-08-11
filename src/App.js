import React from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Notes />
      <Resume />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
