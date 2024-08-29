import React from "react";

interface FormButtonProps {
    onClick: () => void;
    text: string;
    title: string;
    disabled: boolean;
}

const FormButton = ({ onClick, text, title, disabled }: FormButtonProps) => {
    return (
        <div className="hover:bg-cream-white bg-dark-gray border-cream-white group my-3 flex h-12 w-full items-center justify-start border-2 p-3 duration-700 hover:cursor-link hover:bg-opacity-75 hover:duration-0">
            <button
                title={title}
                className="text-cream-white group-hover:text-dark-gray bg-transparent text-left uppercase"
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
};

export default FormButton;
