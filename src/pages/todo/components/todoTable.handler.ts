import TodoGetAll from "../providers/todo-getAll.provider"
import TodoDeleteIds from "../providers/todo-delete-ids.provider"

export default function useTodoTable() {
    const [todosState] = TodoGetAll.useGlobal()
    const [deleteIds, setDeleteIds] = TodoDeleteIds.useGlobal()

    function handleCheck(id: number) {
        const ids = new Set(deleteIds.ids)
        ids.add(id)
        const newIds = Array.from(ids)
        setDeleteIds({ ids: newIds })
    }

    function handleUnCheck(id: number) {
        const ids = new Set(deleteIds.ids)
        ids.delete(id)
        const newIds = Array.from(ids)
        setDeleteIds({ ids: newIds })
    }

    function handleChangeCheck(id: number) {
        return function (event: any) {
            const checked = event.target.checked
            if (checked) {
                handleCheck(id)
            } else {
                handleUnCheck(id)
            }
        }
    }

    return { todosState, handleCheck, handleChangeCheck }
}
