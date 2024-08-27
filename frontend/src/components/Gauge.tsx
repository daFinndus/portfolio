import React from "react";
import "./Gauge.css"; // Include custom animations here

// I've stole this one from codepen
const Gauge = ({ label, level }) => {
    return (
        <div className="mx-0 my-auto inline-block w-auto p-[15px]">
            <div className={`gauge four rischio-${level}`}>
                <div className="slice-colors">
                    <div className="st slice-item"></div>
                    <div className="st slice-item"></div>
                    <div className="st slice-item"></div>
                    <div className="st slice-item"></div>
                </div>
                <div className="needle"></div>
                <div className="gauge-center">
                    <div className="label">{label}</div>
                </div>
            </div>
        </div>
    );
};

export default Gauge;
