import React from "react";

import call from "../../assets/images/thailand.png";

interface CustomLinkProps {
    href: string;
    text: string;
}

const CustomLink = ({ href, text }: CustomLinkProps) => (
    <a
        href={href}
        className="text-cp-dark-blue hover:text-cp-blue md:text-cp-yellow md:hover:text-cp-dark-red"
    >
        {text}
    </a>
);

const About = () => {
    return (
        <div className="bg-cp-yellow flex h-screen min-h-[768px] w-screen items-center justify-center bg-[radial-gradient(#500014,transparent_1px)] [background-size:32px_32px]">
            <div className="md:border-cp-blue md:bg-cp-red relative flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:px-10">
                <div className="text-cp-red md:text-cp-blue mx-10 mt-7 flex h-full w-full max-w-xl flex-col items-center justify-center text-center text-lg md:text-xl lg:px-0 xl:text-2xl">
                    <img
                        className="absolute left-0 top-0 hidden -translate-x-32 -translate-y-4 drop-shadow-2xl lg:table lg:h-60 lg:w-60 lg:-translate-x-36"
                        src={call}
                        alt="Finn Luca Jensen"
                        title="That is me in Thailand on a small boat"
                    />
                    <h1 className="font-cyberpunk shadow-cp-dark-red text-shadow-sm md:shadow-cp-blue mb-7 text-3xl">
                        Who am I
                    </h1>
                    <p className="mb-10">Hey there, great to have you here!</p>
                    <p className="mb-10">
                        My name is Finn, a 21 year old media engineering student
                        at the University of Applied Sciences in Kiel.
                    </p>
                    <p className="mb-10">
                        I am passionate about cybersecurity and currently honing
                        my skills with{" "}
                        <CustomLink
                            href="https://hackthebox.com"
                            text="Hack the Box"
                        />
                        . Simultaneously, I'm diving deep into web development
                        and design to create modern, engaging experiences. I
                        thrive on the idea of building something futuristic and
                        am always on the lookout for new challenges.
                    </p>
                    <p className="mb-10">
                        The{" "}
                        <CustomLink
                            href="https://www.raspberrypi.org/"
                            text="Raspberry Pi"
                        />{" "}
                        is my go-to gadget for automating tasks of all kinds,
                        and I love experimenting with it.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
