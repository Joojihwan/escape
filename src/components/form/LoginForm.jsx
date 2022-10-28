import React from 'react';

function LoginForm() {
    return (
        <form onSubmit={e=>{
            e.preventDefault();

            const username = e.target.username.value;
            const password = e.target.password.value;
            alert("Login Test\n" + "username : " + username + "\npassword : " + password);
        }}>
            <p><input id='username' placeholder='Username'></input></p>
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