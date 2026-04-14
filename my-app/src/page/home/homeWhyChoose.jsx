import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import whyChoose1 from '../../assets/images/whyChoose/img1.webp'
import whyChoose2 from '../../assets/images/whyChoose/img2.webp'
import whyChoose3 from '../../assets/images/whyChoose/img3.webp'
import whyChoose4 from '../../assets/images/whyChoose/img4.webp'

const HomeWhyChoose = () => {
    return (
        <section className="homeWhyChoose">
            <div className="container">
                <div className="homeWhyChooseMain">
                    <div className="homeWhyChooseCol1">
                        <div className="titleTag">
                            <div className="icon">
                                <GiFlowerTwirl />
                            </div>
                            <h3>Why Choose Us</h3>
                        </div>
                        <h2 className="title">Your Trusted Industrial Services Partner</h2>
                    </div>
                    <div className="homeWhyChooseCol2">
                        <div className="homeWhyChooseBox">
                            <div className="homeWhyChooseBoxThumbnail">
                                <img src={whyChoose1} alt="" />
                            </div>
                            <h4>Industry Expertise</h4>
                            <p>Years of hands-on experience delivering reliable solutions across complex industrial environments.</p>
                        </div>
                        <div className="homeWhyChooseBox">
                            <div className="homeWhyChooseBoxThumbnail">
                                <img src={whyChoose2} alt="" />
                            </div>
                            <h4>Skilled Workforce</h4>
                            <p>Highly trained professionals ensuring quality, safety, and efficiency in every project.</p>
                        </div>
                        <div className="homeWhyChooseBox">
                            <div className="homeWhyChooseBoxThumbnail">
                                <img src={whyChoose3} alt="" />
                            </div>
                            <h4>European Project Experience</h4>
                            <p>Proven track record of successfully executing projects across multiple European countries.</p>
                        </div>
                        <div className="homeWhyChooseBox">
                            <div className="homeWhyChooseBoxThumbnail">
                                <img src={whyChoose4} alt="" />
                            </div>
                            <h4>Commitment to Safety & Quality</h4>
                            <p>Strict adherence to international safety standards and quality control practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhyChoose;
