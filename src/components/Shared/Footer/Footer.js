import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import Services from './Services';

const Footer = () => {
    return (
        <div>
            <Services />
            <FooterTop />
            <FooterBottom />
        </div>
    );
};

export default Footer;