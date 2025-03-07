import React from "react"

interface NextArrowProps {
    className?: string;
    color?: string;
}

const NextArrow: React.FC<NextArrowProps> = ({ className, color = "#0F172A" }) => {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default NextArrow;
