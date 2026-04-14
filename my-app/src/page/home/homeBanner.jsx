import React from 'react';
import bannerVideo from '../../assets/videos/banner.mp4';
import bannerVideoWebm from '../../assets/videos/banner.webm';

const HomeBanner = () => {
    return (
        <section className="homeBanner">
            <div className="bannerVideo">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={bannerVideo} type="video/mp4" />
                    <source src={bannerVideoWebm} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="container">
                <div className="bannerContent">
                    <h1>Uniting the World with Expertise in Welding!</h1>
                    <h2>Raya Group</h2>
                    <p>Raya Group is a leading welding company that provides top-notch welding services to clients all over the world.</p>
                    <a href="/contact">Get a Quote</a>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
