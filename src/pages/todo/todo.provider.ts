import { useEffect } from "react"
import { getTodos } from "./providers/todo-getAll.provider"
import { setGlobalSnackbar } from "../../components/GlobalSnackbar/globalSnackbar.provider"
import TodoDelete, { deleteTodo } from "./providers/todo-delete.provider"
import TodoDeleteIds from "./providers/todo-delete-ids.provider"

export default function useTodo() {
    const [deleteIdsState] = TodoDeleteIds.useGlobal()
    const [todoDeleteState] = TodoDelete.useGlobal()

    useEffect(() => {
        setTimeout(() => {
            getTodos()
                .then((data) => {
                    console.log("useTodo -> data", data)
                })
                .catch(() => {
                    setGlobalSnackbar("SHOW", {
                        message: "Token Expired!",
                        severity: "error",
                    })
                    window.localStorage.clear()
                    window.location.reload()
                })
        }, 1000)
    }, [])

    function handleDelete() {
        deleteTodo({ ids: deleteIdsState.ids }).then(() => {
            getTodos()
        })
    }

    return { handleDelete, todoDeleteState }
}
