import { useEffect } from "react"
import { getTodos } from "./providers/todo-getAll.provider"
import { setGlobalSnackbar } from "../../components/GlobalSnackbar/globalSnackbar.provider"
import TodoDelete, { deleteTodo } from "./providers/todo-delete.provider"
import TodoDeleteIds from "./providers/todo-delete-ids.provider"

export default function useTodo() {
    const [deleteIdsState, setDeleteIds] = TodoDeleteIds.useGlobal()
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
        if (deleteIdsState.ids?.length === 0) {
            return setGlobalSnackbar("SHOW", {
                message: `Choose one item!`,
                severity: "warning",
            })
        }
        deleteTodo({ ids: deleteIdsState.ids }).then(() => {
            getTodos().then(() => {
                setGlobalSnackbar("SHOW", {
                    message: `${deleteIdsState.ids?.length} items deleted`,
                    severity: "success",
                })
                setDeleteIds({ ids: [] })
            })
        })
    }

    return { handleDelete, todoDeleteState }
}
