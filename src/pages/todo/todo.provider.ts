import React, { useEffect } from "react"
import TodoGetAll, { getTodos } from "./providers/todo-getAll.provider"
import { setGlobalSnackbar } from "../../components/GlobalSnackbar/globalSnackbar.provider"

export default function useTodo() {
    const dispatch = TodoGetAll.useDispatch()
    const [, updateState] = React.useState()
    const forceUpdate = React.useCallback(() => updateState({}), [])

    useEffect(() => {
        dispatch.getTodos("LOADING")
        getTodos()
            .then((data) => {
                console.log("useTodo -> data", data)
            })
            .catch((error) => {
                setGlobalSnackbar("SHOW", {
                    message: "Token Expired!",
                    severity: "error",
                })
                window.localStorage.clear()
                window.location.reload()
            })
    }, [])
}
