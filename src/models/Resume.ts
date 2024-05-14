export interface MinimizedCitizenship {
    id: number
    name: string
}


export interface ResumeBasicInformation {
    first_name: string
    last_name: string
    middle_name: string | null
    gender: string
    phone: string
    birthday: Date
    citizenship: MinimizedCitizenship
    city: string
}


export interface ResumeEducation {
    level: string
    name: string
    faculty: string
    specialization: string
    year_of_graduation: number
}

export interface ResumeWorkExperience {
    name: string;
    position: string;
    description: string;
    start_work_month: string;
    start_work_year: number | null;
    is_end: boolean;
}


export interface Resume {
    id: number
    created_at: Date
    updated_at: Date

    user_id: number
    stage: number

    is_public: boolean
    is_ready_for_move: boolean
    is_ready_for_trips: boolean

    position: string
    salary_from: number | null
    salary_to: number | null
    busyness: string
    work_schedule: string

    basic_information: ResumeBasicInformation
    education: ResumeEducation
    work_experience: ResumeWorkExperience
}
