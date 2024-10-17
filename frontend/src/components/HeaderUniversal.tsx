import { useState } from "react";

import PageList from "./PageList";
import Clock from "./DigitalClock";
import ButtonWide from "./ButtonWide";
import ButtonShort from "./ButtonShort";
import ThemeButton from "./ThemeButton";

import { RxHamburgerMenu } from "react-icons/rx";

interface HeaderProps {
    title: string;
}

/**
 * This is an universal header component that is used in nearly all pages.
 * @param title - the title of the page
 */
const HeaderUniversal = ({ title }: HeaderProps) => {
    const [list, setList] = useState(false);

    return (
        <header className="relative z-20 flex h-40 w-full items-center justify-center bg-dark-white p-4 text-dark-gray dark:bg-light-black dark:text-cream-white">
            <ThemeButton />
            <div className="absolute left-4 hidden flex-col items-center justify-center lg:flex">
                <ButtonWide
                    icon={RxHamburgerMenu}
                    onClick={() => setList(true)}
                    text="See all pages"
                    title="See what this page is made of"
                />
            </div>
            <div className="absolute left-4 flex flex-col items-center justify-center lg:hidden">
                <ButtonShort
                    border={true}
                    icon={RxHamburgerMenu}
                    onClick={() => setList(true)}
                    title="See what this page is made of"
                />
            </div>
            <h1 className="font-cyberpunk text-lg font-bold shadow-light-gray text-shadow-sm md:text-3xl">
                {title}
            </h1>
            <div className="absolute right-8 flex flex-col items-center justify-center text-sm md:text-2xl">
                <Clock />
            </div>
            {list && <PageList close={() => setList(false)} />}
        </header>
    );
};

export default HeaderUniversal;
