export interface User {
    id: bigint
    created_at: Date
    updated_at: Date
    email: string
    first_name: string
    last_name: string
    middle_name: string
    is_active: boolean
    phone_number: string
    password_changed_at: Date
    search_status: string
    search_region: string | null
}
