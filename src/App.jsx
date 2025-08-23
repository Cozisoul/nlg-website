import React from 'react';
import Hero from './components/Hero';
import Process from './components/Process';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site-wrapper">
      <Hero />
      <main>
        <Projects />
        <Process />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App