import React from "react";

import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { RiFirebaseFill, RiFlutterFill } from "react-icons/ri";
import { SiHackthebox } from "react-icons/si";
import {
    FaApple,
    FaDocker,
    FaGitAlt,
    FaJava,
    FaLinux,
    FaNodeJs,
    FaNpm,
    FaReact,
    FaWindows,
} from "react-icons/fa";

const Skills: React.FC = () => {
    return (
        <div className="flex h-screen min-h-[912px] w-screen items-center justify-center bg-dark-gray bg-[radial-gradient(#fcfbf4,transparent_2px)] [background-size:32px_32px]">
            <div className="flex flex-row items-center justify-center text-cream-white drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:border-cream-white md:bg-dark-gray md:px-10 md:pb-10">
                <div className="mx-3 mt-7 flex h-full w-full max-w-96 flex-col items-center justify-center bg-dark-gray pb-5 text-center text-lg md:p-0 lg:px-0">
                    <h1 className="mb-7 font-cyberpunk text-3xl shadow-light-black text-shadow-sm">
                        Skills
                    </h1>
                    <p className="mb-5 px-3">Alright, let's talk skills.</p>
                    <p>
                        I've already worked with following languages or
                        frameworks in certain projects and studies:
                    </p>
                    <div className="mt-5 flex w-auto flex-row justify-center gap-5">
                        <IoLogoJavascript className="size-7 md:size-10" />
                        <FaReact className="size-7 md:size-10" />
                        <FaJava className="size-7 md:size-10" />
                        <IoLogoPython className="size-7 md:size-10" />
                        <RiFlutterFill className="size-7 md:size-10" />
                    </div>
                    <p className="mt-14 px-3">
                        I am also familiar with these database languages and
                        tools which I used for various university tasks:
                    </p>
                    <div className="mt-5 flex w-auto flex-row justify-center gap-5">
                        <GrMysql className="size-7 md:size-10" />
                        <BiLogoMongodb className="size-7 md:size-10" />
                        <RiFirebaseFill className="size-7 md:size-10" />
                        <FaDocker className="size-7 md:size-10" />
                        <FaGitAlt className="size-7 md:size-10" />
                        <FaNodeJs className="size-7 md:size-10" />
                        <FaNpm className="size-7 md:size-10" />
                    </div>
                    <p className="mt-14 px-3">
                        Last but not least, I know the fundamentals of these
                        operating systems:
                    </p>
                    <div className="mt-5 flex w-auto flex-row justify-center gap-5">
                        <FaLinux className="size-7 md:size-10" />
                        <FaWindows className="size-7 md:size-10" />
                        <FaApple className="size-7 md:size-10" />
                    </div>
                    <p className="mt-14 px-3">
                        Despite learning react, typescript and tailwind, I am
                        learning the basics of cyber security by studying on
                        Hack the Box.
                    </p>
                    <div className="mt-5 flex w-auto flex-row justify-center gap-5">
                        <SiHackthebox className="size-7 md:size-10" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
