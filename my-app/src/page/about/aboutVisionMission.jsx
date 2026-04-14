import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import { PiCheckCircle } from "react-icons/pi";
import visionMissionImage from '../../assets/images/vision.webp';
import missionVisionImage from '../../assets/images/mission.webp';

const AboutVisionMission = () => {
    return (
        <section className="aboutVisionMission">
            <div className="container">
                <div className="aboutVisionMissionMain">
                    <div className="aboutVisionMissionBox">
                        <div className="aboutVisionMissionThumbnail">
                            <img src={visionMissionImage} alt="" />
                        </div>
                        <div className="aboutVisionMissionDetails">
                            <div className="titleTag">
                                <div className="icon"><GiFlowerTwirl /></div>
                                <h3>Our Vision</h3>
                            </div>
                            <h2 className="title">Shaping Tomorrow Through Innovation And Excellence</h2>
                            <p>To lead the industry through innovation, reliability, and excellence while delivering sustainable solutions that create lasting value for clients.</p>
                            <ul>
                                <li>
                                    <div className="icon"><PiCheckCircle /></div>
                                    <h5>Driving innovation through advanced, future-ready solutions</h5>
                                </li>
                                <li>
                                    <div className="icon"><PiCheckCircle /></div>
                                    <h5>Delivering consistent quality with trusted expertise</h5>
                                </li>
                                <li>
                                    <div className="icon"><PiCheckCircle /></div>
                                    <h5>Building long-term value through sustainable growth</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="aboutVisionMissionBox">
                        <div className="aboutVisionMissionDetails">
                            <div className="titleTag">
                                <div className="icon"><GiFlowerTwirl /></div>
                                <h3>Our Mission</h3>
                            </div>
                            <h2 className="title">Delivering Excellence Through Innovation And Trust</h2>
                            <p>Our mission is to deliver reliable, high-quality solutions through innovation, expertise, and commitment to exceeding client expectations.</p>
                            <ul>
                                <li>
                                    <div className="icon"><PiCheckCircle /></div>
                                    <h5>Deliver high-quality solutions with precision and reliability</h5>
                                </li>
                                <li>
                                    <div className="icon"><PiCheckCircle /></div>
                                    <h5>Exceed client expectations through innovation and expertise</h5>
                                </li>
                                <li>
                                    <div className="icon"><PiCheckCircle /></div>
                                    <h5>Build lasting partnerships based on trust and performance</h5>
                                </li>
                            </ul>
                        </div>
                        <div className="aboutVisionMissionThumbnail">
                            <img src={missionVisionImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutVisionMission;
