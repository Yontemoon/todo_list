"use client";

import trash from "../../icons/trash-alt-f.svg"
import Image from "next/image";


const handleDelete = (id: number) => {
    console.log(id)
}
const DeleteTodo = ({id}: {id: number}) => {



    return (
        <div>
            <button onClick={() => handleDelete(id)}>
                <Image src={trash} alt="trash"/>
            </button>
        </div>
    );
};

export default DeleteTodo;