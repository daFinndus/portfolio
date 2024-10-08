interface RequirementProps {
    id: string;
    text: string;
    visible: boolean;
}

const PopupMessage = ({ id, text, visible }: RequirementProps) => {
    return (
        <div
            id={id}
            className={`absolute ${visible ? "opacity-100" : "opacity-0"} bottom-0 h-fit w-full -translate-y-[240px] border-2 border-dark-gray bg-cream-white p-5 text-center text-dark-gray shadow-dark-gray drop-shadow-2xl transition-opacity sm:top-0 sm:-translate-y-28`}
        >
            <p>{text}</p>
        </div>
    );
};

export default PopupMessage;
