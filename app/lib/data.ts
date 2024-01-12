import { sql } from "@vercel/postgres";
import { Todo } from "./definitions";

export const fetchTodos = async () => {
    try {
        const data = await sql<Todo[]>`SELECT * FROM todo`
        // console.log(data)
        return data.rows
    } catch (error) {
        console.error("Fetching todos error:", error);
        throw new Error("Failed to fetch todos.")
    }
}