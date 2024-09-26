import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaBaby } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { GiFullPizza } from "react-icons/gi";
import { FaHospitalAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { LuShoppingBasket } from "react-icons/lu";

const Timeline = () => {
    return (
        <div className="flex w-screen flex-col items-center justify-center bg-cream-white bg-[radial-gradient(#060606,transparent_1px)] py-16 font-blenderpro [background-size:32px_32px]">
            <div className="w-4/5 lg:w-[1024px]">
                <VerticalTimeline lineColor="#818181">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - present"
                        contentStyle={{
                            background: "#3c3c3c",
                            color: "#fcfbf4",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid #3c3c3c",
                        }}
                        iconStyle={{
                            background: "#3c3c3c",
                            color: "#fcfbf4",
                        }}
                        icon={<IoIosSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Media Engineer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            University of Applied Sciences, Kiel
                        </h4>
                        <p>
                            I learned to develop software, design websites, work
                            agile to complete projects and to work in a team.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2021 - 2022"
                        iconStyle={{
                            background: "#818181",
                            color: "#fcfbf4",
                        }}
                        icon={<FaHospitalAlt />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Hospital Porter
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Diako Krankenhaus, Flensburg
                        </h4>
                        <p>
                            I've transported patients, medicine and bloodtests
                            for a year to gain understanding of good
                            teamworking, communication and social understanding.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2019"
                        iconStyle={{
                            background: "#818181",
                            color: "#fcfbf4",
                        }}
                        icon={<GiFullPizza />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Pizza delivery driver
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Smiley's Pizza, Flensburg
                        </h4>
                        <p>
                            I've delivered pizzas for a year to gain some money
                            and free pizza. I learned to work in a fast-paced
                            business.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2019"
                        iconStyle={{
                            background: "#818181",
                            color: "#fcfbf4",
                        }}
                        icon={<HiShoppingCart />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Intern at a supermarket
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Rewe, Flensburg
                        </h4>
                        <p>
                            I worked in the warehouse, stored goods, helped
                            customers and cleaned. It was for a school course.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017"
                        iconStyle={{
                            background: "#818181",
                            color: "#fcfbf4",
                        }}
                        icon={<LuShoppingBasket />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Intern at a discounter
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Netto Marken-Discount, Flensburg
                        </h4>
                        <p>
                            Basically the same thing as Rewe, but two years
                            earlier. Should've applied for an internship
                            earlier.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2013 - 2020"
                        iconStyle={{
                            background: "#3c3c3c",
                            color: "#fcfbf4",
                        }}
                        icon={<IoIosSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Student
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Altes Gymnasium, Flensburg
                        </h4>
                        <p>
                            I've graduated high school with a focus on natural
                            sciences and a 2.3 average grade.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2009 - 2013"
                        iconStyle={{
                            background: "#3c3c3c",
                            color: "#fcfbf4",
                        }}
                        icon={<IoIosSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Student
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Falkenbergschule, Flensburg
                        </h4>
                        <p>
                            I've completed the elementary school and got advised
                            to attend to a gymnasium.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2020"
                        iconStyle={{
                            background: "#818181",
                            color: "#fcfbf4",
                        }}
                        icon={<IoFootball />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Football player
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Various clubs, Flensburg and Bredstedt
                        </h4>
                        <p>
                            I've played football amateurishly for about 10
                            years, because of some pauses. I've learned to play
                            in teams, communicate and to be disciplined.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#818181",
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
