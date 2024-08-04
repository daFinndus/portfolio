import React, { useState } from "react";

import PageList from "./PageList";
import Clock from "./DigitalClock";
import ButtonWide from "./ButtonWide";
import ButtonShort from "./ButtonShort";

import burger from "../assets/icons/hamburger_icon.png";

interface HeaderProps {
    red: boolean;
    title: string;
}

const HeaderUniversal = ({ red, title }: HeaderProps) => {
    const [list, setList] = useState(false);

    return (
        <header
            className={`relative flex h-40 w-full items-center justify-center p-4 ${red ? "bg-cp-red" : "bg-cp-yellow"}`}
        >
            <div className="absolute left-4 hidden flex-col items-center justify-center lg:flex">
                <ButtonWide
                    onClick={() => setList(true)}
                    text="See all pages"
                    src={burger}
                    title="See what this page is made of"
                    alt="Hamburger icon"
                />
            </div>
            <div className="absolute left-4 flex flex-col items-center justify-center lg:hidden">
                <ButtonShort
                    onClick={() => setList(true)}
                    border={true}
                    src={burger}
                    title="See what this page is made of"
                    alt="Hamburger icon"
                />
            </div>
            <h1 className="font-cyberpunk text-lg font-bold text-cp-blue shadow-cp-dark-blue text-shadow-default md:text-3xl">
                {title}
            </h1>
            <div className="absolute right-8 flex flex-col items-center justify-center text-sm text-cp-dark-red hover:text-cp-blue md:text-2xl">
                <Clock />
            </div>
            {list && <PageList close={() => setList(false)} />}
        </header>
    );
};

export default HeaderUniversal;
