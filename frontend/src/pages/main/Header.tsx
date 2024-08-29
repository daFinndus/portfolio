import React, { useCallback, useState } from "react";

import PageList from "../../components/PageList";
import Clock from "../../components/DigitalClock";
import ButtonWide from "../../components/ButtonWide";
import ButtonShort from "../../components/ButtonShort";
import LoginPopup from "../../components/LoginPopup";
import RegisterPopup from "../../components/RegisterPopup";

import user from "../../assets/icons/user.png";
import burger from "../../assets/icons/hamburger_icon.png";

const Header = () => {
    const [list, setList] = useState(false);
    const [formState, setFormState] = useState({
        login: false,
        register: false,
    });

    const toggleForm = useCallback(() => {
        setFormState((prevState) => ({
            login: !prevState.login,
            register: !prevState.register,
        }));
    }, []);

    return (
        <header className="bg-light-black text-cream-white relative flex h-40 w-full items-center justify-center p-4">
            <div className="absolute left-4 hidden flex-col items-center justify-center lg:flex">
                <ButtonWide
                    onClick={() =>
                        setFormState({
                            login: true,
                            register: false,
                        })
                    }
                    text="Login"
                    src={user}
                    title="Click to log in to your account"
                    alt="User icon"
                />
                <ButtonWide
                    onClick={() => setList(true)}
                    text="See all pages"
                    src={burger}
                    title="See what this page is made of"
                    alt="Hamburger icon"
                />
            </div>
            <div className="absolute left-4 flex flex-col items-center justify-center lg:hidden">
                <ButtonShort
                    onClick={() =>
                        setFormState({
                            login: true,
                            register: false,
                        })
                    }
                    border={true}
                    src={user}
                    title="Click to log in to your account"
                    alt="User icon"
                />
                <ButtonShort
                    onClick={() => setList(true)}
                    border={true}
                    src={burger}
                    title="See what this page is made of"
                    alt="Hamburger icon"
                />
            </div>
            <h1 className="shadow-light-gray font-cyberpunk text-lg font-bold text-shadow-sm md:text-3xl">
                daFinndus'
            </h1>
            <div className="absolute right-8 flex flex-col items-center justify-center text-sm md:text-2xl">
                <Clock />
            </div>
            {list && <PageList close={() => setList(false)} />}
            {formState.login && (
                <LoginPopup
                    close={() =>
                        setFormState({
                            login: false,
                            register: false,
                        })
                    }
                    change={toggleForm}
                />
            )}
            {formState.register && (
                <RegisterPopup
                    close={() => {
                        setFormState({
                            login: false,
                            register: false,
                        });
                    }}
                    change={toggleForm}
                />
            )}
        </header>
    );
};

export default Header;
