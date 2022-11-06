import {createSlice} from '@reduxjs/toolkit';

const LoginSlice = createSlice({
    name: "login",
    initialState: {isLogined: false},
    reducers: {
        login: (state, action)=>{
            state.value = true;
        },
        logout: (state, action)=>{
            state.value = false;
        },
    }
});

export default LoginSlice;
export const {login} = LoginSlice.actions;