import { useCallback, useEffect, useState } from "react";
import { useScramble } from "use-scramble";
import { useNavigate } from "react-router-dom";

import ButtonWide from "./ButtonWide";
import ButtonShort from "./ButtonShort";

import { ImCross } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { IoIosSchool } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";

/**
 * Subtitles that are displayed to the user
 */
const SUBTITLE = [
    "Come to see all pages!",
    "Check out my page",
    "See what I have to offer",
    "Check out the content!",
    "Come and see",
    "Thank you for visiting",
    "Love you for seeing around",
];

/**
 * Get a random subtitle from the list
 * @param subtitle - the current subtitle
 */
const getSubtitle = (subtitle: string) => {
    const temp = SUBTITLE.filter((tagline) => tagline !== subtitle);
    return temp[Math.floor(Math.random() * temp.length)];
};

interface SideBarProps {
    close: () => void;
}

/**
 * The page list component
 * @param close - the function to close the sidebar
 */
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

    /**
     * Route to a specific page
     */
    const routePage = useCallback(
        (path: string) => {
            console.log("Trying to redirect to:", path);
            navigate(path, { replace: true });
        },
        [navigate],
    );

    return (
        <>
            <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90 text-dark-gray dark:text-cream-white">
                <div className="relative flex h-fit w-full max-w-[412px] flex-col justify-center border-2 border-dark-gray bg-dark-white px-3 dark:border-cream-white dark:bg-light-black">
                    <div className="mb-8 mt-10 flex flex-col items-center justify-center">
                        <h1 className="font-cyberpunk text-2xl shadow-dark-gray text-shadow-sm lg:text-3xl">
                            Check it out
                        </h1>
                        <h3 className="absolute top-20 text-lg">
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
                            <ButtonWide
                                icon={IoIosSchool}
                                onClick={() => routePage("/vitae")}
                                text="Curriculum Vitae"
                                title="Check out my curriculum vitae"
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
