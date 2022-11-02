import React from "react";
import cookies from 'react-cookies';

function setCookie(data) {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 1);

    cookies.save('loginCookie', {
        path: '/',
        expires,
        data,
        // secure: true,
        // httpOnly: true,
    })
}

function getCookie() {
    const local_cookie = cookies.load('loginCookie');
    return local_cookie;
}

function Cookie () {
    return (
        <div>

        </div>
    );
}

export default Cookie;
export {setCookie, getCookie};