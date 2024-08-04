import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import Speedtest from "./pages/speedtest/Speedtest";

const Supported = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Main />} />
                    <Route path="/speedtest" element={<Speedtest />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

const Unsupported = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-white text-black">
            Your device is not supported.
        </div>
    );
};

const App = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        console.log("Dimensions: ", dimensions);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    if (dimensions.width > 352) {
        return <Supported />;
    } else {
        return <Unsupported />;
    }
};

export default App;
