import React from 'react';
import HomeImage from '../../assets/home_button.png'

function Footer() {
    return (
        <div className='footer'>
            <img className='home_image' src={HomeImage} />
        </div>
    );
}

export default Footer;