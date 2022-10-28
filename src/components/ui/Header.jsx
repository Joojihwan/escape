import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            HEADER
            <li><Link to={"/"}>HOME</Link></li>
            <li><Link to={"/login"}>LOGIN</Link></li>
            <li><Link to={"/settings"}>SETTINGS</Link></li>
            <li><Link to={"/signup"}>SIGNUP</Link></li>
        </div>
    );
}

export default Header;