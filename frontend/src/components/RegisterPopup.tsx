import React, { useCallback, useEffect, useState } from "react";
import { validateRegistration } from "../utils/validation";
import { useScramble } from "use-scramble";

import Throbber from "./Throbber";
import InputField from "./InputField";
import FormButton from "./FormButton";
import ButtonShort from "./ButtonShort";

import useLoader from "../hooks/useLoader";
import delay from "../utils/delay";

import { ImCross } from "react-icons/im";

/**
 * Greetings that are displayed to the user
 */
const GREETINGS = [
    "Welcome to daFinndus'",
    "Dive deep, choomba!",
    "Ready to roll?",
    "Time to shine!",
];

/**
 * Get a random greeting from the list
 * @param greeting - the current greeting
 */
const getGreeting = (greeting: string) => {
    const temp = GREETINGS.filter((salute) => salute !== greeting);
    return temp[Math.floor(Math.random() * temp.length)];
};

interface RegisterPopupProps {
    close: () => void;
    change: () => void;
}

/**
 * The register popup component
 * @param close - the function to close the popup
 * @param change - the function to change the form to login
 */
const RegisterPopup = ({ close, change }: RegisterPopupProps) => {
    const { loader, toggleLoader, updateMessage } = useLoader({
        visible: false,
        throbber: false,
        message: "",
    });

    const [greeting, setGreeting] = useState(getGreeting(""));
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirm: "",
    });

    const { ref } = useScramble({
        text: greeting,
        tick: 1,
        seed: 3,
        speed: 0.5,
        overflow: true,
        overdrive: true,
    });

    // This is for changing the greeting every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting((prevGreeting) => getGreeting(prevGreeting));
        }, 5000);

        return () => clearInterval(interval);
    }, [greeting]);

    /**
     * Handle the input change for the form fields
     */
    const handleInputChange = useCallback(
        (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({ ...prev, [field]: e.target.value }));
        },
        [],
    );

    /**
     * Function for signing up a user
     */
    const registerUser = useCallback(async () => {
        toggleLoader(true, "Setting up your account...");
        await delay(1500);

        const { email, username, password, confirm } = formData;

        updateMessage("Sorry, this feature is not available yet!");
        await delay(1500);

        if (!validateRegistration(email, username, password, confirm)) {
            console.log("Going to return the registration function now...");
            toggleLoader(false, "");
            return;
        }

        console.log("Setting up the user now...");
        toggleLoader(false, "");
    }, [formData, toggleLoader, updateMessage]);

    return (
        <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90">
            <div className="relative flex h-fit w-full max-w-[512px] flex-col items-center justify-center border-2 border-dark-gray bg-dark-white px-3 dark:border-cream-white dark:bg-light-black">
                <div className="mb-16 mt-10 flex items-center justify-center">
                    <h1 className="font-cyberpunk text-2xl text-dark-gray shadow-light-gray text-shadow-sm dark:text-cream-white lg:text-3xl">
                        Hola
                    </h1>
                    <h3 className="absolute top-20 text-lg">
                        <span ref={ref}></span>
                    </h3>
                </div>
                <div className="mt-5 flex w-full flex-col gap-3">
                    <InputField
                        id="email"
                        limit={256}
                        onBlur={() => {}}
                        onChange={handleInputChange("email")}
                        onFocus={() => {}}
                        placeholder="Email"
                        value={formData.email}
                    />
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
                    <InputField
                        id="confirm"
                        limit={72}
                        onBlur={() => {}}
                        onChange={handleInputChange("confirm")}
                        onFocus={() => {}}
                        placeholder="Confirm Password"
                        value={formData.confirm}
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
                        onClick={registerUser}
                        text="Register here"
                        title="This is the registration button"
                        disabled={false}
                    />
                    <FormButton
                        onClick={change}
                        text="I'm a user already"
                        title="Change the form to login"
                        disabled={false}
                    />
                </div>
            </div>
            <Throbber
                loading={loader.visible}
                message={loader.message}
                throbber={loader.throbber}
            />
        </div>
    );
};

export default RegisterPopup;
