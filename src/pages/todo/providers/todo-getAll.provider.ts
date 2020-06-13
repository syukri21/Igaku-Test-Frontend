import { createProvider } from "reactn"
import Api from "../../../api/api"
import { TodosGetState } from "../@types/todo.types"

const TodoGetAll = createProvider<TodosGetState[]>()

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
    const dispatch = TodoGetAll.getDispatch()
    try {
        dispatch.getTodos("LOADING")
        const result = await Api.fetch({
            method: "GET",
            url: "/todos",
        })
        dispatch.getTodos("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.getTodos("ERROR")
        throw err
    }
}

export default TodoGetAll
