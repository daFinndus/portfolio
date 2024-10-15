import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ButtonScroll = () => {
    const [height, setHeight] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setHeight(0);
        setVisible(false);
        window.scrollTo(0, 0);
    };

    const handleButton = () => {
        setHeight(window.scrollY);

        if (height > 500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleButton);
    });

    return (
        <div
            className={`group sticky bottom-6 flex text-dark-gray dark:text-cream-white ${visible ? "opacity-100" : "opacity-0"} h-16 w-16 items-center justify-center rounded-full border-2 border-dark-gray bg-cream-white shadow-dark-black drop-shadow-2xl transition-opacity duration-200 ease-in hover:cursor-link dark:border-cream-white dark:bg-dark-gray`}
        >
            <button
                className="button-scroll absolute flex h-full w-full items-center justify-center"
                onClick={handleClick}
            >
                <IoIosArrowUp className="size-6 group-hover:animate-blink" />
            </button>
        </div>
    );
};

export default ButtonScroll;
