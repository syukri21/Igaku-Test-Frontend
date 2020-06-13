import TodoGetAll from "../providers/todo-getAll.provider"

export default function useTodoTable() {
    const [todosState] = TodoGetAll.useGlobal()

    return { todosState }
}
