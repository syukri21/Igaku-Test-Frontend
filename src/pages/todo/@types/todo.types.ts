export interface TodoType {
    id: number
    task: string
    status: boolean
    created_at: string
    updated_at: string
    userId: number
}

export interface TodoCreateParam {
    task: string
}

export interface TodoCreateResponse {
    message: string
}

export interface TodoCreateState {
    loading: boolean
    error: any
    data?: TodoCreateResponse
}

export interface TodoDeleteParam {
    ids?: number[] | null
}

export interface TodoEditParam {
    id: number
    task: string
    status: string
}

export interface TodoEditResponse {
    message: string
    data?: TodoType
}

export interface TodoEditState {
    loading: boolean
    error: any
    data?: TodoEditResponse
}

export interface TodosGetState {
    loading: boolean
    error: any
    data?: TodoType[]
}
