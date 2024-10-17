interface FormButtonProps {
    onClick: () => void;
    text: string;
    title: string;
    disabled: boolean;
}

/**
 * This is a button component that is used in forms.
 * @param onClick - function to be called when the button is clicked
 * @param text - text to be displayed on the button
 * @param title - title of the button
 * @param disabled - boolean value to disable the button
 */
const FormButton = ({ onClick, text, title, disabled }: FormButtonProps) => {
    return (
        <div className="group my-3 flex h-12 w-full items-center justify-start border-2 border-dark-gray bg-cream-white p-3 duration-700 hover:cursor-link hover:bg-dark-gray hover:bg-opacity-25 hover:duration-0 dark:border-cream-white dark:bg-dark-gray dark:hover:bg-cream-white dark:hover:bg-opacity-25">
            <button
                title={title}
                className="bg-transparent text-left uppercase text-dark-gray dark:text-cream-white"
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
};

export default FormButton;
