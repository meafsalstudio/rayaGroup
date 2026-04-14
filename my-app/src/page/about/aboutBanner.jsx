import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import aboutBg from '../../assets/images/aboutBanner.webp';

const AboutBanner = () => {
    return (
        <section className="aboutBanner">
            <div className="container">
                <div className="aboutBannerMain">
                    <div className="aboutBannerContent">
                        <div className="titleTag">
                            <div className="icon"><GiFlowerTwirl /></div>
                            <h3>About Raya Groups</h3>
                        </div>
                        <h2>Your trusted experts</h2>
                        <h4>in the construction field</h4>
                    </div>
                    <div className="aboutBannerThumbnail">
                        <img src={aboutBg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;
