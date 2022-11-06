import React, {state, useState} from 'react';
import Admin from '../../data/Admin';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../hooks/LoginSlice';
import { setCookie } from '../../hooks/Cookie';

function tmp_login(id, password) {
    return (Admin.id === id) && (Admin.password === password);
}

function LoginForm() {
    const dispatch = useDispatch();
    const [isLogined, setIsLogined] = useState(useSelector(state => {
        return state.login.isLogined;
    }));
    console.log(isLogined);
    return (
        <form onSubmit={e=>{
            e.preventDefault();

            const id = e.target.id.value;
            const password = e.target.password.value;
            
            dispatch(login());
            setCookie({
                Token : 'testToken',
            });
            if(tmp_login(id,password)) setIsLogined(true);
        }}>
            <p><input name='id' placeholder='ID'></input></p>
            <p><input name='password' placeholder='Password'></input></p>                    
            <button 
                onSubmit={(event) => {
                    event.preventDefault();
                    alert("로그인 테스트");
            }}>
                로그인
            </button>
        </form>
    );
}

export default LoginForm;