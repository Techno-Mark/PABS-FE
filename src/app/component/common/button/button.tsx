import React from "react";
import Link from "next/link";

interface ButtonProps {
    href?: string;
    text: string;
    className?: string;
    variant?: "primary";
    type?: "button" | "submit" | "reset";  
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, text, className = "", type = "submit", onClick }) => {
    return href ? (
        <Link href={href} className={`bg-[var(--primary-blue)] py-3 md:py-5 px-12 md:px-20 rounded-sm text-white text-lg md:text-2xl font-semibold flex w-max items-center cursor-pointer ${className}`}>
            {text}
        </Link>
    ) : (
        <button type={type} className={`bg-[var(--primary-blue)] py-3 md:py-5 px-12 md:px-20 rounded-sm text-white text-lg md:text-2xl font-semibold flex w-max items-center cursor-pointer ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
