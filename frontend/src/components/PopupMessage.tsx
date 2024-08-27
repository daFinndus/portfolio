import React from "react";

interface RequirementProps {
    id: string;
    text: string;
    visible: boolean;
}

const PopupMessage = ({ id, text, visible }: RequirementProps) => {
    return (
        <div
            id={id}
            className={`absolute ${visible ? "opacity-100" : "opacity-0"} bottom-0 h-fit w-full -translate-y-[240px] border-2 border-cp-blue bg-cp-red p-5 text-center text-cp-blue shadow-cp-dark-blue drop-shadow-2xl transition-opacity sm:top-0 sm:-translate-y-28`}
        >
            <p>{text}</p>
        </div>
    );
};

export default PopupMessage;
