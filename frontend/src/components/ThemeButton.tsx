import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { AiFillSun } from "react-icons/ai";
import { IoMdMoon } from "react-icons/io";

/**
 * This is the theme button component that toggles between light and dark mode.
 */
const ThemeButton = () => {
    const [cookies, setCookie] = useCookies(["dark"]);
    const [dark, setDark] = useState(cookies.dark);

    // Set body class based on initial cookie state
    useEffect(() => {
        console.log("Dark mode is", cookies.dark);
        console.log("On the page it is", dark);

        const isDark = cookies.dark;
        setDark(isDark);

        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [dark, cookies.dark]);

    /**
     * This function toggles the dark mode on and off.
     * It also sets the cookie to the new dark mode state.
     */
    const darkModeHandler = () => {
        setDark((prevDark: boolean) => {
            const newDark = !prevDark;
            document.body.classList.toggle("dark", newDark);
            console.log("Setting cookie to", newDark);
            setCookie("dark", newDark);
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
