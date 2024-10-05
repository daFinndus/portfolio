import { IoIosArrowUp } from "react-icons/io";

const ButtonScroll = () => {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dark-gray bg-cream-white shadow-dark-black drop-shadow-2xl">
            <button
                className="button-scroll flex h-full w-full items-center justify-center"
                onClick={handleClick}
            >
                <IoIosArrowUp className="size-6" />
            </button>
        </div> 
    );
};

export default ButtonScroll;
