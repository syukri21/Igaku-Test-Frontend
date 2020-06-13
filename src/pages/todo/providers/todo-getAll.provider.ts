import { createProvider } from "reactn"
import Api from "../../../api/api"
import { TodosGetState } from "../@types/todo.types"

const TodoGetAll = createProvider<TodosGetState>({
    loading: false,
    error: null,
})

TodoGetAll.addReducer("getTodos", (global: any, _, type, payload) => {
    switch (type) {
        case "LOADING":
            global.loading = true
            break
        case "ERROR":
            global.loading = false
            global.error = payload
            break
        case "SUCCESS":
            global.loading = false
            global.error = null
            global.data = payload
            break
    }
    return global
})

export async function getTodos() {
    try {
        const result = await Api.fetch({
            method: "GET",
            url: "/todos",
        })
        return result.data
    } catch (err) {
        throw err
    }
}

export default TodoGetAll
