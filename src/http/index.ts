import axios from "axios";
import {AuthResponse} from "@/models/response/AuthResponse";
import {API_URL} from "@/consts/api";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})


$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;

    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        axios.post<AuthResponse>(`${API_URL}/auth/refresh-token`, {withCredentials: true}).then(
            (response) => {
                localStorage.setItem('token', response.data.access_token);
                return $api.request(originalRequest);
            }
        ).catch(
            (error) => {}
        )
    }
})


export default $api;
