import React from 'react';
import logo from '../../assets/images/logo.webp';
import flag1 from '../../assets/images/flag2.webp';
import flag2 from '../../assets/images/flag8.webp';
import flag3 from '../../assets/images/flag3.webp';
import flag4 from '../../assets/images/flag7.webp';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlineTag } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import esightLogo from '../../assets/images/esight-logo-white.png';

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="footerMain">
                    <div className="footerCol">
                        <h4>Our Companies</h4>
                        <div className="footerCompaniesList">
                            <div className="footerCompaniesBox">
                                <div className="flag">
                                    <img src={flag1} alt="" />
                                </div>
                                <div className="footerCompaniesBoxDetails">
                                    <h3>Raya Group s.r.o</h3>
                                    <ul>
                                        <li>
                                            <div className="icon"><HiOutlineLocationMarker /></div>
                                            <div className="details">
                                                <p>Ružová dolina 8<br />821 09 Bratislava</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><HiOutlineMail /></div>
                                            <div className="details">
                                                <a href="mailto:info@raya.group">info@raya.group</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footerCompaniesBox">
                                <div className="flag">
                                    <img src={flag1} alt="" />
                                </div>
                                <div className="footerCompaniesBoxDetails">
                                    <h3>Rohrbauleitung invest s.r.o.</h3>
                                    <ul>
                                        <li>
                                            <div className="icon"><HiOutlineLocationMarker /></div>
                                            <div className="details">
                                                <p>KVK nr. 89858042<br />Ružová dolina 8<br />821 09 Bratislava</p>
                                            </div>
                                        </li>
                                        {/* <li>
                                            <div className="icon"><HiOutlineTag /></div>
                                            <div className="details">
                                                <p>ID:01-09-392517</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><BiPhoneCall /></div>
                                            <div className="details">
                                                <a href="tel:+36306756655">+36 30 675 6655</a>
                                            </div>
                                        </li> */}
                                        <li>
                                            <div className="icon"><HiOutlineMail /></div>
                                            <div className="details">
                                                <a href="mailto:info@raya.group">info@raya.group</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footerCompaniesBox">
                                <div className="flag">
                                    <img src={flag1} alt="" />
                                </div>
                                <div className="footerCompaniesBoxDetails">
                                    <h3>RG welding s.r.o.</h3>
                                    <ul>
                                        <li>
                                            <div className="icon"><HiOutlineLocationMarker /></div>
                                            <div className="details">
                                                <p>Ružová dolina 16648/8<br />821 09 Bratislava</p>
                                            </div>
                                        </li>
                                        {/* <li>
                                            <div className="icon"><HiOutlineTag /></div>
                                            <div className="details">
                                                <p>VAT ID: NL865135009B01</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><BiPhoneCall /></div>
                                            <div className="details">
                                                <a href="tel:+421948311111">+421 948 311 111</a>
                                            </div>
                                        </li> */}
                                        <li>
                                            <div className="icon"><HiOutlineMail /></div>
                                            <div className="details">
                                                <a href="mailto:info@raya.group">info@raya.group</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footerCompaniesBox">
                                <div className="flag">
                                    <img src={flag1} alt="" />
                                </div>
                                <div className="footerCompaniesBoxDetails">
                                    <h3>RG support s.r.o.</h3>
                                    <ul>
                                        <li>
                                            <div className="icon"><HiOutlineLocationMarker /></div>
                                            <div className="details">
                                                <p>Ružová dolina 16648/8<br />821 09 Bratislava</p>
                                            </div>
                                        </li>
                                        {/* <li>
                                            <div className="icon"><BiPhoneCall /></div>
                                            <div className="details">
                                                <a href="tel:+919847808938">+91 9847808938</a>
                                            </div>
                                        </li> */}
                                        <li>
                                            <div className="icon"><HiOutlineMail /></div>
                                            <div className="details">
                                                <a href="mailto:info@raya.group">info@raya.group</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footerCompaniesBox">
                                <div className="flag">
                                    <img src={flag2} alt="" />
                                </div>
                                <div className="footerCompaniesBoxDetails">
                                    <h3>Raya Group BG EOOD</h3>
                                    <ul>
                                        <li>
                                            <div className="icon"><HiOutlineLocationMarker /></div>
                                            <div className="details">
                                                <p>Yambol 8600 , complex, № 2, entrance E, <br />Yambol Bulgharia</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><HiOutlineMail /></div>
                                            <div className="details">
                                                <a href="mailto:info@raya.group">info@raya.group</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footerCompaniesBox">
                                <div className="flag">
                                    <img src={flag3} alt="" />
                                </div>
                                <div className="footerCompaniesBoxDetails">
                                    <h3>Raya-Group B.V.</h3>
                                    <ul>
                                        <li>
                                            <div className="icon"><HiOutlineLocationMarker /></div>
                                            <div className="details">
                                                <p>Blokstallen 2, 4611 WB, <br />Bergen op Zoom<br />Netherlands</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><HiOutlineMail /></div>
                                            <div className="details">
                                                <a href="mailto:info@raya.group">info@raya.group</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footerCompaniesBox">
                                <div className="flag">
                                    <img src={flag4} alt="" />
                                </div>
                                <div className="footerCompaniesBoxDetails">
                                    <h3>Raya Outsourcing Europe Pvt Ltd</h3>
                                    <ul>
                                        <li>
                                            <div className="icon"><HiOutlineLocationMarker /></div>
                                            <div className="details">
                                                <p>XXXIII/447, First Floor<br />Thayankery Building<br />Edappally, Ernakulam<br />Kerala, India, 682024</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><BiPhoneCall /></div>
                                            <div className="details">
                                                <a href="tel:+9198467808938">+91 984678 08938</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><HiOutlineMail /></div>
                                            <div className="details">
                                                <a href="mailto:info@raya.group">info@raya.group</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div className="footerColDetailsList">
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
                            <div className="footerLinksSection">
                                <div className="footerLinksSectionBox">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="footerLinksSectionBox">
                                    <h4>Landline</h4>
                                    <ul>
                                        <li><a href="tel:+421238101943">+421 2 3810 1943</a></li>
                                    </ul>
                                    <h4 style={{ marginTop: "30px" }}>Hotline</h4>
                                    <ul>
                                        <li><a href="tel:0918746749">0918 746 749</a></li>
                                        <li><a href="tel:0918750333">0918 750 333</a></li>
                                        <li><a href="tel:0918750644">0918 750 644</a></li>
                                        <li><a href="tel:0918751301">0918 751 301</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerStrip">
                <div className="container">
                    <div className="footerStripMain">
                        <div className="footerStripCol">
                            <p>© 2025 Raya Outsourcing. All rights reserved.</p>
                        </div>
                        <div className="footerStripCol">
                            <p>Designed with</p> <IoHeart />  <a href="https://esightsolutions.com/" target='_blank'><img src={esightLogo} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
