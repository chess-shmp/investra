import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <div className="fixed inset-0 bg-grid opacity-50 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark pointer-events-none"></div>
      <div className="fixed top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
