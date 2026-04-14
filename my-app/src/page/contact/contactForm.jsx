import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import logo from '../../assets/images/logo.webp';
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const ContactForm = () => {
    return (
        <section className="contactForm">
            <div className="container">
                <div className="contactFormMain">
                    <div className="contactFormCol1">
                        <div className="footerSocialStrip">
                            <div className="footerSocialStripBox">
                                <div className="footerLogo">
                                    <img src={logo} alt="" />
                                </div>
                                <h3>Your trusted experts in the construction field</h3>
                                <div className="footerSocialLinks">
                                    <a href=""><FaInstagram /></a>
                                    <a href=""><GrFacebookOption /></a>
                                    <a href=""><FaYoutube /></a>
                                    <a href=""><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactFormCol2">
                        <div className="titleTag">
                            <div className="icon"><GiFlowerTwirl /></div>
                            <h3>Get in touch</h3>
                        </div>
                        <h2 className='title'>Fill out the form below to get in touch with us.</h2>
                        <form action="">
                            <div className="formGroup">
                                <label htmlFor="name">Name</label>
                                <input type="text" />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="email">Email</label>
                                <input type="email" />
                            </div>
                            <div className="formGroupTextarea">
                                <label htmlFor="message">Message</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="formBtnArea">
                                <button>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
