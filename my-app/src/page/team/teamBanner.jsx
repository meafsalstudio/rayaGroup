import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import teamBg from '../../assets/images/teamBg.webp';

const TeamBanner = () => {
    return (
        <section className="serviceBanner">
            <div className="container">
                <div className="serviceBannerMain">
                    <div className="serviceBannerContent">
                        <div className="titleTag">
                            <div className="icon"><GiFlowerTwirl /></div>
                            <h3>Our Team</h3>
                        </div>
                        <h2>Our Skilled Team</h2>
                        <h4>Driving Excellence Forward</h4>
                    </div>
                    <div className="serviceBannerThumbnail">
                        <img src={teamBg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamBanner;
