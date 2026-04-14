import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import img1 from '../../assets/images/aboutImg1.webp';
import img2 from '../../assets/images/aboutImg2.webp';

const HomeAbout = () => {
    return (
        <section className="homeAbout">
            <div className="homeAboutStrip">
                <div className="container">
                    <div className="homeAboutStripMain">
                        <div className="homeAboutStripBox">
                            <h3>10 +</h3>
                            <p>Years of Experience</p>
                        </div>
                        <div className="homeAboutStripBox">
                            <h3>24*7</h3>
                            <p>Support</p>
                        </div>
                        <div className="homeAboutStripBox">
                            <h3>100+</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className="homeAboutStripBox">
                            <h3>100+</h3>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="homeAboutMain">
                    <div className="homeAboutCol1">
                        <div className="titleTag">
                            <div className="icon"><GiFlowerTwirl /></div>
                            <h3>About Raya Groups</h3>
                        </div>
                    </div>
                    <div className="homeAboutCol2">
                        <h2 className='title'>Raya Group is a young company founded in 2015 in Bratislava, Slovakia.</h2>
                        <p>We were able to be successful thanks to qualified staff and managerial expertise in the field. This is also proven by the fact that in many countries we have more than 100 or more people in several projects.</p>
                        <a href="/about">Explore More</a>
                    </div>
                    <div className="homeAboutCol3">
                        <div className="homeAboutImgBox1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="homeAboutImgBox2">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
