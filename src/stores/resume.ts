import {create} from 'zustand';
import {countryList} from "@/consts/vacancy";
import {MinimizedCitizenship, Resume} from "@/models/Resume";
import {User} from "@/models/User";


export interface CreateResumeStore {
    isStarted: boolean
    stage: number;
    resume_id: number | null;
    resume: Resume;

    name: string;

    first_name: string;
    last_name: string;
    middle_name: string | null;
    gender: string;
    city: string | null;
    birthdate: Date | null;
    phone: string;
    citizenship: MinimizedCitizenship;

    educationLevel: string;
    schoolName: string;
    faculty: string;
    specialization: string;
    year_of_graduation: number | null;

    organization_name: string;
    position: string;
    description: string;
    startWorkMonth: string;
    startWorkYear: number | null;
    is_end: boolean;

    setResumeId: (resume_id: number) => void;
    setFromResume: (resume: Resume) => void;
    decreaseStage: () => void;
    setStage: (stage: number) => void;
    applyUserData: (user: User) => void;

    setVacancyName: (name: string) => void;
    setBasicInformation: (first_name: string, last_name: string, middle_name: string, gender: string, city: string, birthdate: Date, phone: string) => void;
    setEducation: (level: string, name: string, faculty: string, specialization: string, year_of_graduation: number) => void;
    setWorkExperience: (name: string, position: string, description: string, startWorkMonth: string, startWorkYear: number, is_end: boolean) => void;
}


export const useCreateResumeStore = create<CreateResumeStore>((set) => ({
    isStarted: false,
    stage: 0,
    resume_id: null,
    resume: {},

    name: "",

    first_name: "",
    last_name: "",
    middle_name: "",
    gender: "male",
    city: null,
    birthdate: null,
    phone: "",
    citizenship: countryList[119],

    educationLevel: "Среднее",
    schoolName: "",
    faculty: "",
    specialization: "",
    year_of_graduation: null,

    organization_name: "",
    position: "",
    description: "",
    startWorkMonth: "",
    startWorkYear: null,
    is_end: true,

    setResumeId: (resume_id: number) => {
        set((state) => ({
            ...state,
            resume_id: resume_id
        }))
    },
    setFromResume: (resume: Resume) => {
        set((state) => ({
            ...state,
            resume_id: resume.id,
            isStarted: true,
            stage: resume.stage,
            name: resume.position,
            resume: resume
        }))

        if (resume.basic_information) {
            set((state) => ({
                ...state,
                first_name: resume.basic_information.first_name,
                last_name: resume.basic_information.last_name,
                middle_name: resume.basic_information.middle_name,
                gender: resume.basic_information.gender,
                city: resume.basic_information.city,
                birthdate: new Date(resume.basic_information.birthday),
                phone: resume.basic_information.phone,
                citizenship: resume.basic_information.citizenship
            }))
        }
        if (resume.education) {
            set((state) => ({
                ...state,
                educationLevel: resume.education.level,
                schoolName: resume.education.name,
                faculty: resume.education.faculty,
                specialization: resume.education.specialization,
                year_of_graduation: resume.education.year_of_graduation
            }))
        }
    },
    setStage: (stage: number) => {
        set((state) => ({ ...state, stage: stage }))
    },
    decreaseStage: () => {
        set((state) => ({ ...state, stage: state.stage - 1 }))
    },
    applyUserData: (user: User) => {
        set((state) => (
            {
                ...state,
                first_name: state.first_name ? state.first_name : user.first_name,
                last_name: state.last_name ? state.last_name : user.last_name,
                middle_name: state.middle_name ? state.middle_name : user.middle_name,
                phone: state.phone ? state.phone : user.phone_number,
                city: state.city ? state.city : user.search_region,

            }
        ))
    },
    setVacancyName: (name: string) => {
        set((state) => ({
            ...state,
            isStarted: true,
            name: name
        }))
    },
    setBasicInformation: (first_name: string, last_name: string, middle_name: string, gender: string, city: string, birthdate: Date, phone: string) => {
        set((state) => ({
            ...state,
            first_name: first_name,
            last_name: last_name,
            middle_name: middle_name,
            gender: gender,
            city: city,
            birthdate: birthdate,
            phone: phone
        }))
    },
    setEducation: (level, name, faculty, specialization, year_of_graduation) => {
        set((state) => ({
            ...state,
            educationLevel: level,
            schoolName: name,
            faculty: faculty,
            specialization: specialization,
            year_of_graduation: year_of_graduation
        }))
    },
    setWorkExperience: (name, position, description, startWorkMonth, startWorkYear, is_end) => {
        set((state) => ({
            ...state,
            schoolName: name,
            position: position,
            description: description,
            startWorkMonth: startWorkMonth,
            startWorkYear: startWorkYear,
            is_end: is_end
        }))
    }
}));