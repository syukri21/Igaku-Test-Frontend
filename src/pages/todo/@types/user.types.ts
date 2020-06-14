export interface UserType {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    created_at: Date
    updated_at: Date
}

export interface UserState {
    loading: false
    error: null
    data: UserType
}
