import LoginProvider, { login } from "./providers/login.provider"
import * as Yup from "yup"
import { useFormik } from "formik"
import { LoginParams, LoginResponse } from "./@types/login.type"
import { setGlobalSnackbar } from "../../components/GlobalSnackbar/globalSnackbar.provider"
import { useHistory } from "react-router-dom"

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("required*"),
    password: Yup.string().min(6, "Minimal 6 character.").required("required*"),
})

const initialValues: LoginParams = {
    email: "",
    password: "",
}

export default function useLogin() {
    const [loginState] = LoginProvider.useGlobal()
    const history = useHistory()

    const formik = useFormik({
        validationSchema,
        initialValues,
        onSubmit: (values) => {
            login(values)
                .then((data: LoginResponse) => {
                    if (window) window.localStorage.setItem("token", data.accessToken)
                    history.push("/todo")
                })
                .catch((error: any) => {
                    console.log("useLogin -> error", error)
                    setGlobalSnackbar("SHOW", {
                        message: "Email or Password wrong!",
                        severity: "error",
                    })
                })
        },
    })

    return { loginState, formik, history }
}
