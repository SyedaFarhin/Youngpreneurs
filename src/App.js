import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/main.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import ForParents from './pages/ForParents';
import ForSchools from './pages/ForSchools';
import Competition from './pages/Competition';
import Academy from './pages/Academy';
import SuccessStories from './pages/SuccessStories';
import Media from './pages/Media';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Add custom cursor class to body
    document.body.classList.add('custom-cursor');
    
    // Add AOS (Animate On Scroll) initialization if using it
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 800,
        once: false,
        mirror: true
      });
    }
    
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <CursorEffect />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/a-message-to-parents" element={<ForParents />} />
            <Route path="/for-schools" element={<ForSchools />} />
            <Route path="/competition-details" element={<Competition />} />
            <Route path="/youngpreneur-academy" element={<Academy />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/media-press" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
