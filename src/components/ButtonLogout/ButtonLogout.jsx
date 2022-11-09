import React from 'react';
import s from './ButtonLogout.module.css'
import {AiOutlineLogout} from "react-icons/ai"
import {useDispatch} from "react-redux";
import {logOut} from "../../redux/auth/authOperations";

const ButtonLogout = () => {
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(logOut())
    }

    return (
        <button onClick={onClickHandler} className={s.btn}>
            <AiOutlineLogout size={30}/>
        </button>
    );
}

export default ButtonLogout;