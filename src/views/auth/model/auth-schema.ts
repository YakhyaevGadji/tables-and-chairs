import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup.string().required("Введите имя").min(2, "Слишком короткое имя"),
    email: yup
        .string()
        .email("Некорректный email")
        .required("Обязательное поле"),
    password: yup
        .string()
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required("Подтверждение обязательно"),
});

export const loginSchema = yup.object({
    email: yup
        .string()
        .email("Некорректный email")
        .required("Обязательное поле"),
    password: yup
        .string()
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле"),
});