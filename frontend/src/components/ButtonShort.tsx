import { IconType } from "react-icons";

interface ButtonShortProps {
    border: boolean;
    icon: IconType;
    onClick: () => void;
    title: string;
}

/**
 * This a small rectangular button with an icon.
 * @param border - if true, the button will have a border.
 * @param onClick - function to be called when the button is clicked.
 * @param Icon - icon to be displayed in the button.
 * @param title - title of the button.
 */
const ButtonShort = ({
    border,
    onClick,
    icon: Icon,
    title,
}: ButtonShortProps) => {
    return (
        <div
            className={`group m-3 flex h-12 w-12 cursor-link duration-700 hover:duration-0 ${
                border
                    ? "border-2 border-dark-gray hover:bg-dark-gray hover:bg-opacity-25 dark:border-cream-white dark:hover:bg-cream-white dark:hover:bg-opacity-25"
                    : ""
            }`}
        >
            <button
                title={title}
                aria-label={title}
                className="flex w-full items-center justify-center bg-transparent text-left uppercase focus:outline-none"
                onClick={onClick}
            >
                {Icon && <Icon className="size-4 group-hover:animate-blink" />}
            </button>
        </div>
    );
};

export default ButtonShort;
