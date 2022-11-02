import React from "react";
import {useSelector} from 'react-redux';

function LoginButton () {
    const isLogined = useSelector(state => {
        return state.login.isLogined;
    });
    console.log(isLogined);
    return (
        <div>
            <label>isLogined : {isLogined} </label>
        </div>
    );
}

export default LoginButton;