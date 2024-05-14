"use client";

import {useCheckAuth} from "@/hooks/checkAuth";
import {useAuthStore} from "@/stores/auth";
import MainPage from "@/pages/MainPage/MainPage";

export default function Home() {
    const {isAuth} = useAuthStore()
    useCheckAuth()

    return (
        <MainPage isAuth={isAuth}/>
    );
}
