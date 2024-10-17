import { IconType } from "react-icons";

interface ButtonWideProps {
    icon: IconType;
    onClick: () => void;
    text: string;
    title: string;
}

/**
 * This is a wide button component with an icon and text.
 * @param onClick - function to be called when the button is clicked
 * @param Icon - icon that will be displayed
 * @param text - text that will be displayed
 * @param title - title of the button
 */
const ButtonWide = ({ onClick, icon: Icon, text, title }: ButtonWideProps) => {
    return (
        <div className="group m-1 flex h-12 w-80 cursor-link items-center justify-start border-2 border-transparent p-3 text-dark-gray duration-700 hover:border-dark-gray hover:bg-dark-gray hover:bg-opacity-25 hover:duration-0 dark:text-cream-white dark:hover:border-cream-white dark:hover:bg-cream-white dark:hover:bg-opacity-25">
            <button
                title={title}
                aria-label={title}
                className="w-full bg-transparent text-left uppercase focus:outline-none"
                onClick={onClick}
            >
                {text}
            </button>
            {Icon && <Icon className="size-4 group-hover:animate-blink" />}
        </div>
    );
};

export default ButtonWide;
