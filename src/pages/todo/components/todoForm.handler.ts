import { TodoCreateParam } from "../@types/todo.types"
import { useFormik } from "formik"
import * as Yup from "yup"
import { createTodo } from "../providers/todo-create.provider"
import { getTodos } from "../providers/todo-getAll.provider"
import { setGlobalSnackbar } from "../../../components/GlobalSnackbar/globalSnackbar.provider"

const initialValues: TodoCreateParam = {
    task: "",
}

const validationSchema = Yup.object().shape({
    task: Yup.string().min(6).required(),
})

export default function useTodoForm() {
    const formik = useFormik({
        validationSchema,
        initialValues,
        onSubmit: (values) => {
            createTodo(values).then(() => {
                getTodos().then(() => {
                    setGlobalSnackbar("SHOW", {
                        message: `Success add 1 item`,
                        severity: "success",
                    })
                    formik.resetForm({
                        values: initialValues,
                    })
                })
            })
        },
    })

    return { formik }
}
