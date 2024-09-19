import { useState } from "react";

import PageList from "./PageList";
import Clock from "./DigitalClock";
import ButtonWide from "./ButtonWide";
import ButtonShort from "./ButtonShort";

import { RxHamburgerMenu } from "react-icons/rx";

interface HeaderProps {
    title: string;
}

const HeaderUniversal = ({ title }: HeaderProps) => {
    const [list, setList] = useState(false);

    return (
        <header className="relative z-20 flex h-40 w-full items-center justify-center bg-light-black p-4 text-cream-white">
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
            <h1 className="font-cyberpunk text-lg font-bold text-cream-white shadow-light-gray text-shadow-default md:text-3xl">
                {title}
            </h1>
            <div className="absolute right-8 flex flex-col items-center justify-center text-sm text-cream-white md:text-2xl">
                <Clock />
            </div>
            {list && <PageList close={() => setList(false)} />}
        </header>
    );
};

export default HeaderUniversal;
