import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://212.193.48.233:8080'
});