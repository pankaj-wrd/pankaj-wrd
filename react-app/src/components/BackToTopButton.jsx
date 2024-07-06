// src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="back-to-top" style={{ display: visible ? 'block' : 'none' }}>
            <button
                type="button"
                className="btn btn-primary border-inner py-3 fs-4"
                onClick={scrollToTop}
            >
                <i className="bi bi-arrow-up"></i>
            </button>
        </div>
    );
};

export default BackToTopButton;
