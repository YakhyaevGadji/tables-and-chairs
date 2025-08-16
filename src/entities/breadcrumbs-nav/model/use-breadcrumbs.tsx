'use client'

import { usePathname } from "next/navigation";

const pathTranslations: Record<string, string> = {
    chairs: 'Стулья'
}

const useBreadcrumbs = () => {
    const pathname = usePathname();

    return {
        pathname,
        pathTranslations
    };
};

export default useBreadcrumbs;
