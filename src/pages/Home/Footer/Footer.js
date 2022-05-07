import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className="container-fluid bg-dark">
            <p className='text-white text-center py-4 '>Copyright &copy; {year} Comfort Shoes. All rights reserved.</p>
        </div>
    );
};

export default Footer;