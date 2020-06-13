import { TodoCreateParam } from "../@types/todo.types"
import { useFormik } from "formik"
import * as Yup from "yup"
import { createTodo } from "../providers/todo-create.provider"
import { getTodos } from "../providers/todo-getAll.provider"

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
                getTodos()
            })
        },
    })

    return { formik }
}
