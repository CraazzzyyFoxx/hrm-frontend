export interface BelbinRoleEntity {
    id: number
    created_at: Date
    updated_at: Date
    name: string
    percent: number
    points: number
}


export interface BelbinRole {
    id: number
    created_at: Date
    updated_at: Date
    user_id: number
    roles: BelbinRoleEntity[]
}

export interface BelbinRoleCreate{
    name: string
    percent: number
    points: number
}