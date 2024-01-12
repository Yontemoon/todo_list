"use client"
import TodoForm from "@/app/ui/todo/TodoForm";
import { useUserContext } from "../../providers/UserProvider"

const EditPage = ({params}: {params: {id: number | string}}) => {
    const {data} = useUserContext()
    const id = params.id
    const todo = data?.find((todo) => todo.id == id)

    return (
        <main className="flex justify-center items-center">
            {todo !== undefined && <TodoForm todo={todo}/>}
        </main>
    );
};

export default EditPage;