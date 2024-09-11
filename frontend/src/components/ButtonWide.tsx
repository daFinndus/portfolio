import { IconType } from "react-icons";

interface ButtonWideProps {
    icon: IconType;
    onClick: () => void;
    text: string;
    title: string;
}

const ButtonWide = ({ onClick, icon: Icon, text, title }: ButtonWideProps) => {
    return (
        <div className="group m-1 flex h-12 w-80 cursor-link items-center justify-start border-2 border-transparent p-3 duration-700 hover:border-cream-white hover:bg-cream-white hover:bg-opacity-25 hover:duration-0">
            <button
                title={title}
                aria-label={title}
                className="w-full bg-transparent text-left uppercase text-cream-white focus:outline-none group-hover:text-cream-white"
                onClick={onClick}
            >
                {text}
            </button>
            {Icon && <Icon className="size-4 group-hover:animate-blink" />}
        </div>
    );
};

export default ButtonWide;
