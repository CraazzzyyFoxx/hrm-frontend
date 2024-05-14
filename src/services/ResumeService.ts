import $api from "../http";
import {AxiosResponse} from "axios";
import {Resume, ResumeUpdate} from "@/models/Resume";
import {PaginatedResponse} from "@/models/response/PaginatedResponse";

export default class ResumeService {
    static async create(position: string): Promise<AxiosResponse<Resume>> {
        return $api.post('/resume', {
            "position": position
        })
    }
    static async getMy(page: number = 1, per_page: number = 10): Promise<AxiosResponse<PaginatedResponse<Resume>>> {
        return $api.get(`/resume/my?page=${page}&per_page=${per_page}`)
    }

    static async delete(id: number): Promise<AxiosResponse<Resume>> {
        return $api.delete(`/resume?id=${id}`)
    }

    static async get(id: number): Promise<AxiosResponse<Resume>> {
        return $api.get(`/resume?id=${id}`)
    }

    static async update(resume_id: number, resume: Resume): Promise<AxiosResponse<Resume>> {
        return $api.patch(`/resume?id=${resume_id}`, resume)
    }
}

