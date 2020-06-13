import { createProvider } from "reactn"
import { TodoDeleteParam } from "../@types/todo.types"

const TodoDeleteIds = createProvider<TodoDeleteParam>({
    ids: [],
})

TodoDeleteIds.addReducer("handleIds", (global: any, _, type, payload) => {
    return payload
})

export async function changeIds(data: TodoDeleteParam) {
    const dispatch = TodoDeleteIds.getDispatch()
    dispatch.handleIds(data)
}

export default TodoDeleteIds
