//import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Service from './components/Service';
import ProductShowcase from './components/ProductShowcase';
import Process from './components/Process';
import Certifications from './components/Certifications';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Service />
      <ProductShowcase />
      <Process />
      <Certifications />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;