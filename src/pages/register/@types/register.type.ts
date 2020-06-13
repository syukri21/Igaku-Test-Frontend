export interface RegisterParam {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface RegisterResponse {
    success: boolean
    message: string
}

export interface RegisterState {
    loading: boolean
    error: any
    data?: RegisterResponse
}
