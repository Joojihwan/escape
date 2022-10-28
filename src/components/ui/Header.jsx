import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav>
            HEADER
            <Link to={"/"}>HOME</Link>
            <Link to={"/login"}>LOGIN</Link>
            <Link to={"/settings"}>SETTINGS</Link>
            <Link to={"/signup"}>SIGNUP</Link>
        </nav>
    );
}

export default Header;