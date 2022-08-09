import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li>
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`${props.completed && 'TodoItemCompleted'}`}>
                {props.text}
            </p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };