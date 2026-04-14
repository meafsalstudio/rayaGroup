import React from 'react';
import ServiceBanner from './serviceBanner';
import ServiceList from './serviceList';
import HomeContact from '../home/homeContact';
import HomeTechnicalServices from '../home/homeTechnicalServices';

const Services = () => {
    return (
        <>
            <ServiceBanner />
            <ServiceList />
            <HomeTechnicalServices />
            <HomeContact />
        </>
    );
};

export default Services;
