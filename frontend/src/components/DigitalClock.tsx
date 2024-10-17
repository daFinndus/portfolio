import { useEffect, useState } from "react";
import { useScramble } from "use-scramble";

/**
 * Get the current time in HH:MM:SS format.
 */
const getCurrentTime = () => {
    const date = new Date();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
};

/**
 * A digital clock component that displays the current time.
 */
const Clock = () => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    const { ref } = useScramble({
        text: currentTime,
        tick: 1,
        seed: 3,
        speed: 0.5,
        overflow: true,
        overdrive: true,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 100);

        return () => clearInterval(interval);
    });

    return <span ref={ref} />;
};

export default Clock;
