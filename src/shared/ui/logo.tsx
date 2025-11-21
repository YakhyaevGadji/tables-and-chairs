import React from "react";
import Image from "next/image";
import IconLogo from "@/shared/assets/logo.svg";

interface IPropsLogo {
    priority?: boolean;
    loading?: 'lazy';
}

const Logo = ({ ...props }: IPropsLogo) => {
    return <Image
        {...props}
        src={IconLogo}
        alt="logo"
    />;
};

export default Logo;
