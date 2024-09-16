import { useCallback, useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import { useNavigate } from "react-router-dom";

import ButtonWide from "./ButtonWide";
import ButtonShort from "./ButtonShort";

import { ImCross } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { IoNewspaper } from "react-icons/io5";

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
                <div className="relative flex h-fit w-full max-w-[412px] flex-col justify-center border-4 border-cream-white bg-light-black px-3">
                    <div className="mb-8 mt-10 flex flex-col items-center justify-center">
                        <h1 className="font-cyberpunk text-2xl text-cream-white shadow-dark-gray text-shadow-sm lg:text-3xl">
                            Check it out
                        </h1>
                        <h3 className="absolute top-20 text-lg text-cream-white">
                            <span ref={ref}></span>
                        </h3>
                        <div className="mt-16 flex w-full flex-col items-center gap-1">
                            <ButtonWide
                                icon={GoHomeFill}
                                onClick={() => routePage("/")}
                                text="Home"
                                title="Return to the homepage"
                            />
                            <ButtonWide
                                icon={IoNewspaper}
                                onClick={() => routePage("/news")}
                                text="News"
                                title="Check the latest news"
                            />
                            <div className="absolute right-0 top-0">
                                <ButtonShort
                                    border={false}
                                    icon={ImCross}
                                    onClick={close}
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
