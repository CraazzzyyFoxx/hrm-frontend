import {create} from 'zustand';
import {User} from "@/models/User";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import BelbinService from "@/services/BelbinService";


export interface AuthStore {
    isAuth: boolean;
    user: User;
    setAuth: (isAuth: boolean) => void;
    setUser: (user: User) => void;
    clear: () => void;
    login: (email: string, password: string) => void;
    checkAuth: () => Promise<boolean>;
    logout: () => void;
    updateUser: (user: User) => void;
}


type Row = number[];


export interface BelbinStore {
    stages: Array<Row>;
    current_stage: number;
    inc_stage: () => void;
    dec_stage: () => void;
    set: (stage: number, row: number, value: number | number[]) => void;
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
            return true
        } catch (e) {
            return false
        }
    },
    logout: async () => {
        set({isAuth: false, user: {} as User})
        await AuthService.logout()
        localStorage.removeItem('token')
    },
    updateUser: async (user: User) => {
        const resp = await UserService.updateMe(user)
        set({user: resp.data})
    },
}));


export const useBelbinStore = create<BelbinStore>((set) => ({
    stages: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    current_stage: 0,
    inc_stage: () => set((state => ({current_stage: state.current_stage + 1}))),
    dec_stage: () => set((state => ({current_stage: state.current_stage - 1}))),
    set: (stage: number, row: number, value: number) => {
        set((state) => {
            state.stages[stage][row] = value
            return {stages: state.stages}
        })
    },
}));