import axios from "axios";

export const fetchAuthMe = async () => {
    const token = localStorage.getItem("token");

    try {
        const { data } = await axios.get(
            "https://cb3e1513c958829a.mokky.dev/auth_me",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return data;
    } catch (err) {
        console.log('Ошбика запроса auth me')
    }
};