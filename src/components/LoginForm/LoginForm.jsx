import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {login} from '../../redux/auth/authOperations';
import s from './LoginForm.module.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password, isChecked}));
        setEmail('');
        setPassword('');
        navigate('/');
    };

    const checkOnChange = (e) => {
        setIsChecked(e.target.checked);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email' className={s.wrap}>
                <input
                    className={s.input}
                    placeholder="Email"
                    type='email'
                    name='email'
                    required
                    value={email}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor='password' className={s.wrap}>
                <input
                    className={s.input}
                    placeholder="Password"
                    type='password'
                    name='password'
                    required
                    value={password}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="check" className={s.checkbox}>
                <input
                    className={s.check}
                    type="checkbox"
                    name="check"
                    checked={isChecked}
                    onChange={checkOnChange}
                />
                Remember me
            </label>

            <button type="submit" className={s.btn}>Login</button>
        </form>
    )
}

export default LoginForm;