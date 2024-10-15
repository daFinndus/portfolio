import React, { useState, useEffect, useCallback } from "react";
import { validateLogin } from "../utils/validation";
import { useScramble } from "use-scramble";

import InputField from "./InputField";
import FormButton from "./FormButton";
import FormLoader from "./FormLoader";
import ButtonShort from "./ButtonShort";

import { ImCross } from "react-icons/im";

const GREETINGS = [
    "Welcome back, Choom!",
    "Hello, Samurai!",
    "Greetings, Choomba!",
    "Great to see you again, fella!",
    "01001000 01100101 01101100 01101100 01101111",
    "48 65 6C 6C 6F",
];

const getGreeting = (greeting: string) => {
    const temp = GREETINGS.filter((salute) => salute !== greeting);
    return temp[Math.floor(Math.random() * temp.length)];
};

interface LoginPopupProps {
    close: () => void;
    change: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ close, change }) => {
    const [greeting, setGreeting] = useState(getGreeting(""));
    const [loader, setLoader] = useState({
        visible: false,
        throbber: false,
        message: "",
    });
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

    const loginUser = useCallback(() => {
        const { username, password } = formData;
        toggleLoader(true, "Login is not possible yet..");

        if (!validateLogin(username, password)) {
            return;
        }

        // Hier sollte die tatsächliche Login-Logik sein
        console.log("Check database entries now..");
    }, [formData, toggleLoader]);

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
            <FormLoader
                loading={loader.visible}
                throbber={loader.throbber}
                message={loader.message}
            />
        </div>
    );
};

export default LoginPopup;
