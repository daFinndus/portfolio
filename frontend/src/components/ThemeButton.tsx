import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { AiFillSun } from "react-icons/ai";
import { IoMdMoon } from "react-icons/io";

const ThemeButton = () => {
    const [dark, setDark] = useState(Cookies.get("dark") === "true");

    // Set body class based on initial cookie state
    useEffect(() => {
        const isDark = Cookies.get("dark") === "true";
        setDark(isDark);

        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, []);

    // Toggle dark mode
    const darkModeHandler = () => {
        setDark((prevDark) => {
            const newDark = !prevDark;
            document.body.classList.toggle("dark", newDark);
            Cookies.set("dark", newDark);
            return newDark;
        });
    };

    return (
        <div className="group absolute right-2 top-2 flex h-8 w-8 cursor-link text-dark-gray duration-700 hover:duration-0 dark:text-cream-white">
            <button
                className="flex w-full items-center justify-center bg-transparent text-left uppercase focus:outline-none"
                onClick={darkModeHandler}
            >
                {dark ? (
                    <AiFillSun className="size-5 group-hover:animate-blink" />
                ) : (
                    <IoMdMoon className="size-5 group-hover:animate-blink" />
                )}
            </button>
        </div>
    );
};

export default ThemeButton;
