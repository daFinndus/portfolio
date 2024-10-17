import React, { useCallback, useEffect, useState } from "react";
import { validateLogin } from "../utils/validation";
import { useScramble } from "use-scramble";

import InputField from "./InputField";
import FormButton from "./FormButton";
import Throbber from "./Throbber";
import ButtonShort from "./ButtonShort";

import useLoader from "../hooks/useLoader";
import delay from "../utils/delay";

import { ImCross } from "react-icons/im";

/**
 * Greetings that are displayed to the user
 */
const GREETINGS = [
    "Welcome back, Choom!",
    "Hello, Samurai!",
    "Greetings, Choomba!",
    "Great to see you again, fella!",
    "01001000 01100101 01101100 01101100 01101111",
    "48 65 6C 6C 6F",
];

/**
 * Get a random greeting from the list
 * @param greeting - the current greeting
 */
const getGreeting = (greeting: string) => {
    const temp = GREETINGS.filter((salute) => salute !== greeting);
    return temp[Math.floor(Math.random() * temp.length)];
};

interface LoginPopupProps {
    close: () => void;
    change: () => void;
}

/**
 * The login popup component
 * @param close - the function to close the popup
 * @param change - the function to change the form to register
 */
const LoginPopup: React.FC<LoginPopupProps> = ({ close, change }) => {
    const { loader, toggleLoader, updateMessage } = useLoader({
        visible: false,
        throbber: false,
        message: "",
    });

    const [greeting, setGreeting] = useState(getGreeting(""));
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const { ref } = useScramble({
        text: greeting,
        tick: 1,
        seed: 3,
        speed: 0.5,
        overflow: true,
        overdrive: true,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(getGreeting(greeting));
        }, 5000);

        return () => clearInterval(interval);
    }, [greeting]);

    useEffect(() => {
        if (loader.visible) {
            const timeout = setTimeout(() => {
                toggleLoader(false, "");
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [loader, toggleLoader]);

    /**
     * Function for handling an input change
     */
    const handleInputChange = useCallback(
        (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({ ...prev, [field]: e.target.value }));
        },
        [],
    );

    /**
     * Function for logging in the user
     */
    const loginUser = useCallback(async () => {
        // Delay the function to make bruteforce attacks inefficient
        toggleLoader(true, "Trying to login now...");
        await delay(1500);

        const { username, password } = formData;

        // Delay the function to show the loading screen
        updateMessage("You cannot login yet..");
        await delay(1500);

        if (!validateLogin(username, password)) {
            console.log("Going to return the login function now...");
            toggleLoader(false, "");
            return;
        }

        console.log("Check database entries now..");
        toggleLoader(false, "");
    }, [formData, toggleLoader, updateMessage]);

    return (
        <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90">
            <div className="relative flex h-fit w-full max-w-[512px] flex-col items-center justify-center border-2 border-dark-gray bg-dark-white px-3 text-dark-gray dark:border-cream-white dark:bg-light-black dark:text-cream-white">
                <div className="mb-16 mt-10 flex flex-col items-center justify-center">
                    <h1 className="font-cyberpunk text-2xl shadow-light-gray text-shadow-sm lg:text-3xl">
                        Dive deep
                    </h1>
                    <h3 className="absolute top-20 flex w-full justify-center text-lg">
                        <span ref={ref}></span>
                    </h3>
                </div>
                <div className="mt-5 flex w-full flex-col gap-3">
                    <InputField
                        id="username"
                        limit={16}
                        onBlur={() => {}}
                        onChange={handleInputChange("username")}
                        onFocus={() => {}}
                        placeholder="Username"
                        value={formData.username}
                    />
                    <InputField
                        id="password"
                        limit={72}
                        onBlur={() => {}}
                        onChange={handleInputChange("password")}
                        onFocus={() => {}}
                        placeholder="Password"
                        value={formData.password}
                    />
                </div>
                <div className="absolute right-0 top-0">
                    <ButtonShort
                        border={false}
                        icon={ImCross}
                        onClick={close}
                        title="This is the close button"
                    />
                </div>
                <div className="mb-5 w-full">
                    <FormButton
                        onClick={loginUser}
                        text="Login"
                        title="This is the login button"
                        disabled={false}
                    />
                    <FormButton
                        onClick={() =>
                            toggleLoader(true, "This is not implemented yet..")
                        }
                        text="Forgot password?"
                        title="This is the forgot password button"
                        disabled={false}
                    />
                    <FormButton
                        onClick={change}
                        text="I haven't registered yet"
                        title="Change the form to register"
                        disabled={false}
                    />
                </div>
            </div>
            <Throbber
                loading={loader.visible}
                throbber={loader.throbber}
                message={loader.message}
            />
        </div>
    );
};

export default LoginPopup;
