import TodoGetAll, { getTodos } from "../providers/todo-getAll.provider"
import TodoDeleteIds from "../providers/todo-delete-ids.provider"
import { useState } from "reactn"
import { todoEdit } from "../providers/todo-edit.provider"
import { setGlobalSnackbar } from "../../../components/GlobalSnackbar/globalSnackbar.provider"

export default function useTodoTable() {
    const [todosState] = TodoGetAll.useGlobal()
    const [deleteIds, setDeleteIds] = TodoDeleteIds.useGlobal()
    const [editId, setEditId] = useState<number | null>()
    const [editData, setEditData] = useState<any>()

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

    function handleChangeSwitch(event: any) {
        setEditData({
            ...editData,
            status: event.target.checked,
        })
    }
    function handleChangeTask(event: any) {
        setEditData({
            ...editData,
            task: event.target.value,
        })
    }
    function handleSubmitEdit() {
        if (editId) {
            todoEdit({
                id: editId,
                status: editData.status,
                task: editData.task,
            }).then(() => {
                getTodos().then(() => {
                    setGlobalSnackbar("SHOW", {
                        message: `Success edit 1 item`,
                        severity: "success",
                    })
                    setEditId(null)
                    setEditData({})
                })
            })
        }
    }

    return { todosState, handleCheck, handleChangeCheck, editId, setEditId, handleChangeSwitch, handleChangeTask, handleSubmitEdit }
}
