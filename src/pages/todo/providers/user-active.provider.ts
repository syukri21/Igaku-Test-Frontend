import { createProvider } from "reactn"
import Api from "../../../api/api"
import { UserState } from "../@types/user.types"

const UserActive = createProvider<UserState>({
    loading: false,
    error: null,
    data: {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        created_at: new Date(),
        updated_at: new Date(),
    },
})

UserActive.addReducer("getUser", (global: any, _, type, payload) => {
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

export async function getUser() {
    const dispatch = UserActive.getDispatch()
    try {
        dispatch.getUser("LOADING")
        const result = await Api.fetch({
            method: "GET",
            url: "/users/jwt",
        })
        dispatch.getUser("SUCCESS", result.data)
        return result.data
    } catch (err) {
        dispatch.getUser("ERROR")
        throw err
    }
}

export default UserActive
