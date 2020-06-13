export interface LoginParams {
    password: string
    email: string
}

export interface LoginResponse {
    email: string
    expiresIn: string
    accessToken: string
}

export interface LoginState {
    loading: false
    error: any
    data?: LoginResponse
}
