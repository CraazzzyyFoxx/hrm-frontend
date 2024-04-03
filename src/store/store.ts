import {create} from 'zustand';
import {User} from "@/models/User";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import {AxiosResponse} from "axios";
import {AuthResponse} from "@/models/response/AuthResponse";
import $api from "@/http";


export interface AuthStore {
    isAuth: boolean;
    user: User;
    setAuth: (isAuth: boolean) => void;
    setUser: (user: User) => void;
    clear: () => void;
    login: (email: string, password: string) => void;
    getMe: () => void;
    checkAuth: () => void;
}


export const useAuthStore = create<AuthStore>((set) => ({
    isAuth: false,
    user: {} as User,
    setUser: (user: User) => set({user: user}),
    clear: () => set(
        {
            isAuth: false,
            user: {} as User
        }),
    setAuth: (isAuth: boolean) => set({isAuth: isAuth}),
    login: async (email: string, password: string) => {
        const resp = await AuthService.login(email, password)
        console.log(resp.data)
        localStorage.setItem('token', resp.data.access_token)
        set({isAuth: true})
        const user_resp = await UserService.getMe()
        set({user: user_resp.data})
    },
    getMe: async () => {
        const resp = await UserService.getMe()
        set({user: resp.data})
    },
    checkAuth: async () => {
        try {
            const response = await $api.post<AuthResponse>('/auth/refresh-token')
            console.log(response)
            localStorage.setItem('token', response.data.access_token)
            set({isAuth: true})
            const resp = await UserService.getMe()
            set({user: resp.data})
        } catch (e) {
            console.log(e)
        }
    }
}));
