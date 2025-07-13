import React from "react";
import Image from "next/image";
import IconLogo from "@/shared/assets/logo.svg";

interface IPropsLogo {
    width?: number;
    height?: number;
}

const Logo = ({ width, height}: IPropsLogo) => {
    return <Image width={width} height={height} src={IconLogo} alt="logo"/>;
};

export default Logo;
