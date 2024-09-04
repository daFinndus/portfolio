interface FormButtonProps {
    onClick: () => void;
    text: string;
    title: string;
    disabled: boolean;
}

const FormButton = ({ onClick, text, title, disabled }: FormButtonProps) => {
    return (
        <div className="group my-3 flex h-12 w-full items-center justify-start border-2 border-cream-white bg-dark-gray p-3 duration-700 hover:cursor-link hover:bg-cream-white hover:bg-opacity-75 hover:duration-0">
            <button
                title={title}
                className="bg-transparent text-left uppercase text-cream-white group-hover:text-dark-gray"
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
};

export default FormButton;
