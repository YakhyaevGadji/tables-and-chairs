'use client';

const useFormatterPrice = (
    locale: string = 'ru-RU',
    currency: string = 'RUB'
) => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
    });

    const formatPrice = (value: number) => {
        return Number(formatter.format(value));
    };

    return { formatPrice };
};

export default useFormatterPrice;
