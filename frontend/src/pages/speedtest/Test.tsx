import React, { useState, useCallback, useEffect } from "react";
import Gauge from "../../components/Gauge";
import FormButton from "../../components/FormButton";
import PopupMessage from "../../components/PopupMessage";

const determineLevel = (value, thresholds, low = false) => {
    if (low) {
        if (value <= thresholds[3]) return 4;
        if (value <= thresholds[2]) return 3;
        if (value <= thresholds[1]) return 2;
        return 1;
    } else {
        if (value >= thresholds[3]) return 4;
        if (value >= thresholds[2]) return 3;
        if (value >= thresholds[1]) return 2;
        return 1;
    }
};

const Test = () => {
    const [metrics, setMetrics] = useState({
        ping: 0,
        downloadSpeed: 0,
        uploadSpeed: 0,
        pingLevel: 1,
        downloadLevel: 1,
        uploadLevel: 1,
    });

    const updateMetric = (metric, value, thresholds, low = false) => {
        setMetrics((prev) => ({
            ...prev,
            [metric]: value,
            [`${metric}Level`]: determineLevel(value, thresholds, low),
        }));
    };

    const [measuring, setMeasuring] = useState(false);
    const [error, setError] = useState({ visible: false, message: "" });

    const showError = useCallback((message) => {
        setError({ visible: true, message });
    }, []);

    useEffect(() => {
        if (error.visible) {
            const timer = setTimeout(() => {
                setError({ visible: false, message: "" });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleError = (message) => {
        console.error(message);
        showError(message);
    };

    const getPing = async () => {
        const timeStart = Date.now();

        try {
            const response = await fetch("http://localhost:3030/ping");
            if (!response.ok) throw new Error("Ping request failed");
            const ping = Date.now() - timeStart;

            updateMetric("ping", ping, [200, 125, 75, 25], true);
            return ping;
        } catch (err) {
            handleError("An unknown error occurred while checking the ping");
            return 0;
        }
    };

    const getDownloadSpeed = async () => {
        const timeStart = Date.now();
        let downloadSpeed = 0;

        try {
            const response = await fetch("http://localhost:3030/download", {
                method: "GET",
                cache: "no-cache",
            });

            if (!response.ok) throw new Error("Failed to fetch file");
            const fileSize = response.headers.get("content-length");

            if (fileSize) {
                const timeDuration = (Date.now() - timeStart) / 1000;
                const fileSizeInBits = parseInt(fileSize) * 8;
                downloadSpeed =
                    Math.round(
                        (fileSizeInBits / (1000 * 1000) / timeDuration) * 100,
                    ) / 100;
            }

            updateMetric("download", downloadSpeed, [15, 25, 75, 100]);
            return downloadSpeed;
        } catch (error) {
            handleError("An error occurred while checking for download speed");
            return 0;
        }
    };

    const getUploadSpeed = async () => {
        const timeStart = Date.now();
        let uploadSpeed = 0;

        try {
            const file = new Blob([new Uint8Array(50 * 1024 * 1024)], {
                type: "application/octet-stream",
            });

            const form = new FormData();
            form.append("file", file);

            const response = await fetch("http://localhost:3030/upload", {
                method: "POST",
                body: form,
                cache: "no-cache",
            });

            if (!response.ok) throw new Error("Failed to upload file");
            const timeDuration = (Date.now() - timeStart) / 1000;
            const fileSizeInBits = file.size * 8;
            uploadSpeed =
                Math.round(
                    (fileSizeInBits / (1000 * 1000) / timeDuration) * 100,
                ) / 100;

            updateMetric("upload", uploadSpeed, [5, 15, 25, 50]);
            return uploadSpeed;
        } catch (error) {
            handleError("An error occurred while checking for upload speed");
            return 0;
        }
    };

    const getInternetSpeed = async () => {
        setMeasuring(true);
        const [ping, downloadSpeed, uploadSpeed] = await Promise.all([
            getPing(),
            getDownloadSpeed(),
            getUploadSpeed(),
        ]);

        setMetrics((prev) => ({
            ...prev,
            ping,
            downloadSpeed,
            uploadSpeed,
        }));
        setMeasuring(false);
    };

    return (
        <div className="flex h-screen min-h-[768px] w-screen items-center justify-center bg-cp-red bg-[radial-gradient(#55ead4,transparent_2px)] [background-size:32px_32px]">
            <div className="relative flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:border-cp-blue md:bg-cp-yellow md:px-10">
                <div className="relative mx-10 my-7 flex h-full w-full max-w-xl flex-col items-center justify-center text-center text-lg text-cp-blue md:text-xl md:text-cp-red lg:px-0 xl:text-2xl">
                    <p>Ping: {metrics.ping}ms</p>
                    <p>Download Speed: {metrics.downloadSpeed} Mbps</p>
                    <p>Upload Speed: {metrics.uploadSpeed} Mbps</p>
                    <div className="mt-10 hidden flex-row md:flex">
                        <Gauge label="Ping" level={metrics.pingLevel} />
                        <Gauge label="Download" level={metrics.downloadLevel} />
                        <Gauge label="Upload" level={metrics.uploadLevel} />
                    </div>
                    <div className="mt-7 w-fit">
                        <FormButton
                            onClick={getInternetSpeed}
                            text={
                                measuring
                                    ? "Measuring..."
                                    : "Measure your internet speed"
                            }
                            title="Measure your internet speed"
                            disabled={measuring}
                        />
                    </div>
                    <PopupMessage
                        id="err-message"
                        text={error.message}
                        visible={error.visible}
                    />
                </div>
            </div>
        </div>
    );
};

export default Test;
