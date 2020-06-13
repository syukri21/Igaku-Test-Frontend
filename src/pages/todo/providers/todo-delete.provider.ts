import { createProvider } from "reactn"
import Api from "../../../api/api"
import { TodoCreateState, TodoDeleteParam } from "../@types/todo.types"

const TodoDelete = createProvider<TodoCreateState>({
    loading: false,
    error: null,
    data: { message: "" },
})

TodoDelete.addReducer("deleteTodo", (global: any, _, type, payload) => {
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

export async function deleteTodo(data: TodoDeleteParam) {
    const dispatch = TodoDelete.getDispatch()
    try {
        dispatch.deleteTodo("LOADING")
        const result = await Api.fetch({
            method: "DELETE",
            url: "/todos",
            data,
        })
        dispatch.deleteTodo("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.deleteTodo("ERROR")
        throw err
    }
}

export default TodoDelete
