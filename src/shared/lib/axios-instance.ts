import axios from "axios";
export const API_URL = "https://52094944e54276d2.mokky.dev";
export const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});