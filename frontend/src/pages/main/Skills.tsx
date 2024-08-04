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
        <div className="bg-green relative h-fit w-fit">
            <div className="flex flex-row items-center justify-center border-2 border-cp-blue bg-cp-red p-2 text-cp-yellow md:w-36 md:border-transparent xl:relative xl:h-16 xl:w-52 xl:px-5">
                <img
                    src={src}
                    className="h-5 w-5 drop-shadow-2xl md:absolute md:left-2 xl:left-3 xl:h-10 xl:w-10"
                    title={title}
                    alt={alt}
                />
                <p className="hidden text-lg md:flex xl:pl-5 xl:text-xl">
                    {text}
                </p>
            </div>
            <div className="absolute bottom-0 right-0 hidden h-5 w-5 translate-x-3 translate-y-3 rotate-45 bg-cp-yellow md:block lg:h-7 lg:w-7 lg:translate-x-5 lg:translate-y-5 xl:h-10 xl:w-10"></div>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <div className="flex h-screen min-h-[768px] w-screen items-center justify-center bg-cp-red bg-[radial-gradient(#55ead4,transparent_1px)] [background-size:32px_32px] md:bg-[radial-gradient(#55ead4,transparent_2px)]">
            <div className="flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-[686px] md:border-4 md:border-cp-blue md:bg-cp-yellow md:px-10 md:pb-10 lg:min-w-[924px] xl:min-w-[1024px]">
                <div className="mx-10 mt-7 flex h-full w-full max-w-xl flex-col items-center justify-center text-center text-lg text-cp-blue md:text-xl md:text-cp-red lg:px-0 xl:text-2xl">
                    {" "}
                    <h1 className="mb-7 font-cyberpunk text-2xl shadow-cp-dark-blue text-shadow-sm md:shadow-cp-dark-red lg:text-3xl">
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
