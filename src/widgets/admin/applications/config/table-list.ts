export const tableList: string[] = [
    "",
    "ID",
    "Клиент",
    "Контакт",
    "Товаров",
    "Статус",
    "Сумма",
    "Дата заявки",
    "Действия"
]

export const selectList: { value: string, label: string }[] = [
    {
        value: "pending",
        label: "Ожидание"
    },
    {
        value: "processing",
        label: "Обработка"
    },
    {
        value: "shipped",
        label: "Отправлено"
    }, {
        value: "delivered",
        label: "Доставлено"
    }, {
        value: "cancelled",
        label: "Отменено"
    }
]