"use client";

import trash from "../../icons/trash-alt-f.svg"
import Image from "next/image";
import { useUserContext } from "@/app/providers/UserProvider";


const DeleteTodo = ({id}: {id: number}) => {
    const {data, setData} = useUserContext()

    const handleDelete = (id: number) => {
        const deleteTodo = data?.filter((todo) => todo.id !== id);
        if (deleteTodo) {
            setData(deleteTodo)
            window.localStorage.setItem("LocalStorageData", JSON.stringify(deleteTodo))
        }
        //possibly add a message that says succssully deleted
    }
    

    return (
        <div>
            <button onClick={() => handleDelete(id)}>
                <Image src={trash} alt="trash"/>
            </button>
        </div>
    );
};

export default DeleteTodo;