import React from 'react';
import LoginForm from '../../components/form/LoginForm';
import {useSelector} from 'react-redux';
import TestComponent from '../../components/ui/TestComponent';

function Login() {
    const isLogined = useSelector(state=>state.login.isLogined);
    return (
        <div>
            <h3>{isLogined}</h3>
            <LoginForm/>
            <TestComponent 
                test="test"
            />
        </div>
    );
}

export default Login;