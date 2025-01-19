import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';





function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
