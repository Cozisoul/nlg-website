import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import { content } from './content/siteContent';

function App() {
  return (
    <div className="site-container">
      <aside className="left-column">
        <Header />
        <Hero content={content.hero} />
        <Footer content={content.footer} />
      </aside>
      <main className="right-column">
        <Projects content={content.projects} />
        <Process content={content.process} />
        <About content={content.about} />
      </main>
    </div>
  );
}

export default App;