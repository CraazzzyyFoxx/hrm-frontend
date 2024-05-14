import {create} from 'zustand';
import {User} from "@/models/User";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import axios from "axios";
import {AuthResponse} from "@/models/response/AuthResponse";
import {API_URL} from "@/consts/api";


export interface AuthStore {
    isAuth: boolean;
    user: User;
    clear: () => void;
    login: (email: string, password: string) => void;
    checkAuth: () => Promise<boolean>;
    logout: () => void;
    updateUser: (user: User) => void;
    updatePassword: (newPassword: string) => void;
    setUser: (user: User) => void;
}


// @ts-ignore
export const useAuthStore = create<AuthStore>((set, getState) => ({
    isAuth: false,
    user: {} as User,
    clear: () => set(
        {
            isAuth: false,
            user: {} as User
        }),
    login: async (email: string, password: string) => {
       AuthService.login(email, password).then(
           (response) => {
               localStorage.setItem('token', response.data.access_token)
               UserService.getMe().then(
                   (user_resp) => {
                       set({user: user_resp.data, isAuth: true})
                   }
               )
           }
       ).catch(
           (error) => {
               set({isAuth: false, user: {} as User})
           }
       )
    },
    checkAuth: async () => {
        if (getState().isAuth) {
            return true
        }
        UserService.getMe().then((resp) => {
            set({user: resp.data, isAuth: true})
        }).catch(
            (error) => {
                set({isAuth: false, user: {} as User})
            }
        )
        return true
    },
    logout: async () => {
        set({isAuth: false, user: {} as User})
        await AuthService.logout().catch(() => {}).then(() => {})
        localStorage.removeItem('token')
    },
    updateUser: async (user: User) => {
        const resp = await UserService.updateMe(user)
        set({user: resp.data})
    },
    updatePassword: async (newPassword: string) => {
        await UserService.updateMe({password: newPassword}).then((value) => {
            set({user: value.data})
        })
    },
    setUser: (user: User) => {
        set({user: user})
    }
}),

);


