import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "@/models/response/AuthResponse";
import {headers} from "next/headers";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);
        return $api.post<AuthResponse>('/auth/login', {
            username: email,
            password: password
        }, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    }

    static async registration(
        email: string, password: string, first_name: string, last_name: string, middle_name: string | null, phone_number: string
    ): Promise<AxiosResponse> {
        return $api.post('/auth/registration', {
            "email": email,
            "password": password,
            "phone_number": phone_number,
            "first_name": first_name,
            "last_name": last_name,
            "middle_name": middle_name
        })


    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }

}

