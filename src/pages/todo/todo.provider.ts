import { useEffect } from "react"
import { getTodos } from "./providers/todo-getAll.provider"
import { setGlobalSnackbar } from "../../components/GlobalSnackbar/globalSnackbar.provider"
import TodoDelete, { deleteTodo } from "./providers/todo-delete.provider"
import TodoDeleteIds from "./providers/todo-delete-ids.provider"
import UserActive, { getUser } from "./providers/user-active.provider"

export default function useTodo() {
    const [deleteIdsState, setDeleteIds] = TodoDeleteIds.useGlobal()
    const [todoDeleteState] = TodoDelete.useGlobal()
    const [userActiveState] = UserActive.useGlobal()

    useEffect(() => {
        getTodos()
            .then((data) => {
                getUser().catch(() => {
                    window.localStorage.clear()
                    window.location.reload()
                })
            })
            .catch(() => {
                setGlobalSnackbar("SHOW", {
                    message: "Token Expired!",
                    severity: "error",
                })
            })
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

    return { handleDelete, todoDeleteState, deleteIdsState, user: userActiveState }
}
