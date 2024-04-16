import {create} from 'zustand';
import {User} from "@/models/User";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";


export interface AuthStore {
    isAuth: boolean;
    user: User;
    setAuth: (isAuth: boolean) => void;
    setUser: (user: User) => void;
    clear: () => void;
    login: (email: string, password: string) => void;
    checkAuth: () => void;
    logout: () => void;
}


export interface BelbinStore {

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
        localStorage.setItem('token', resp.data.access_token)
        const user_resp = await UserService.getMe()
        set({user: user_resp.data, isAuth: true})
    },
    checkAuth: async () => {
        try {
            const resp = await UserService.getMe()
            set({user: resp.data, isAuth: true})
        } catch (e) {
            console.log(e)
        }
    },
    logout: async () => {
        set({isAuth: false, user: {} as User})
        await AuthService.logout()
        localStorage.removeItem('token')
    },

}));
