import React from 'react';
import { GiFlowerTwirl } from "react-icons/gi";

const HomeContact = () => {
    return (
        <section className="homeContact">
            <div className="container">
                <div className="homeContactMain">
                    <div className="homeContactCol1">
                        <div className="titleTag">
                            <div className="icon"><GiFlowerTwirl /></div>
                            <h3>Get in touch</h3>
                        </div>
                        <h2 className='title'>Let’s Discuss Your Project Requirements</h2>
                    </div>
                    <div className="homeContactCol2">
                        <a href="/contact">Contact Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
