import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import icon1 from '../../assets/images/service/icon1.webp';
import icon2 from '../../assets/images/service/icon2.webp';
import icon3 from '../../assets/images/service/icon3.webp';
import icon4 from '../../assets/images/service/icon4.webp';
import icon5 from '../../assets/images/service/icon5.webp';
import icon6 from '../../assets/images/service/icon6.webp';
import icon7 from '../../assets/images/service/icon7.webp';
import icon8 from '../../assets/images/service/icon8.webp';

const HomeTechnicalServices = () => {
    return (
        <section className="homeTechnicalServices">
            <div className="container">
                <div className="homeTechnicalServicesHead">
                    <div className="titleTag">
                        <div className="icon"><GiFlowerTwirl /></div>
                        <h3>Technical Services</h3>
                    </div>
                    <h2 className="title">Integrated Technical Services Delivering Operational Efficiency</h2>
                </div>
            </div>
            <div className="homeTechnicalServicesList">
                <div className="homeTechnicalServicesBox">
                    <div className="icon">
                        <img src={icon1} alt="icon1" />
                    </div>
                    <h4>Pipeline</h4>
                    <p>Pipeline installation and maintenance services ensuring safe efficient material transport</p>
                </div>
                <div className="homeTechnicalServicesBox">
                    <div className="icon">
                        <img src={icon2} alt="icon2" />
                    </div>
                    <h4>Construction</h4>
                    <p>We provide industrial construction services with a focus on quality, safety, and timely project delivery.</p>
                </div>
                <div className="homeTechnicalServicesBox">
                    <div className="icon">
                        <img src={icon3} alt="icon3" />
                    </div>
                    <h4>Electroinstallation</h4>
                    <p>Complete electrical installation solutions ensuring safe, efficient, and compliant industrial operations.</p>
                </div>
                <div className="homeTechnicalServicesBox">
                    <div className="icon">
                        <img src={icon4} alt="icon4" />
                    </div>
                    <h4>Shutdown Works</h4>
                    <p>Planned shutdown maintenance services minimizing downtime while ensuring safety efficiency.</p>
                </div>
                <div className="homeTechnicalServicesBox">
                    <div className="icon">
                        <img src={icon5} alt="icon5" />
                    </div>
                    <h4>Tanks Build</h4>
                    <p>Design, fabrication, and installation of industrial tanks built to meet strict quality and safety standards.</p>
                </div>
                <div className="homeTechnicalServicesBox">
                    <div className="icon">
                        <img src={icon6} alt="icon6" />
                    </div>
                    <h4>Training Courses</h4>
                    <p>Industry-focused training courses designed to enhance technical skills and safety compliance.</p>
                </div>
                <div className="homeTechnicalServicesBox">
                    <div className="icon">
                        <img src={icon7} alt="icon7" />
                    </div>
                    <h4>Heat-Exchange</h4>
                    <p>Installation and maintenance of heat exchange systems for optimized thermal performance and efficiency.</p>
                </div>
                <div className="homeTechnicalServicesBox">
                    <div className="icon">
                        <img src={icon8} alt="icon8" />
                    </div>
                    <h4>Production</h4>
                    <p>Operational support services ensuring smooth, efficient, and continuous industrial production processes.</p>
                </div>
            </div>
        </section>
    );
};

export default HomeTechnicalServices;
