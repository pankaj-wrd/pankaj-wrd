import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 40) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <Link to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-primary me-3"></i>CakeZone</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto mx-lg-auto py-0">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About Us</Link>
                    <Link to="/menu" className="nav-item nav-link">Menu & Pricing</Link>
                    <Link to="/team" className="nav-item nav-link">Master Chefs</Link>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu m-0">
                            <Link to="/service" className="dropdown-item">Our Service</Link>
                            <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
