import { createProvider } from "reactn"
import Api from "../../../api/api"
import { RegisterState, RegisterParam } from "../@types/register.type"

const RegisterProvider = createProvider<RegisterState>()

RegisterProvider.addReducer("register", (global: any, _, type, payload) => {
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

export async function register(data: RegisterParam) {
    const dispatch = RegisterProvider.getDispatch()
    try {
        dispatch.register("LOADING")
        const result = await Api.fetch({
            method: "POST",
            url: "/auth/register",
            data,
        })
        dispatch.register("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.register("ERROR")
        throw err
    }
}

export default RegisterProvider
