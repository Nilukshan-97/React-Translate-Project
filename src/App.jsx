import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import About from './pages/About';
import Newsletter from './components/NewsLetter';

function App() {
    return (
        <div className="App">
        <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            <Newsletter/>    
            <Footer />
            
        </Router>
        </div>
    );
  
}

export default App
