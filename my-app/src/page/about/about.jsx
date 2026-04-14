import React from 'react';
import AboutBanner from './aboutBanner';
import AboutStory from './aboutStory';
import AboutVisionMission from './aboutVisionMission';
import HomeContact from '../home/homeContact';

const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutStory />
            <AboutVisionMission />
            <HomeContact />
        </>
    );
};

export default About;
