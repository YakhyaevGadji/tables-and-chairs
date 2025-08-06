'use client'

import { Button } from "@/shared/ui/button";
import Container from "@/shared/ui/container";

interface IPropsError {
    error: string;
    reset: () => void;
}

export default function Error({reset}: IPropsError) {
    return (
        <Container>
            <h2>Ошибка сервера</h2>
            <Button onClick={reset}>
                Повторить
            </Button>
        </Container>
    )
}