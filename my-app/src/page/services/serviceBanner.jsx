import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import aboutBg from '../../assets/images/aboutBanner.webp';

const ServiceBanner = () => {
    return (
        <section className="serviceBanner">
            <div className="container">
                <div className="serviceBannerMain">
                    <div className="serviceBannerContent">
                        <div className="titleTag">
                            <div className="icon"><GiFlowerTwirl /></div>
                            <h3>Our Services</h3>
                        </div>
                        <h2>Innovative Services</h2>
                        <h4>Designed For Modern Business Needs</h4>
                    </div>
                    <div className="serviceBannerThumbnail">
                        <img src={aboutBg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;
