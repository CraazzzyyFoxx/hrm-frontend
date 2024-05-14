import React from 'react';
import MainPageAuth from "@/pages/MainPageAuth/MainPageAuth";
import MainPageNoAuth from "@/pages/MainPageNoAuth/MainPageNoAuth";


interface MainPageProps {
    isAuth: boolean
}


const MainPage = (props: MainPageProps) => {
    return (
        <main>
            {
                props.isAuth ? <MainPageAuth/> : <MainPageNoAuth/>
            }
        </main>
    );
};

export default MainPage;