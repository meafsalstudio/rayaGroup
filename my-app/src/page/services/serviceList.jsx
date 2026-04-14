import React, { useState } from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import serviceImg1 from '../../assets/images/service/servBg1.webp';
import serviceImg2 from '../../assets/images/service/servBg2.webp';
import serviceImg3 from '../../assets/images/service/servBg3.webp';
import serviceImg4 from '../../assets/images/service/servBg4.webp';
import { TfiClose } from "react-icons/tfi";

const ServiceList = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleEnquireClick = (serviceName) => {
        setSelectedService(serviceName);
        setIsPopupOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedService("");
        document.body.style.overflow = "inherit";
    };

    return (
        <>

            <div className={`equiryFormPopup ${isPopupOpen ? 'equiryFormPopupActive' : ''}`}>
                <div className="equiryFormPopupBox">
                    <div className="equiryFormPopupBoxClose" onClick={closePopup}><TfiClose /></div>
                    <h2>Let’s Discuss Your Project Today</h2>
                    <p>We ’ll get back within a day.</p>
                    <form action="">
                        <div className="formGroup">
                            <label htmlFor="name">Name</label>
                            <input type="text" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="service">Service</label>
                            <input type="text" value={selectedService} readOnly />
                        </div>
                        <div className="formGroupTextarea">
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="formBtnArea">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

            <section className="serviceList">
                <div className="container">
                    <div className="serviceListHead">
                        <div className="titleTag">
                            <div className="icon"><GiFlowerTwirl /></div>
                            <h3>Our Main Services</h3>
                        </div>
                        <h2 className='title'>Complete welding service solutions you can trust</h2>
                    </div>
                </div>
                <div className="serviceListMianSevices">
                    <div className="serviceListMianSevicesBox">
                        <div className="serviceListMianSevicesBoxThumbnail">
                            <img src={serviceImg1} alt="" />
                        </div>
                        <div className="container">
                            <div className="serviceListMianSevicesBoxDetails">
                                <h3 className='title'>Industrial Installations</h3>
                                <p>We deliver end-to-end industrial installation services, managing equipment assembly, system integration, and on-site execution with precision, safety, and efficiency across diverse industries.</p>
                                <div className="enquireBtn" onClick={() => handleEnquireClick("Industrial Installations")}>Enquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceListMianSevicesBox">
                        <div className="serviceListMianSevicesBoxThumbnail">
                            <img src={serviceImg2} alt="" />
                        </div>
                        <div className="container">
                            <div className="serviceListMianSevicesBoxDetails">
                                <h3 className='title'>Pre-Production</h3>
                                <p>We support the pre-production phase by ensuring equipment setup, process alignment, testing, and workforce coordination are completed efficiently, enabling a smooth and timely transition into full-scale production.</p>
                                <div className="enquireBtn" onClick={() => handleEnquireClick("Pre-Production")}>Enquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceListMianSevicesBox">
                        <div className="serviceListMianSevicesBoxThumbnail">
                            <img src={serviceImg3} alt="" />
                        </div>
                        <div className="container">
                            <div className="serviceListMianSevicesBoxDetails">
                                <h3 className='title'>Personal Leasing</h3>
                                <p>We provide qualified and reliable personnel leasing services, supplying experienced workers tailored to project requirements, ensuring flexibility, efficiency, and continuity across industrial operations.</p>
                                <div className="enquireBtn" onClick={() => handleEnquireClick("Personal Leasing")}>Enquire Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceListMianSevicesBox">
                        <div className="serviceListMianSevicesBoxThumbnail">
                            <img src={serviceImg4} alt="" />
                        </div>
                        <div className="container">
                            <div className="serviceListMianSevicesBoxDetails">
                                <h3 className='title'>Training of Workers</h3>
                                <p>We deliver structured training programs designed to enhance technical skills, safety awareness, and operational efficiency, ensuring workers are fully prepared to meet industry standards and project demands.</p>
                                <div className="enquireBtn" onClick={() => handleEnquireClick("Training of Workers")}>Enquire Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServiceList;
