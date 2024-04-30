export interface BelbinRole {
    id: number
    created_at: Date
    updated_at: Date
    name: string
    percent: number
    points: number
}

export interface BelbinRoleCreate{
    name: string
    percent: number
    points: number
}