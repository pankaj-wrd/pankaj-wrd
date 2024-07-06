import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testimonial1 from '../assets/images/testimonial-1.jpg';
import testimonial2 from '../assets/images/testimonial-2.jpg';
import testimonial3 from '../assets/images/testimonial-3.jpg';
import testimonial4 from '../assets/images/testimonial-4.jpg';

const Testimonial = () => {
    const options = {
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        dotContent: `<span></span>`,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: '600px' }}>
                    <h2 className="text-primary font-secondary">Testimonial</h2>
                    <h1 className="display-4 text-uppercase">Our Clients Say!!!</h1>
                </div>
                <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
                    <div className="testimonial-item bg-dark text-white border-inner p-4">
                        <div className="d-flex align-items-center mb-3">
                            <img className="img-fluid flex-shrink-0" src={testimonial1} style={{ width: '60px', height: '60px' }} alt="Client" />
                            <div className="ps-3">
                                <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    </div>
                    <div className="testimonial-item bg-dark text-white border-inner p-4">
                        <div className="d-flex align-items-center mb-3">
                            <img className="img-fluid flex-shrink-0" src={testimonial2} style={{ width: '60px', height: '60px' }} alt="Client" />
                            <div className="ps-3">
                                <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    </div>
                    <div className="testimonial-item bg-dark text-white border-inner p-4">
                        <div className="d-flex align-items-center mb-3">
                            <img className="img-fluid flex-shrink-0" src={testimonial3} style={{ width: '60px', height: '60px' }} alt="Client" />
                            <div className="ps-3">
                                <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    </div>
                    <div className="testimonial-item bg-dark text-white border-inner p-4">
                        <div className="d-flex align-items-center mb-3">
                            <img className="img-fluid flex-shrink-0" src={testimonial4} style={{ width: '60px', height: '60px' }} alt="Client" />
                            <div className="ps-3">
                                <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                                <span>Profession</span>
                            </div>
                        </div>
                        <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Testimonial;
