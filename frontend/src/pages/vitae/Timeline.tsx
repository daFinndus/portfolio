import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timeline from "../../utils/timeline";

import { FaBaby } from "react-icons/fa";

const Timeline = () => {
    return (
        <div className="flex w-screen flex-col items-center justify-center bg-cream-white bg-[radial-gradient(#060606,transparent_1px)] py-16 font-blenderpro [background-size:32px_32px]">
            <div className="w-4/5 lg:w-[1024px]">
                <VerticalTimeline lineColor="#818181">
                    {timeline.map((event, idx) => (
                        <VerticalTimelineElement
                            key={idx}
                            date={event.date}
                            icon={event.icon}
                            iconStyle={event.style}
                            className={event.className}
                            contentStyle={event.contentStyle}
                            contentArrowStyle={event.contentArrowStyle}
                            dateClassName="text-cream-white timeline:text-dark-gray"
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
