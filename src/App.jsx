import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CodingProjects from './components/CodingProjects';
import MediaWork from './components/MediaWork';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <CodingProjects />
        <MediaWork />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
