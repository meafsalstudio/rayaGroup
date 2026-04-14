import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";
import { PiAlarm, PiCalendarCheck, PiCheckCircle } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const AboutStory = () => {
    return (
        <section className="aboutStory">
            <div className="container">
                <div className="aboutStoryContent">
                    <div className="aboutStoryContentCol1">
                        <div className="titleTag">
                            <div className="icon"><GiFlowerTwirl /></div>
                            <h3>Our Story</h3>
                        </div>
                    </div>
                    <div className="aboutStoryContentCol2">
                        <h4>Raya Group is a young company founded in 2015 in Bratislava, Slovakia. We were able to be successful thanks to qualified staff and managerial expertise in the field. This is also proven by the fact that in many countries we have more than 100 or more people in several projects.</h4>
                        <p>Today, Raya Group employs more than 100 skilled professionals from the industry, and we continue to grow steadily. We hold standard certifications and permits, including NEN 4400.</p>
                    </div>
                </div>
                <div className="aboutStoryPoints">
                    <div className="aboutStoryPointsBox">
                        <div className="icon"><PiAlarm /></div>
                        <div className="aboutStoryPointsBoxContent">
                            <h4>Fast Service</h4>
                            <p>Fast Solutions, Delivered With Trusted Precision</p>
                        </div>
                    </div>
                    <div className="aboutStoryPointsBox">
                        <div className="icon"><AiOutlineSafetyCertificate /></div>
                        <div className="aboutStoryPointsBoxContent">
                            <h4>Expert Team</h4>
                            <p>Certified Industry Professionals Committed to Excellence</p>
                        </div>
                    </div>
                    <div className="aboutStoryPointsBox">
                        <div className="icon"><PiCalendarCheck /></div>
                        <div className="aboutStoryPointsBoxContent">
                            <h4>Decade Experience</h4>
                            <p>More Than Ten Years of Proven Industry Expertise</p>
                        </div>
                    </div>
                    <div className="aboutStoryPointsBox">
                        <div className="icon"><PiCheckCircle /></div>
                        <div className="aboutStoryPointsBoxContent">
                            <h4>Project Success</h4>
                            <p>Hundreds of Projects Completed With Precision</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
