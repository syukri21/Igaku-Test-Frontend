import { createProvider } from "reactn"
import Api from "../../../api/api"
import { TodoCreateState, TodoCreateParam } from "../@types/todo.types"

const TodoCreate = createProvider<TodoCreateState>()

TodoCreate.addReducer("createTodo", (global: any, _, type, payload) => {
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

export async function getTodos(data: TodoCreateParam) {
    const dispatch = TodoCreate.getDispatch()
    try {
        dispatch.createTodo("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: "/todos",
            data,
        })
        dispatch.createTodo("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.createTodo("ERROR")
        throw err
    }
}

export default TodoCreate
