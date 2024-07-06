// src/components/Facts.js
import React, { useState, useRef } from 'react';
import counterUp from 'counterup2';
import { Waypoint } from 'react-waypoint';
import backgroundImage from '../assets/images/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsers, faMugHot, faCheck } from '@fortawesome/free-solid-svg-icons';

const Facts = () => {
    const [animated, setAnimated] = useState({});
    const countersRef = useRef([]);

    const handleWaypointEnter = (element, counterName) => {
        if (!animated[counterName] && element) {
            counterUp(element, {
                duration: 2000,
                delay: 16,
            });
            setAnimated(prevState => ({ ...prevState, [counterName]: true }));
        }
    };

    return (
        <div className="container-fluid bg-img py-5 mb-5" style={{ '--background-image': `url(${backgroundImage})` }}>
            <div className="container py-5">
                <div className="row gx-5 gy-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                <FontAwesomeIcon icon={faStar} className="text-white" />
                            </div>
                            <div className="ps-4">
                                <h6 className="text-primary text-uppercase">Our Experience</h6>
                                <Waypoint onEnter={() => handleWaypointEnter(countersRef.current[0], 'counter1')}>
                                    <h1 ref={(el) => countersRef.current[0] = el} className="display-5 text-white mb-0 counter">12345</h1>
                                </Waypoint>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                 <FontAwesomeIcon icon={faUsers} className="text-white" />
                            </div>
                            <div className="ps-4">
                                <h6 className="text-primary text-uppercase">Cake Specialist</h6>
                                <Waypoint onEnter={() => handleWaypointEnter(countersRef.current[1], 'counter2')}>
                                    <h1 ref={(el) => countersRef.current[1] = el} className="display-5 text-white mb-0 counter">12345</h1>
                                </Waypoint>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                 <FontAwesomeIcon icon={faCheck} className="text-white" />
                            </div>
                            <div className="ps-4">
                                <h6 className="text-primary text-uppercase">Complete Project</h6>
                                <Waypoint onEnter={() => handleWaypointEnter(countersRef.current[2], 'counter3')}>
                                    <h1 ref={(el) => countersRef.current[2] = el} className="display-5 text-white mb-0 counter">12345</h1>
                                </Waypoint>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                 <FontAwesomeIcon icon={faMugHot} className="text-white" />
                            </div>
                            <div className="ps-4">
                                <h6 className="text-primary text-uppercase">Happy Clients</h6>
                                <Waypoint onEnter={() => handleWaypointEnter(countersRef.current[3], 'counter4')}>
                                    <h1 ref={(el) => countersRef.current[3] = el} className="display-5 text-white mb-0 counter">12345</h1>
                                </Waypoint>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
