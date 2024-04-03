export interface User {
    id: bigint
    created_at: Date
    updated_at: Date
    email: string
    first_name: string
    last_name: string
    is_active: boolean
}
