import "react-vertical-timeline-component/style.min.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React, { useState, useEffect } from "react";

import { FaBaby } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { GiFullPizza } from "react-icons/gi";
import { SiHackthebox } from "react-icons/si";
import { FaHospitalAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { LuShoppingBasket } from "react-icons/lu";

const Timeline = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Function to update the grid color based on the "dark" class on the body
        const updateIsDarkMode = () => {
            setIsDarkMode(document.body.classList.contains("dark"));
        };

        // Set initial color based on the current class
        updateIsDarkMode();

        // Create a MutationObserver to detect changes in the body's class attribute
        const observer = new MutationObserver(() => {
            updateIsDarkMode();
        });

        // Observe the body element for class attribute changes
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        // Cleanup the observer when the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, []);

    const timeline = [
        {
            date: "2024 - present",
            title: "Student",
            subtitle: "Via internet, Hack the Box",
            description:
                "I am learning the basics of cyber security, to work with a variety of tools, like nmap, gobuster or john the ripper, and to solve challenges on the platform.",
            icon: <SiHackthebox />,
            iconStyle: {
                background: isDarkMode ? "#3c3c3c" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#dbdbd5" : "#818181",
            },
            className: "vertical-timeline-element--education",
            contentStyle: {
                background: isDarkMode ? "#545454" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #545454"
                    : "0 0 0 3px #dbdbd5",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#545454" : "#dbdbd5"}`,
            },
        },
        {
            date: "2022 - present",
            title: "Media Engineer",
            subtitle: "University of Applied Sciences, Kiel",
            description:
                "I learned to develop software, design websites, work agile to complete projects, and collaborate within teams.",
            icon: <IoIosSchool />,
            iconStyle: {
                background: isDarkMode ? "#222222" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #545454",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            className: "vertical-timeline-element--education",
            contentStyle: {
                background: isDarkMode ? "#222222" : "#818181",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #222222"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#fcfbf4" : "#222222",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#222222" : "#818181"}`,
            },
        },
        {
            date: "2021 - 2022",
            title: "Hospital Porter",
            subtitle: "Diako Krankenhaus, Flensburg",
            description:
                "Responsible for transporting patients, medicine, and blood tests. Gained valuable experience in teamwork, communication, and empathy.",
            icon: <FaHospitalAlt />,
            iconStyle: {
                background: isDarkMode ? "#3c3c3c" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#dbdbd5" : "#818181",
            },
            className: "vertical-timeline-element--work",
            contentStyle: {
                background: isDarkMode ? "#545454" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #545454"
                    : "0 0 0 3px #dbdbd5",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#545454" : "#dbdbd5"}`,
            },
        },
        {
            date: "2019",
            title: "Pizza Delivery Driver",
            subtitle: "Smiley's Pizza, Flensburg",
            description:
                "Delivered pizzas, gaining experience in working in a fast-paced environment while enjoying free pizza.",
            icon: <GiFullPizza />,
            iconStyle: {
                background: isDarkMode ? "#3c3c3c" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#dbdbd5" : "#818181",
            },
            className: "vertical-timeline-element--work",
            contentStyle: {
                background: isDarkMode ? "#545454" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #545454"
                    : "0 0 0 3px #dbdbd5",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#545454" : "#dbdbd5"}`,
            },
        },
        {
            date: "2019",
            title: "Intern at Supermarket",
            subtitle: "Rewe, Flensburg",
            description:
                "Worked in the warehouse, helped store goods, assisted customers, and cleaned as part of a school course.",
            icon: <HiShoppingCart />,
            iconStyle: {
                background: isDarkMode ? "#3c3c3c" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#dbdbd5" : "#818181",
            },
            className: "vertical-timeline-element--work",
            contentStyle: {
                background: isDarkMode ? "#545454" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #545454"
                    : "0 0 0 3px #dbdbd5",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#545454" : "#dbdbd5"}`,
            },
        },
        {
            date: "2017",
            title: "Intern at Discounter",
            subtitle: "Netto Marken-Discount, Flensburg",
            description:
                "Performed similar tasks as at Rewe, two years earlier. Should've applied for internships sooner!",
            icon: <LuShoppingBasket />,
            iconStyle: {
                background: isDarkMode ? "#3c3c3c" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#dbdbd5" : "#818181",
            },
            className: "vertical-timeline-element--work",
            contentStyle: {
                background: isDarkMode ? "#545454" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #545454"
                    : "0 0 0 3px #dbdbd5",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#545454" : "#dbdbd5"}`,
            },
        },
        {
            date: "2013 - 2020",
            title: "Student",
            subtitle: "Altes Gymnasium, Flensburg",
            description:
                "Graduated high school with a focus on natural sciences and a 2.3 average grade.",
            icon: <IoIosSchool />,
            iconStyle: {
                background: isDarkMode ? "#222222" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #545454",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            className: "vertical-timeline-element--education",
            contentStyle: {
                background: isDarkMode ? "#222222" : "#818181",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #222222"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#fcfbf4" : "#222222",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#222222" : "#818181"}`,
            },
        },
        {
            date: "2009 - 2013",
            title: "Student",
            subtitle: "Falkenbergschule, Flensburg",
            description:
                "Completed elementary school and was advised to attend Gymnasium.",
            icon: <IoIosSchool />,
            iconStyle: {
                background: isDarkMode ? "#222222" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #545454",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            className: "vertical-timeline-element--education",
            contentStyle: {
                background: isDarkMode ? "#222222" : "#818181",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #222222"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#fcfbf4" : "#222222",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#222222" : "#818181"}`,
            },
        },
        {
            date: "2008 - 2020",
            title: "Football Player",
            subtitle: "Various clubs, Flensburg and Bredstedt",
            description:
                "Played football for about 10 years. Learned to work in teams, communicate effectively, and develop discipline.",
            icon: <IoFootball />,
            iconStyle: {
                background: isDarkMode ? "#3c3c3c" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #dbdbd5"
                    : "0 0 0 3px #818181",
                color: isDarkMode ? "#dbdbd5" : "#818181",
            },
            className: "vertical-timeline-element--work",
            contentStyle: {
                background: isDarkMode ? "#545454" : "#dbdbd5",
                boxShadow: isDarkMode
                    ? "0 0 0 3px #545454"
                    : "0 0 0 3px #dbdbd5",
                color: isDarkMode ? "#fcfbf4" : "#3c3c3c",
            },
            contentArrowStyle: {
                borderRight: `7px solid ${isDarkMode ? "#545454" : "#dbdbd5"}`,
            },
        },
    ];

    return (
        <div className="flex w-screen flex-col items-center justify-center bg-cream-white bg-[radial-gradient(#060606,transparent_1px)] py-16 font-blenderpro [background-size:32px_32px] dark:bg-dark-gray dark:bg-[radial-gradient(#fcfbf4,transparent_1px)]">
            <div className="w-4/5 lg:w-[1024px]">
                <VerticalTimeline
                    lineColor={isDarkMode ? "#222222" : "#dbdbd5"}
                >
                    {timeline.map((event, idx) => (
                        <VerticalTimelineElement
                            key={idx}
                            date={event.date}
                            icon={event.icon}
                            iconStyle={event.iconStyle}
                            className={event.className}
                            contentStyle={event.contentStyle}
                            contentArrowStyle={event.contentArrowStyle}
                            dateClassName={` ${isDarkMode ? "dark:text-cream-white" : "text-dark-gray"}`}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {event.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {event.subtitle}
                            </h4>
                            <p>{event.description}</p>
                        </VerticalTimelineElement>
                    ))}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#3c3c3c",
                            color: "#fcfbf4",
                        }}
                        icon={<FaBaby />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Timeline;
