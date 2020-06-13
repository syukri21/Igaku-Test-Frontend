import { useEffect } from "react"
import TodoGetAll, { getTodos } from "../providers/todo-getAll.provider"

export default function useTodoTable() {
    const [todos] = TodoGetAll.useGlobal()

    useEffect(() => {
        getTodos()
    }, [])

    return { data: todos }
}
