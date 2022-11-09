import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/login"}>LOGIN</Link></li>
                <li><Link to={"/settings"}>SETTINGS</Link></li>
                <li><Link to={"/signup"}>SIGNUP</Link></li>
                <li><Link to={"/testpage"}>TESTPAGE</Link></li>
            </ul>
        </div>
    );
}

export default Header;