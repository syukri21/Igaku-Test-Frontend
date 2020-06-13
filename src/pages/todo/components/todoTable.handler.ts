import TodoGetAll, { getTodos } from "../providers/todo-getAll.provider"
import { useEffect } from "react"
import { setGlobalSnackbar } from "../../../components/GlobalSnackbar/globalSnackbar.provider"

export default function useTodoTable() {
    const [todosState] = TodoGetAll.useGlobal()
    console.log("useTodoTable -> todosState", todosState)

    return { todosState }
}
