import React from "react";

import beerpong from "../../assets/images/beerpong.jpg";
import voiceAssistant from "../../assets/images/voice_assistant.jpg";

interface ProjectBlockProps {
    alt: string;
    href: string;
    src: string;
    text: string;
    title: string;
}

const ProjectBlock = ({ alt, href, src, text, title }: ProjectBlockProps) => {
    return (
        <div className="min mb-10 flex h-auto w-3/5 min-w-[296px] flex-row items-center justify-center border-cp-blue bg-black text-center text-cp-red shadow-cp-dark-red md:relative md:w-3/4 md:justify-between md:border-4 md:bg-cp-red md:text-right md:text-cp-blue md:shadow-cp-dark-blue xl:w-1/2">
            <a href={href}>
                <div className="flex flex-row items-center md:mr-3">
                    <img
                        className="mr-10 hidden h-56 w-56 p-5 drop-shadow-2xl md:table"
                        src={src}
                        alt={alt}
                    />
                    <div className="md:w-3/5">
                        <h1 className="mb-7 font-cyberpunk text-2xl shadow-cp-dark-blue text-shadow-sm md:shadow-cp-dark-red">
                            {title}
                        </h1>
                        <p>{text}</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <div className="flex h-screen min-h-[768px] w-screen flex-col items-center justify-center bg-cp-yellow bg-[radial-gradient(#500014,transparent_1px)] [background-size:32px_32px]">
            <ProjectBlock
                href="https://github.com/daFinndus/beerpong"
                title="Beerpong Tracker"
                text="This project was a small project to get to know the basics of OpenCV. It works via a raspberry pi and a camera. The camera is mounted above the beerpong table, it tracks the cups and balls. The project is written in Python. More detes attached."
                src={beerpong}
                alt="Beerpong"
            />
            <ProjectBlock
                href="https://github.com/daFinndus/voice_assistant"
                title="Voice Assistant"
                text="This was also a raspberry pi project made with vosk. It is a voice assistant which can be used via voice commands. It can move a stepper motor by radii, get data from a temperature sensor and more. Details attached."
                src={voiceAssistant}
                alt="Voice Assistant"
            />
        </div>
    );
};

export default Projects;
