import React, { useState, useEffect, useCallback } from "react";
import { validateRegistration } from "../utils/validation";
import { useScramble } from "use-scramble";
import InputField from "./InputField";
import FormButton from "./FormButton";
import PopupMessage from "./PopupMessage";
import ButtonShort from "./ButtonShort";
import cross from "../assets/icons/cross.png";

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
    const [error, setError] = useState({ visible: false, message: "" });
    const [req, setReq] = useState({
        visible: false,
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

    // This is for showing the error message
    const showError = useCallback((message: string) => {
        setError({ visible: true, message: message });
    }, []);

    // This is for letting the error requirement fade away after 5s
    useEffect(() => {
        if (error.visible) {
            const timer = setTimeout(() => {
                setError({ visible: false, message: error.message });
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    // This is for showing the requirement message
    const showRequirement = useCallback(
        (message: string) => {
            setReq({ visible: !req.visible, message: message });
        },
        [req],
    );

    const handleInputChange = useCallback(
        (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({ ...prev, [field]: e.target.value }));
        },
        [],
    );

    const registerUser = useCallback(() => {
        const { email, username, password, confirm } = formData;

        if (!validateRegistration(email, username, password, confirm)) {
            showError(
                "Invalid registration details. Please check and try again.",
            );
            return;
        }
    }, [formData, showError]);

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
                        onBlur={() =>
                            showRequirement(
                                "The email needs to be a real, valid email address.",
                            )
                        }
                        onChange={handleInputChange("email")}
                        onFocus={() =>
                            showRequirement(
                                "The email needs to be a real, valid email address.",
                            )
                        }
                        placeholder="Email"
                        value={formData.email}
                    />
                    <InputField
                        id="username"
                        limit={16}
                        onBlur={() =>
                            showRequirement(
                                "The username can only contain letters, numbers, and underscores.",
                            )
                        }
                        onChange={handleInputChange("username")}
                        onFocus={() =>
                            showRequirement(
                                "The username can only contain letters, numbers, and underscores.",
                            )
                        }
                        placeholder="Username"
                        value={formData.username}
                    />
                    <InputField
                        id="password"
                        limit={72}
                        onBlur={() =>
                            showRequirement(
                                "Your password should contain at least 8 characters, including upper and lower case letters, numbers, and special characters.",
                            )
                        }
                        onChange={handleInputChange("password")}
                        onFocus={() =>
                            showRequirement(
                                "Your password should contain at least 8 characters, including upper and lower case letters, numbers, and special characters.",
                            )
                        }
                        placeholder="Password"
                        value={formData.password}
                    />
                    <InputField
                        id="confirm"
                        limit={72}
                        onBlur={() =>
                            showRequirement(
                                "Type the same password again for confirmation.",
                            )
                        }
                        onChange={handleInputChange("confirm")}
                        onFocus={() =>
                            showRequirement(
                                "Type the same password again for confirmation.",
                            )
                        }
                        placeholder="Confirm Password"
                        value={formData.confirm}
                    />
                </div>
                <div className="absolute right-0 top-0">
                    <ButtonShort
                        alt="Close button"
                        border={false}
                        onClick={close}
                        src={cross}
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
                <PopupMessage
                    id="req-message"
                    text={req.message}
                    visible={req.visible}
                />
                <PopupMessage
                    id="err-message"
                    text={error.message}
                    visible={error.visible}
                />
            </div>
        </div>
    );
};

export default RegisterPopup;
