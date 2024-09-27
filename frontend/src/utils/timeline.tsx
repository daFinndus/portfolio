import { IoFootball } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { GiFullPizza } from "react-icons/gi";
import { SiHackthebox } from "react-icons/si";
import { FaHospitalAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { LuShoppingBasket } from "react-icons/lu";

const timeline = [
    {
        date: "2024 - present",
        title: "Student",
        subtitle: "Via internet, Hack the Box",
        description:
            "I am learning the basics of cyber security, to work with a variety of tools, like nmap, gobuster or john the ripper, and to solve challenges on the platform.",
        icon: <SiHackthebox />,
        style: { background: "#818181", color: "#fcfbf4" },
        className: "vertical-timeline-element--education",
        contentStyle: { background: "#818181", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #818181" },
    },
    {
        date: "2022 - present",
        title: "Media Engineer",
        subtitle: "University of Applied Sciences, Kiel",
        description:
            "I learned to develop software, design websites, work agile to complete projects, and collaborate within teams.",
        icon: <IoIosSchool />,
        style: { background: "#3c3c3c", color: "#fcfbf4" },
        className: "vertical-timeline-element--education",
        contentStyle: { background: "#3c3c3c", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #3c3c3c" },
    },
    {
        date: "2021 - 2022",
        title: "Hospital Porter",
        subtitle: "Diako Krankenhaus, Flensburg",
        description:
            "Responsible for transporting patients, medicine, and blood tests. Gained valuable experience in teamwork, communication, and empathy.",
        icon: <FaHospitalAlt />,
        style: { background: "#818181", color: "#fcfbf4" },
        className: "vertical-timeline-element--work",
        contentStyle: { background: "#818181", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #818181" },
    },
    {
        date: "2019",
        title: "Pizza Delivery Driver",
        subtitle: "Smiley's Pizza, Flensburg",
        description:
            "Delivered pizzas, gaining experience in working in a fast-paced environment while enjoying free pizza.",
        icon: <GiFullPizza />,
        style: { background: "#818181", color: "#fcfbf4" },
        className: "vertical-timeline-element--work",
        contentStyle: { background: "#818181", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #818181" },
    },
    {
        date: "2019",
        title: "Intern at Supermarket",
        subtitle: "Rewe, Flensburg",
        description:
            "Worked in the warehouse, helped store goods, assisted customers, and cleaned as part of a school course.",
        icon: <HiShoppingCart />,
        style: { background: "#818181", color: "#fcfbf4" },
        className: "vertical-timeline-element--work",
        contentStyle: { background: "#818181", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #818181" },
    },
    {
        date: "2017",
        title: "Intern at Discounter",
        subtitle: "Netto Marken-Discount, Flensburg",
        description:
            "Performed similar tasks as at Rewe, two years earlier. Should've applied for internships sooner!",
        icon: <LuShoppingBasket />,
        style: { background: "#818181", color: "#fcfbf4" },
        className: "vertical-timeline-element--work",
        contentStyle: { background: "#818181", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #818181" },
    },
    {
        date: "2013 - 2020",
        title: "Student",
        subtitle: "Altes Gymnasium, Flensburg",
        description:
            "Graduated high school with a focus on natural sciences and a 2.3 average grade.",
        icon: <IoIosSchool />,
        style: { background: "#3c3c3c", color: "#fcfbf4" },
        className: "vertical-timeline-element--education",
        contentStyle: { background: "#3c3c3c", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #3c3c3c" },
    },
    {
        date: "2009 - 2013",
        title: "Student",
        subtitle: "Falkenbergschule, Flensburg",
        description:
            "Completed elementary school and was advised to attend Gymnasium.",
        icon: <IoIosSchool />,
        style: { background: "#3c3c3c", color: "#fcfbf4" },
        className: "vertical-timeline-element--education",
        contentStyle: { background: "#3c3c3c", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #3c3c3c" },
    },
    {
        date: "2008 - 2020",
        title: "Football Player",
        subtitle: "Various clubs, Flensburg and Bredstedt",
        description:
            "Played football for about 10 years. Learned to work in teams, communicate effectively, and develop discipline.",
        icon: <IoFootball />,
        style: { background: "#818181", color: "#fcfbf4" },
        className: "vertical-timeline-element--work",
        contentStyle: { background: "#818181", color: "#fcfbf4" },
        contentArrowStyle: { borderRight: "7px solid #818181" },
    },
];

export default timeline;
