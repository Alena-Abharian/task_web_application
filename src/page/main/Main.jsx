import React, {useEffect} from "react";
import TodoList from "../../components/TodoList";
import {useDispatch} from "react-redux";
import {getAllTodos} from "../../redux/todo/todoOperations";
import s from './Main.module.css'
import ButtonLogout from "../../components/ButtonLogout/ButtonLogout";
import {logOut} from "../../redux/auth/authOperations";

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
            .then(({error}) => {
                if (error) {
                    dispatch(logOut())
                }
            })

    }, [dispatch]);

    return (
        <>
            <div className={s.wrap}>
                <h1 className={s.title}>Things to do</h1>
                <TodoList/>
            </div>
            <ButtonLogout/>
        </>

    )
}

export default Main;