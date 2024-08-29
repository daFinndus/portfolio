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
            className={`absolute ${visible ? "opacity-100" : "opacity-0"} border-dark-gray bg-cream-white text-dark-gray shadow-dark-gray bottom-0 h-fit w-full -translate-y-[240px] border-2 p-5 text-center drop-shadow-2xl transition-opacity sm:top-0 sm:-translate-y-28`}
        >
            <p>{text}</p>
        </div>
    );
};

export default PopupMessage;
