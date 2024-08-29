import { useCallback, useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import { useNavigate } from "react-router-dom";

import ButtonWide from "./ButtonWide";
import ButtonShort from "./ButtonShort";

import cross from "../assets/icons/cross.png";
import website from "../assets/icons/website.png";

const SUBTITLE = [
    "Come to see all pages!",
    "Check out my page",
    "See what I have to offer",
    "Check out the content!",
    "Come and see",
    "Thank you for visiting",
    "Love you for seeing around",
];

const getSubtitle = (subtitle: string) => {
    const temp = SUBTITLE.filter((tagline) => tagline !== subtitle);
    return temp[Math.floor(Math.random() * temp.length)];
};

interface SideBarProps {
    close: () => void;
}

const PageList = ({ close }: SideBarProps) => {
    const navigate = useNavigate();
    const [subtitle, setSubtitle] = useState(getSubtitle(""));

    const { ref } = useScramble({
        text: subtitle,
        tick: 1,
        seed: 3,
        speed: 0.5,
        overflow: true,
        overdrive: true,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setSubtitle(getSubtitle(subtitle));
        }, 5000);

        return () => clearInterval(interval);
    }, [subtitle]);

    const routePage = useCallback(
        (path: string) => {
            console.log("Trying to redirect to:", path);
            navigate(path, { replace: true });
        },
        [navigate],
    );

    return (
        <>
            <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90">
                <div className="border-cream-white bg-light-black relative flex h-fit w-full max-w-[412px] flex-col justify-center border-4 px-3">
                    <div className="mb-8 mt-10 flex flex-col items-center justify-center">
                        <h1 className="text-cream-white shadow-dark-gray font-cyberpunk text-2xl text-shadow-sm lg:text-3xl">
                            Check it out
                        </h1>
                        <h3 className="text-cream-white absolute top-20 text-lg">
                            <span ref={ref}></span>
                        </h3>
                        <div className="mt-16 flex w-full flex-col items-center gap-1">
                            <ButtonWide
                                onClick={() => routePage("/")}
                                text="Home"
                                src={website}
                                title="Return to the homepage"
                                alt="Mask icon"
                            />
                            <ButtonWide
                                onClick={() => routePage("/speedtest")}
                                text="Speedtest"
                                src={""}
                                title="Check your internet speed"
                                alt="No icon"
                            />
                            <div className="absolute right-0 top-0">
                                <ButtonShort
                                    alt="Close button"
                                    border={false}
                                    onClick={close}
                                    src={cross}
                                    title="This is the close button"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageList;
