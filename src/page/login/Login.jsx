import React from 'react';
import LoginForm from "../../components/LoginForm";
import s from "./Login.module.css";

const Login = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Welcome</h1>
            <LoginForm/>
        </div>
    )
}

export default Login;