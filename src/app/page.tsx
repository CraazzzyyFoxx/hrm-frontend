"use client";

import Header from "@/components/Header/Header";
import {useEffect} from "react";
import {useAuthStore} from "@/store/store";

export default function Home() {
    const {checkAuth} = useAuthStore()

    useEffect(
        () => {
            console.log('checkAuth')
            checkAuth()
        },
        [checkAuth]
    )
    return (
        <main>
          <Header />
        </main>
    );
}
