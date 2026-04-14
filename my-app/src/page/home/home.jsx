import React from 'react';
import HomeBanner from './homeBanner';
import HomeBannerTrust from './homeBannerTrust';
import HomeAbout from './homeAbout';
import HomeMainServices from './homeMainServices';
import HomeTechnicalServices from './homeTechnicalServices';
import HomeWhyChoose from './homeWhyChoose';
import HomeOurPartners from './homeOurPartners';
import HomeProjects from './homeProjects';
import HomeContact from './homeContact';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <HomeBannerTrust />
            <HomeAbout />
            <HomeMainServices />
            <HomeTechnicalServices />
            <HomeWhyChoose />
            <HomeOurPartners />
            <HomeProjects />
            <HomeContact />
        </>
    );
};

export default Home;
