import { cn } from "@/shared/lib/utils";
import type { FC, JSX, ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode
}

export const FooterTitle: FC<Props> = ({ children, className }: Props): JSX.Element => (
    <h6 className={cn("mb-3 ", className)}>{children}</h6>
);