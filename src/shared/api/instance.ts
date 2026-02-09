import axios from "axios";

const instance = axios.create({
    baseURL: 'http://45.141.102.153:3000/api',
    headers: {"Content-Type": "multipart/form-data",}
});

export default instance;