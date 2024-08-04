import React from "react";

interface ButtonShortProps {
    alt: string;
    border: boolean;
    onClick: () => void;
    src: string;
    title: string;
}

const ButtonShort = ({
    alt,
    border,
    onClick,
    src,
    title,
}: ButtonShortProps) => {
    return (
        <div
            className={`group m-3 flex h-12 w-12 cursor-link duration-700 hover:duration-0 ${border ? "border-2 border-cp-blue hover:bg-cp-blue hover:bg-opacity-25" : ""}`}
        >
            <button
                title={title}
                aria-label={title}
                className="w-full bg-transparent text-left uppercase text-cp-red focus:outline-none group-hover:text-cp-blue"
                onClick={onClick}
            >
                <img
                    src={src}
                    className="h-full w-full p-3 group-hover:animate-blink"
                    alt={alt}
                />
            </button>
        </div>
    );
};

export default ButtonShort;
