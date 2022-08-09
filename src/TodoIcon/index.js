import React from "react";
import './TodoIcon.css';
import { HiCheck } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";


const iconTypes = {
    "check": color => (
        <HiCheck className="Icon-svg icon-svg--check" fill={color}/>
    ),
    "delete": color => (
        <IoTrashOutline className="Icon-svg icon-svg--delete" fill={color}/>
    ),
};


function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}


export { TodoIcon };