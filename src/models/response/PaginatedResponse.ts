export interface PaginatedResponse<T> {
    page: number
    per_page: number
    total: number
    results: T[];
}