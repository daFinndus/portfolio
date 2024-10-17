import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

/**
 * This is an universal footer component that is used on all pages.
 */
const FooterUniversal = () => {
    return (
        <footer className="relative z-20 flex h-40 w-full items-center justify-center bg-dark-white p-4 text-dark-gray dark:bg-light-black dark:text-cream-white">
            <div className="flex flex-row space-x-10">
                <a href="https://github.com/daFinndus">
                    <FaGithub className="size-10 hover:animate-blink" />
                </a>
                <a href="https://x.com/daFinndus">
                    <FaXTwitter className="size-10 hover:animate-blink" />
                </a>
                <a href="https://www.linkedin.com/in/finn-luca-jensen-98a839286/">
                    <FaLinkedin className="size-10 hover:animate-blink" />
                </a>
                <a href="https://www.instagram.com/finnjensn/">
                    <FaInstagram className="size-10 hover:animate-blink" />
                </a>
            </div>
        </footer>
    );
};

export default FooterUniversal;
