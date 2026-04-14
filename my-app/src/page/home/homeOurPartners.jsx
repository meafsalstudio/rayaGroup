import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import companyImg from '../../assets/images/companyImg.webp';
import company1 from '../../assets/images/companies/img1.png';
import company2 from '../../assets/images/companies/img2.png';
import company3 from '../../assets/images/companies/img3.png';
import company4 from '../../assets/images/companies/img4.png';

const HomeOurPartners = () => {
    return (
        <section className="homeOurPartners">
            <div className="container">
                <div className="homeOurPartnersHead">
                    <div className="titleTag">
                        <div className="icon"><GiFlowerTwirl /></div>
                        <h3>Our Partners</h3>
                    </div>
                    <h2 className='title'>Strong Partnerships Driving Mutual Success</h2>
                </div>
                <div className="homeOurPartnersBody">
                    <div className="homeOurPartnersBodyThumbnail">
                        <img src={companyImg} alt="" />
                    </div>
                    <div className="homeOurPartnersBodyContent">
                        <div className="homeOurPartnersBodyContentBox">
                            <h3>1250<sup>+</sup></h3>
                            <p>Refreshed in 2025</p>
                        </div>
                        <div className="homeOurPartnersBodyContentBox">
                            <h3>100<sup>+</sup></h3>
                            <p>Project Completed</p>
                        </div>
                        <div className="homeOurPartnersBodyContentBox">
                            <h3>10<sup>+</sup></h3>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="homeOurPartnersList">
                    <div className="homeOurPartnersBox">
                        <img src={company1} alt="" />
                    </div>
                    <div className="homeOurPartnersBox">
                        <img src={company2} alt="" />
                    </div>
                    <div className="homeOurPartnersBox">
                        <img src={company3} alt="" />
                    </div>
                    <div className="homeOurPartnersBox">
                        <img src={company4} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOurPartners;
