import { useEffect, useState } from "react";
import { grid } from "ldrs";

grid.register();

interface ThrobberProps {
    loading: boolean;
    throbber: boolean;
}

const Throbber = ({ loading, throbber }: ThrobberProps) => {
    const [color, setColor] = useState("#3c3c3c"); // Default color

    useEffect(() => {
        // Function to update the grid color based on the "dark" class on the body
        const updateColor = () => {
            const isDarkMode = document.body.classList.contains("dark");
            setColor(isDarkMode ? "#fcfbf4" : "#3c3c3c");
        };

        // Set initial color based on the current class
        updateColor();

        // Create a MutationObserver to detect changes in the body's class attribute
        const observer = new MutationObserver(() => {
            updateColor();
        });

        // Observe the body element for class attribute changes
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Cleanup the observer when the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className={`${
                loading ? "opacity-100" : "opacity-0"
            } fixed z-10 ${throbber ? "block" : "hidden"} left-0 top-0 flex h-full min-h-[100%] w-screen items-center justify-center bg-cream-white bg-[radial-gradient(#3c3c3c,transparent_2px)] py-16 transition-opacity duration-1000 [background-size:32px_32px] dark:bg-dark-gray dark:bg-[radial-gradient(#fcfbf4,transparent_2px)]`}
        >
            <div className="item-center relative flex h-52 w-52 justify-center rounded-full bg-cream-white p-8 shadow-dark-black drop-shadow-2xl dark:bg-dark-gray">
                <div className="absolute top-12">
                    <l-grid size="128" speed="1.5" color={color}></l-grid>
                </div>
            </div>
        </div>
    );
};

export default Throbber;
