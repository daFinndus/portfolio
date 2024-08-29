import React from "react";

interface ButtonWideProps {
    alt: string;
    onClick: () => void;
    src: string;
    text: string;
    title: string;
}

const ButtonWide = ({ alt, onClick, src, text, title }: ButtonWideProps) => {
    return (
        <div className="hover:border-cream-white hover:bg-cream-white group m-1 flex h-12 w-80 cursor-link items-center justify-start border-2 border-transparent p-3 duration-700 hover:bg-opacity-25 hover:duration-0">
            <button
                title={title}
                aria-label={title}
                className="text-cream-white group-hover:text-cream-white w-full bg-transparent text-left uppercase focus:outline-none"
                onClick={onClick}
            >
                {text}
            </button>
            <img
                src={src}
                className="h-4 w-4 opacity-0 group-hover:animate-blink"
                alt={alt}
            />
        </div>
    );
};

export default ButtonWide;
