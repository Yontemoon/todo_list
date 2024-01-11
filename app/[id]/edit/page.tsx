import { DATA } from "@/app/data";
import TodoForm from "@/app/ui/todo/TodoForm";
import Link from "next/link";

const page = ({params}: {params: {id: number}}) => {
    const id = params.id
    // console.log(id)
    // console.log(typeof id)
    const todo = DATA.find((todo) => todo.id == id)
    console.log(todo)
    return (
        <main className="flex justify-center items-center">
            {todo !== undefined && <TodoForm todo={todo}/>}
        </main>
    );
};

export default page;