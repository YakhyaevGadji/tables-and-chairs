import axios from "axios";

export const API_URL = "http://212.193.48.233:8080";

export const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});