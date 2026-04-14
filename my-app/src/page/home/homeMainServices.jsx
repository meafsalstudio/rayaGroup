import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import service1 from '../../assets/images/service/img1.webp';
import service2 from '../../assets/images/service/img2.webp';
import service3 from '../../assets/images/service/img3.webp';
import service4 from '../../assets/images/service/img4.webp';

const HomeMainServices = () => {
    return (
        <section className="homeMainServices">
            <div className="container">
                <div className="homeMainServicesHead">
                    <div className="titleTag">
                        <div className="icon"><GiFlowerTwirl /></div>
                        <h3>Our Main Services</h3>
                    </div>
                    <h2 className='title'>Complete welding service solutions you can trust</h2>
                </div>
                <div className="homeMainServicesMain">
                    <div className="homeMainServicesBox">
                        <h4>Industrial Installations</h4>
                        <div className="homeMainServicesBoxDetails">
                            <div className="homeMainServicesBoxDetailsThumbnail">
                                <img src={service1} alt="" />
                            </div>
                            <div className="homeMainServicesBoxDetailsContent">
                                <h5>Complete Industrial Setup Solutions</h5>
                                <p>We deliver end-to-end industrial installation services, managing equipment assembly, system integration, and on-site execution with precision, safety, and efficiency across diverse industries.</p>
                                <a href="/contact">Contact Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="homeMainServicesBox">
                        <h4>Pre-Production</h4>
                        <div className="homeMainServicesBoxDetails">
                            <div className="homeMainServicesBoxDetailsThumbnail">
                                <img src={service2} alt="" />
                            </div>
                            <div className="homeMainServicesBoxDetailsContent">
                                <h5>Preparing Systems for Production Readiness</h5>
                                <p>We support the pre-production phase by ensuring equipment setup, process alignment, testing, and workforce coordination are completed efficiently, enabling a smooth and timely transition into full-scale production.</p>
                                <a href="/contact">Contact Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="homeMainServicesBox">
                        <h4>Personal Leasing</h4>
                        <div className="homeMainServicesBoxDetails">
                            <div className="homeMainServicesBoxDetailsThumbnail">
                                <img src={service3} alt="" />
                            </div>
                            <div className="homeMainServicesBoxDetailsContent">
                                <h5>Skilled Workforce Solutions on Demand</h5>
                                <p>We provide qualified and reliable personnel leasing services, supplying experienced workers tailored to project requirements, ensuring flexibility, efficiency, and continuity across industrial operations.</p>
                                <a href="/contact">Contact Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="homeMainServicesBox">
                        <h4>Training of Workers</h4>
                        <div className="homeMainServicesBoxDetails">
                            <div className="homeMainServicesBoxDetailsThumbnail">
                                <img src={service4} alt="" />
                            </div>
                            <div className="homeMainServicesBoxDetailsContent">
                                <h5>Building Skilled and Safety-Ready Workforces</h5>
                                <p>We deliver structured training programs designed to enhance technical skills, safety awareness, and operational efficiency, ensuring workers are fully prepared to meet industry standards and project demands.</p>
                                <a href="/contact">Contact Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMainServices;
