export type Todo = {
    id: number
    task: string
    finish: string
    importance: "Ongoing" | "Complete" | "Critical"
}