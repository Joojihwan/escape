import React from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import HomeImage from '../../assets/home_button.png';
import Search from '../../assets/search.png';
import './Footer.css';

function Footer() {
    const location = useLocation();
    if(location.pathname == '/') {
        return (
            <div></div>
        );
    }
    return (
        <div className='footer'> 
            <ul>
                <li><Link to={"/"}><img className='home_image' src={HomeImage} /></Link></li>
                <li><Link to={"/list"}><img className='search_image' src={Search} /></Link></li>
            </ul>
        </div>
    );
}

export default Footer;