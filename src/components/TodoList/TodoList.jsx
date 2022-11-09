import React from "react";
import {useSelector} from "react-redux";
import s from "./TodoList.module.css"

const TodoList = () => {
    const todo = useSelector(state => state.todo.item)

    return (
        <>
            <ol className={s.list}>
                {todo.map(({id, text}) => (
                    <li className={s.item} key={id}>{text}</li>
                ))
                }
            </ol>
        </>
    )
}

export default TodoList;