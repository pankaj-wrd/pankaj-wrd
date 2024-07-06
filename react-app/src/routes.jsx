import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutPage from '/src/pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterCredit from './components/FooterCredit';
import BackToTopButton from './components/BackToTopButton';

const RoutesPath = () => {
    return (
        <Router>
            <Topbar />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/menu" element={<MenuPage />} />
            </Routes>
            <Footer />
            <FooterCredit />
            <BackToTopButton />
        </Router>
    );
}

export default RoutesPath;
