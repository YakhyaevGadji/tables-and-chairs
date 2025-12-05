import { TypeFromInputs } from "@/entities/admin/model/types-form";
import axios from "axios";

export const fetchAuth = async (props: TypeFromInputs) => {
    try {
        const { data } = await axios.post("https://cb3e1513c958829a.mokky.dev/auth", props);

        return data;
    } catch (err) {
        console.log(err);
    }
};