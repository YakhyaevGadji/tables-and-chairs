import React from "react";
import { cn } from "@/shared/lib/utils";

interface IPropsContainer {
    className?: string;
    children: React.ReactNode;
}

const Container = ({className, children}: IPropsContainer) => {
    return (
        <div className={cn('max-w-[1455px] px-[15px] mx-auto w-full', className)}>
            {children}
        </div>
    );
};

export default Container;
