import React, { useState, useEffect, useCallback } from "react";
import { validateRegistration } from "../utils/validation";
import { useScramble } from "use-scramble";

import InputField from "./InputField";
import FormButton from "./FormButton";
import FormLoader from "./FormLoader";
import ButtonShort from "./ButtonShort";

import { ImCross } from "react-icons/im";

const GREETINGS = [
    "Welcome to daFinndus'",
    "Dive deep, choomba!",
    "Ready to roll?",
    "Time to shine!",
];

const getGreeting = (greeting: string) => {
    const temp = GREETINGS.filter((salute) => salute !== greeting);
    return temp[Math.floor(Math.random() * temp.length)];
};

interface RegisterPopupProps {
    close: () => void;
    change: () => void;
}

const RegisterPopup = ({ close, change }: RegisterPopupProps) => {
    const [greeting, setGreeting] = useState(getGreeting(""));
    const [loader, setLoader] = useState({
        visible: false,
        throbber: false,
        message: "",
    });
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

    // This is for showing the loading screen with a specific message
    const toggleLoader = useCallback(
        (state: boolean, message: string) => {
            if (state === false) {
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
            } else if (state === true) {
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
        [loader],
    );

    useEffect(() => {
        if (loader.visible) {
            const timeout = setTimeout(() => {
                toggleLoader(false, "");
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [loader, toggleLoader]);

    const handleInputChange = useCallback(
        (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({ ...prev, [field]: e.target.value }));
        },
        [],
    );

    const registerUser = useCallback(() => {
        const { email, username, password, confirm } = formData;
        toggleLoader(true, "Register is not possible yet..");

        if (!validateRegistration(email, username, password, confirm)) {
            return;
        }

        console.log("Setting up the user now...");
    }, [formData, toggleLoader]);

    return (
        <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90">
            <div className="relative flex h-fit w-full max-w-[512px] flex-col items-center justify-center border-4 bg-light-black px-3">
                <div className="mb-16 mt-10 flex items-center justify-center">
                    <h1 className="font-cyberpunk text-2xl text-cream-white shadow-light-gray text-shadow-sm lg:text-3xl">
                        Hola
                    </h1>
                    <h3 className="absolute top-20 text-lg text-cream-white">
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
            <FormLoader
                loading={loader.visible}
                throbber={loader.throbber}
                message={loader.message}
            />
        </div>
    );
};

export default RegisterPopup;
