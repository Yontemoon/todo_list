"use client"

import Link from "next/link"
import UpdateTodo from "./ui/todo/UpdateTodo"
import DeleteTodo from "./ui/todo/DeleteTodo"
import { useUserContext } from "./providers/UserProvider"
import { Todo } from "./lib/definitions"

export default function Home() {

  const { data } = useUserContext()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/create">
        <p>Add New Task</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>
              Task Info
            </th>
            <th>
              Finish Time
            </th>
            <th>
              Status
            </th>
            <th>
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((todo) => (
            <tr key={todo.id}>
              <td>
                {todo.task}
              </td>
              <td>
                {todo.finish}
              </td>
              <td>
                {todo.importance}
              </td>
              <td>
                <div className="flex">
                  <UpdateTodo id={todo.id}/>
                  <DeleteTodo id={todo.id}/>
                </div>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </main>
  )
}
