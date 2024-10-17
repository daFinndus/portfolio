import React, { useCallback } from "react";

interface useLoaderProps {
    visible: boolean;
    throbber: boolean;
    message: string;
}

/**
 * This hook is used to manage the loader state for throbbers
 * @param visible - a boolean, that determines if the loader is visible
 * @param throbber - a boolean, that determines if the throbber is displayed
 * @param message - a string, that will be displayed in the loader
 * @returns An object with the loader state, a function to toggle the loader, and a function to update the message
 */
const useLoader = ({ visible, throbber, message }: useLoaderProps) => {
    const [loader, setLoader] = React.useState({
        visible: visible,
        throbber: throbber,
        message: message,
    });

    /**
     * This function is used to toggle the loader on and off
     * @param state - a boolean
     * @param message - a string, that will be displayed in the loader
     */
    const toggleLoader = useCallback(
        (state: boolean, message: string) => {
            console.log("Toggling loader to", state, "with message", message);

            if (!state) {
                setLoader({
                    visible: false,
                    throbber: true,
                    message: loader.message,
                });

                setTimeout(() => {
                    setLoader({
                        visible: false,
                        throbber: false,
                        message: loader.message,
                    });
                }, 1500);
            } else if (state) {
                setLoader({
                    visible: false,
                    throbber: true,
                    message: message,
                });

                setTimeout(() => {
                    setLoader({
                        visible: true,
                        throbber: true,
                        message: message,
                    });
                }, 500);
            }
        },
        [setLoader, loader.message],
    );

    /**
     * This function is used to update the message displayed in the loader
     * @param message - a string, that will be displayed in the loader
     */
    const updateMessage = useCallback(
        (message: string) => {
            setLoader((prev) => ({ ...prev, message }));
        },
        [setLoader],
    );

    return {
        loader,
        toggleLoader,
        updateMessage,
    };
};

export default useLoader;
