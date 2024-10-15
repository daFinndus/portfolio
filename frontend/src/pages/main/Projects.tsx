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
        <div className="mb-10 flex h-auto w-3/5 min-w-[296px] flex-row items-center justify-center border-4 border-dark-gray bg-cream-white p-5 text-center shadow-dark-black drop-shadow-2xl dark:bg-medium-gray md:relative md:w-3/4 md:max-w-2xl md:justify-between md:p-0 md:text-right">
            <a href={href}>
                <div className="flex flex-row items-center md:mr-3">
                    <img
                        className="mr-10 hidden h-56 w-56 p-5 shadow-dark-black drop-shadow-xl md:table"
                        src={src}
                        alt={alt}
                    />
                    <div className="md:w-3/5">
                        <h1 className="mb-7 font-cyberpunk text-2xl shadow-dark-black text-shadow-sm">
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
        <div className="flex h-screen min-h-[768px] w-screen flex-col items-center justify-center bg-cream-white bg-[radial-gradient(#3c3c3c,transparent_2px)] text-dark-gray [background-size:32px_32px] dark:bg-medium-gray dark:bg-[radial-gradient(#fcfbf4,transparent_2px)] dark:text-cream-white">
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
