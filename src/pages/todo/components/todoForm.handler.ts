import { TodoCreateParam } from "../@types/todo.types"
import { useFormik } from "formik"
import * as Yup from "yup"
import { createTodo } from "../providers/todo-create.provider"

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
        onSubmit: createTodo,
    })

    return { formik }
}
