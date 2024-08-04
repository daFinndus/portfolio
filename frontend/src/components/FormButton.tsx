import React from "react";

interface FormButtonProps {
    onClick: () => void;
    text: string;
    title: string;
}

const FormButton = ({ onClick, text, title }: FormButtonProps) => {
    return (
        <div className="group mt-3 flex h-12 w-full items-center justify-start border-2 border-transparent p-3 duration-700 hover:cursor-link hover:border-cp-blue hover:bg-cp-blue hover:bg-opacity-25 hover:duration-0">
            <button
                title={title}
                className="bg-transparent text-left uppercase text-cp-dark-red group-hover:text-cp-blue"
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default FormButton;
