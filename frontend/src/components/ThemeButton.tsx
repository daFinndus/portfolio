import React, { useState } from "react";

import { AiFillSun } from "react-icons/ai";
import { IoMdMoon } from "react-icons/io";

const ThemeButton = () => {
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    };

    return (
        <div className="group absolute right-2 top-2 flex h-8 w-8 cursor-link duration-700 hover:duration-0">
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
