import React from 'react';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiBuildingOffice, PiAlarm } from "react-icons/pi";
// import trustBg from '../../assets/images/bannerTrustBg.webp';

const HomeBannerTrust = () => {
    return (
        <section className="homeBannerTrust">
            <div className="container">
                <div className="homeBannerTrustList">
                    <div className="homeBannerTrustListBox">
                        <div className="icon">
                            <AiOutlineSafetyCertificate />
                        </div>
                        <h2>Certified & Experienced Welders</h2>
                        <p>With over 10 years of experience in the industry, our team of certified and experienced welders is dedicated to providing top-notch welding services.</p>
                    </div>
                    <div className="homeBannerTrustListBox">
                        <div className="icon">
                            <PiBuildingOffice />
                        </div>
                        <h2>Residential & Commercial Solutions</h2>
                        <p>Our team of certified and experienced welders is dedicated to providing top-notch welding services to our clients.</p>
                    </div>
                    <div className="homeBannerTrustListBox">
                        <div className="icon">
                            <PiAlarm />
                        </div>
                        <h2>Quick Turnaround Time</h2>
                        <p>Our team of certified and experienced welders is dedicated to providing top-notch welding services to our clients.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBannerTrust;
