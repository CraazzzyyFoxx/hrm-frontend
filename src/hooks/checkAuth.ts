import {useEffect} from "react";
import {useAuthStore} from "@/stores/auth";
import UserService from "@/services/UserService";
import {useQuery} from "react-query";

export const useCheckAuth = () => {
    const {checkAuth, isAuth} = useAuthStore()
    const { data} = useQuery({
        queryKey: ['user'],
        queryFn: () => checkAuth()
    })
}