const PrevArrow: React.FC<{ className?: string; color?: string}> = ({ className , color = "#0F172A" }) => {
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
                d="M20 12H4M4 12L10 6M4 12L10 18"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default PrevArrow;
