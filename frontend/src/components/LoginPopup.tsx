import React, { useState, useEffect, useCallback } from "react";
import { validateLogin } from "../utils/validation";
import { useScramble } from "use-scramble";

import InputField from "./InputField";
import FormButton from "./FormButton";
import ButtonShort from "./ButtonShort";
import PopupMessage from "./PopupMessage";

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
    const [error, setError] = useState({ visible: false, message: "" });
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

    // This is for showing the error message
    const showError = useCallback((message: string) => {
        setError({ visible: true, message: message });
    }, []);

    useEffect(() => {
        if (error.visible) {
            const timer = setTimeout(() => {
                setError({ visible: false, message: error.message });
            }, 3000); // Hide after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleInputChange = useCallback(
        (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({ ...prev, [field]: e.target.value }));
        },
        [],
    );

    const loginUser = useCallback(() => {
        const { username, password } = formData;

        if (!validateLogin(username, password)) {
            showError("Invalid username or password");
            return;
        }

        // Do the login here
        console.log("Check database entries now..");
        showError("This feature is not implemented yet");
    }, [formData, showError]);

    return (
        <div className="fixed top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-90">
            <div className="relative flex h-fit w-full max-w-[512px] flex-col items-center justify-center border-4 bg-light-black px-3">
                <div className="mb-16 mt-10 flex flex-col items-center justify-center">
                    <h1 className="font-cyberpunk text-2xl text-cream-white shadow-light-gray text-shadow-sm lg:text-3xl">
                        Dive deep
                    </h1>
                    <h3 className="absolute top-20 flex w-full justify-center text-lg text-cream-white">
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
                        onClick={() => showError("This is not implemented yet")}
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
                <PopupMessage
                    id="err-message"
                    text={error.message}
                    visible={error.visible}
                />
            </div>
        </div>
    );
};

export default LoginPopup;
