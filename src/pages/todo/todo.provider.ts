import { useEffect } from "react"
import { getTodos } from "./providers/todo-getAll.provider"
import { setGlobalSnackbar } from "../../components/GlobalSnackbar/globalSnackbar.provider"

export default function useTodo() {
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
}
