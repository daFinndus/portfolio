import call from "../../assets/images/thailand.png";

interface CustomLinkProps {
    href: string;
    text: string;
}

const CustomLink = ({ href, text }: CustomLinkProps) => (
    <a href={href} className="text-dark-gray underline hover:text-dark-black">
        {text}
    </a>
);

const About = () => {
    return (
        <div className="flex h-screen min-h-[768px] w-screen items-center justify-center bg-cream-white bg-[radial-gradient(#060606,transparent_2px)] [background-size:32px_32px]">
            <div className="relative flex flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:border-dark-gray md:bg-cream-white md:px-10">
                <div className="mx-3 mt-7 flex h-full max-w-xl flex-col items-center justify-center bg-cream-white p-3 text-center text-lg text-dark-gray md:text-dark-gray">
                    <img
                        className="absolute left-0 top-0 hidden -translate-x-32 -translate-y-4 drop-shadow-2xl lg:table lg:h-60 lg:w-60 lg:-translate-x-36"
                        src={call}
                        alt="Finn Luca Jensen"
                        title="That is me in Thailand on a small boat"
                    />
                    <h1 className="mb-7 font-cyberpunk text-3xl shadow-dark-black text-shadow-sm">
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
