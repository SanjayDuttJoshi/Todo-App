import React from "react";
import { Checkbox } from "./Checkbox";
import { AiFillDelete } from "react-icons/ai";

export const TodoRow = (props) => {
    const onChackBoxChange = () => {
        props.onStatusChange(props.children);
    };
    const onDelete = () => {
        props.onDelete(props.children, props.done);
    };

    return (
        <div className="flex text-2xl  font-bold justify-between  items-center px-2 bg-green-200 border  border-white shadow-sm mt-1">
            <div className="flex gap-4">
            <Checkbox checked={props.done} onChange={onChackBoxChange} />
            <span>{props.children} </span>

            </div>
            <AiFillDelete onClick={onDelete} className=" text-blue-600" />
        </div>
    );
};