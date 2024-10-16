import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Main from "./pages/main/Main";
import News from "./pages/news/News";
import Vitae from "./pages/vitae/Vitae";

const Supported = () => {
    return (
        <>
            <Analytics />
            <SpeedInsights />
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Main />} />
                    <Route path="/vitae" element={<Vitae />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

const Unsupported = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-white text-black">
            <SpeedInsights />
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
