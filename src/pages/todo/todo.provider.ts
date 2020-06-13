import React, { useEffect } from "react"
import TodoGetAll, { getTodos } from "./providers/todo-getAll.provider"
import { setGlobalSnackbar } from "../../components/GlobalSnackbar/globalSnackbar.provider"

export default function useTodo() {
    useEffect(() => {
        setTimeout(() => {
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
        }, 1000)
    }, [])
}
