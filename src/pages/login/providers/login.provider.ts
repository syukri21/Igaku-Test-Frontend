import { createProvider } from "reactn"
import Api from "../../../api/api"
import { LoginState } from "../@types/login.type"

const LoginProvider = createProvider<LoginState>()

LoginProvider.addReducer("login", (global: any, _, type, payload) => {
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

export async function login(data) {
    const dispatch = LoginProvider.getDispatch()
    try {
        dispatch.login("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: "/auth/login",
            data,
        })
        dispatch.login("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.login("ERROR")
        throw err
    }
}

export default LoginProvider
