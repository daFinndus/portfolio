import thailand from "../../assets/images/thailand.png";

interface CustomLinkProps {
    href: string;
    text: string;
}

/**
 * This is a custom link component that styles the link to match the design of the website.
 * @param href - the link to redirect to
 * @param text - the text to display
 */
const CustomLink = ({ href, text }: CustomLinkProps) => (
    <a
        href={href}
        className="text-dark-gray underline hover:text-dark-black dark:text-cream-white dark:hover:text-dark-white"
    >
        {text}
    </a>
);

/**
 * This is the about page of the website.
 */
const About = () => {
    return (
        <div className="flex h-screen min-h-[768px] w-screen items-center justify-center bg-cream-white bg-[radial-gradient(#3c3c3c,transparent_2px)] [background-size:32px_32px] dark:bg-medium-gray dark:bg-[radial-gradient(#fcfbf4,transparent_2px)]">
            <div className="relative mx-3 flex flex-row items-center justify-center border-4 border-dark-gray bg-cream-white pt-5 text-dark-gray drop-shadow-2xl dark:bg-medium-gray dark:text-cream-white md:h-auto md:w-3/5 md:px-10">
                <div className="flex h-full max-w-xl flex-col items-center justify-center p-3 text-center text-lg lg:py-10">
                    <img
                        className="absolute left-0 top-0 hidden -translate-x-32 -translate-y-4 drop-shadow-2xl lg:table lg:h-60 lg:w-60 lg:-translate-x-36"
                        src={thailand}
                        alt="Finn Luca Jensen"
                        title="That is me in Thailand on a small boat"
                    />
                    <h1 className="mb-7 font-cyberpunk text-3xl shadow-dark-black text-shadow-sm">
                        Who am I
                    </h1>
                    <div className="lg:w-96">
                        <p className="mb-10">
                            Hey there, great to have you here!
                        </p>
                        <p className="mb-10">
                            My name is Finn, a 21 year old media engineering
                            student at the University of Applied Sciences in
                            Kiel.
                        </p>
                        <p className="mb-10">
                            I am passionate about cybersecurity and currently
                            honing my skills with{" "}
                            <CustomLink
                                href="https://hackthebox.com"
                                text="Hack the Box"
                            />
                            . Simultaneously, I'm diving deep into web
                            development and design to create modern, engaging
                            experiences. I thrive on the idea of building
                            something futuristic and am always on the lookout
                            for new challenges.
                        </p>
                        <p className="mb-10">
                            The{" "}
                            <CustomLink
                                href="https://www.raspberrypi.org/"
                                text="Raspberry Pi"
                            />{" "}
                            is my go-to gadget for automating tasks of all
                            kinds, and I love experimenting with it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
