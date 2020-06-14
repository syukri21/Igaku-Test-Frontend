import axios, { AxiosRequestConfig } from "axios"

class Api {
    private static instance: Api
    private apiUrl: string | undefined = "http://ec2-18-191-129-34.us-east-2.compute.amazonaws.com:3030"
    private token?: string | null

    private constructor() {}

    public static getInstance(): Api {
        if (!Api.instance) {
            Api.instance = new Api()
        }

        return Api.instance
    }

    public getToken() {
        if (window) {
            const token = localStorage.getItem("token")
            if (token) this.token = token
        }

        return this.token
    }

    public setToken(token: string) {
        if (window) window.localStorage.setItem("token", token)
    }

    public fetch(params: any) {
        const axiosRequestConfig: AxiosRequestConfig = {
            baseURL: this.apiUrl,
        }
        const token = localStorage.getItem("token")
        if (token) {
            axiosRequestConfig.headers = { Authorization: `Bearer ${token}` }
        }
        return axios.create(axiosRequestConfig)(params)
    }
}

export default Api.getInstance()
