export type Todo = {
    id: number | string
    task: string
    finish: string
    importance: "Ongoing" | "Complete" | "Critical"
}