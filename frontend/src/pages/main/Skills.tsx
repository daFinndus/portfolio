import React from "react";

import git from "../../assets/icons/git.svg";
import npm from "../../assets/icons/npm.svg";
import dart from "../../assets/icons/dart.svg";
import java from "../../assets/icons/java.svg";
import mysql from "../../assets/icons/mysql.svg";
import linux from "../../assets/icons/linux.svg";
import apple from "../../assets/icons/apple.svg";
import react from "../../assets/icons/react.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import python from "../../assets/icons/python.svg";
import docker from "../../assets/icons/docker.svg";
import windows from "../../assets/icons/windows.png";
import firebase from "../../assets/icons/firebase.svg";
import javascript from "../../assets/icons/javascript.svg";
import typescript from "../../assets/icons/typescript.svg";

interface SkillBlockProps {
    alt: string;
    src: string;
    text: string;
    title: string;
}

const SkillBlock = ({ alt, src, text, title }: SkillBlockProps) => {
    return (
        <div className="relative h-fit w-fit">
            <div className="bg-cream-white text-dark-gray flex flex-row items-center justify-center border-2 p-2 md:w-36">
                <img
                    src={src}
                    className="h-5 w-5 drop-shadow-2xl md:absolute md:left-2"
                    title={title}
                    alt={alt}
                />
                <p className="hidden text-lg md:flex">{text}</p>
            </div>
            <div className="bg-dark-gray absolute bottom-0 right-0 hidden h-6 w-6 translate-x-3 translate-y-3 rotate-45 md:block"></div>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <div className="bg-dark-gray flex h-screen min-h-[768px] w-screen items-center justify-center bg-[radial-gradient(#fcfbf4,transparent_2px)] [background-size:32px_32px]">
            <div className="md:border-cream-white md:bg-dark-gray flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:px-10 md:pb-10">
                <div className="text-cream-white bg-dark-gray mx-10 mt-7 flex h-full w-full max-w-xl flex-col items-center justify-center pb-5 text-center text-lg md:p-0 lg:px-0">
                    {" "}
                    <h1 className="shadow-light-black mb-7 font-cyberpunk text-3xl text-shadow-sm">
                        Skills
                    </h1>
                    <p className="mb-5">Alright, let's talk skills.</p>
                    <p>
                        I've already worked with following languages or
                        frameworks in certain projects:
                    </p>
                    <div className="flex flex-col">
                        <div className="mt-5 flex w-auto flex-row justify-center gap-5">
                            <SkillBlock
                                src={javascript}
                                alt="Javascript"
                                title="Javascript is the backbone of the web"
                                text="Javascript"
                            />

                            <SkillBlock
                                src={typescript}
                                title="Typescript is a great addition to Javascript and the spine of this website"
                                alt="Typescript"
                                text="Typescript"
                            />

                            <SkillBlock
                                src={react}
                                alt="React"
                                title="React is my go-to framework for web development"
                                text="React"
                            />
                        </div>
                        <div className="mt-5 flex w-auto flex-row justify-center gap-5">
                            <SkillBlock
                                src={python}
                                alt="Python"
                                title="I love python for its simplicity and readability"
                                text="Python"
                            />

                            <SkillBlock
                                src={java}
                                alt="Java"
                                title="Not a huge fan of Java, but it's a must-know"
                                text="Java"
                            />
                            <SkillBlock
                                src={dart}
                                alt="Dart"
                                title="Dart is the language behind Flutter, which I've both used for mobile development"
                                text="Dart"
                            />
                        </div>
                    </div>
                    <p className="mt-7">
                        I am also familiar with the following DB and BaaS:
                    </p>
                    <div className="mt-3 flex w-auto flex-row justify-center gap-5">
                        <SkillBlock
                            src={mysql}
                            alt="MySQL"
                            title="MySQL is a great relational database and I've used it in several projects"
                            text="MySQL"
                        />
                        <SkillBlock
                            src={firebase}
                            alt="Firebase"
                            title="Firebase is a BaaS which I've used for mobile applications"
                            text="Firebase"
                        />
                    </div>
                    <p className="mt-7">
                        I'm permanently working with following tools:
                    </p>
                    <div className="mt-3 flex w-auto flex-row justify-center gap-5">
                        <SkillBlock
                            src={git}
                            alt="Git"
                            title="Git is a must-know for version control"
                            text="Git"
                        />
                        <SkillBlock
                            src={npm}
                            alt="npm"
                            title="npm is the package manager for Node.js"
                            text="npm"
                        />
                        <SkillBlock
                            src={nodejs}
                            alt="Node.js"
                            title="Node.js is the runtime for Javascript"
                            text="Node.js"
                        />
                        <SkillBlock
                            src={docker}
                            alt="Docker"
                            title="Docker is a containerization tool"
                            text="Docker"
                        />
                    </div>
                    <p className="mt-7">
                        And I know the fundamentals of these operating systems:
                    </p>
                    <div className="mt-3 flex w-auto flex-row justify-center gap-5">
                        <SkillBlock
                            src={linux}
                            alt="Linux"
                            title="I've used Linux for a while and am familiar with the basics"
                            text="Linux"
                        />
                        <SkillBlock
                            src={windows}
                            alt="Windows"
                            title="My main OS is Windows, so I'm pretty confident with it"
                            text="Windows"
                        />
                        <SkillBlock
                            src={apple}
                            alt="MacOS"
                            title="I currently work on a Macbook Air, so I'm familiar with MacOS as well"
                            text="MacOS"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
