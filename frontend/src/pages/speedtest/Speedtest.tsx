import React from "react";

import Test from "./Test";
import Header from "../../components/HeaderUniversal";

const Speedtest = () => {
    return (
        <>
            <Header red={false} title="Speedtest" />
            <Test />
        </>
    );
};

export default Speedtest;
