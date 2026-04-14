import React from "react";

const ContactMap = () => {
    return (
        <section className="contactMap">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13480.649750219396!2d76.30344042512431!3d10.011244082309647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d06c95aec1b%3A0x29a7c6377007e5e1!2sPrestige%20TMS%20Square!5e0!3m2!1sen!2sin!4v1766473063554!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default ContactMap;
