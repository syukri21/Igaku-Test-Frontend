import { register } from "./providers/register.provider"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useHistory } from "react-router-dom"

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3).required("required *"),
    lastName: Yup.string().min(3).required("required *"),
    email: Yup.string().email().required("required *"),
    password: Yup.string().min(6).required("required *"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("required *"),
})

export default function useRegister() {
    const history = useHistory()
    const formik = useFormik({
        validationSchema,
        initialValues,
        onSubmit: (values) => {
            register(values)
                .catch((error) => {
                    console.log("useRegister -> error", error)
                })
                .then(() => history.push("/login"))
        },
    })

    return { formik }
}
