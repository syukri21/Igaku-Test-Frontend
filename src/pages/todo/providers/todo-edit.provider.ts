import { createProvider } from "reactn"
import Api from "../../../api/api"
import { TodoType, TodoEditState, TodoEditParam } from "../@types/todo.types"

const TodoEdit = createProvider<TodoEditState>()

TodoEdit.addReducer("editTodo", (global: any, _, type, payload) => {
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

export async function getTodos(data: TodoEditParam) {
    const dispatch = TodoEdit.getDispatch()
    try {
        dispatch.editTodo("LOADING")
        const result = await Api.fetch({
            method: "PATCH",
            url: "/todos",
            data,
        })
        dispatch.editTodo("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.editTodo("ERROR")
        throw err
    }
}

export default TodoEdit
