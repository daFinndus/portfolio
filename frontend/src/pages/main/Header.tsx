import { useCallback, useState } from "react";

import PageList from "../../components/PageList";
import Clock from "../../components/DigitalClock";
import ButtonWide from "../../components/ButtonWide";
import ButtonShort from "../../components/ButtonShort";
import LoginPopup from "../../components/LoginPopup";
import RegisterPopup from "../../components/RegisterPopup";

import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeButton from "../../components/ThemeButton";

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
        <header className="bg-dark-white relative flex h-40 w-full items-center justify-center p-4 text-dark-gray dark:bg-light-black dark:text-cream-white">
            <ThemeButton />
            <div className="absolute left-4 hidden flex-col items-center justify-center lg:flex">
                <ButtonWide
                    icon={FaUser}
                    onClick={() =>
                        setFormState({
                            login: true,
                            register: false,
                        })
                    }
                    text="Login"
                    title="Click to log in to your account"
                />
                <ButtonWide
                    icon={GiHamburgerMenu}
                    onClick={() => setList(true)}
                    text="See all pages"
                    title="See what this page is made of"
                />
            </div>
            <div className="absolute left-4 flex flex-col items-center justify-center lg:hidden">
                <ButtonShort
                    border={true}
                    icon={FaUser}
                    onClick={() =>
                        setFormState({
                            login: true,
                            register: false,
                        })
                    }
                    title="Click to log in to your account"
                />
                <ButtonShort
                    border={true}
                    icon={GiHamburgerMenu}
                    onClick={() => setList(true)}
                    title="See what this page is made of"
                />
            </div>
            <h1 className="font-cyberpunk text-lg font-bold shadow-light-gray text-shadow-sm md:text-3xl">
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
