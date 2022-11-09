import React from 'react';
import LoginForm from '../../components/form/LoginForm';
import {useSelector} from 'react-redux';
import LoginButton from '../../components/ui/LoginButton';

function Login() {
    const isLogined = useSelector(state=>state.login.isLogined);
    return (
        <div>
            <h3>{isLogined}</h3>
            <LoginForm/>
            <LoginButton/>
        </div>
    );
}

export default Login;