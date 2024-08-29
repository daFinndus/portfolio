import React, { useState, useCallback, useEffect } from "react";
import CountUp from "react-countup";

import FormButton from "../../components/FormButton";
import PopupMessage from "../../components/PopupMessage";

const Measure = () => {
    const [metrics, setMetrics] = useState({
        ping: 0,
        downloadSpeed: 0,
        uploadSpeed: 0,
    });

    const updateMetric = (metric: string, value: number) => {
        setMetrics((prev) => ({
            ...prev,
            [metric]: value,
        }));
    };

    const [measuring, setMeasuring] = useState(false);
    const [error, setError] = useState({ visible: false, message: "" });

    const showError = useCallback((message: string) => {
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

    const handleError = (message: string) => {
        console.error(message);
        showError(message);
        setMeasuring(false);
    };

    // This function sends a request to the server to check the ping
    const getPing = async () => {
        const timeStart = Date.now();

        try {
            const response = await fetch("http://localhost:3030/ping");
            if (!response.ok) throw new Error("Ping request failed");
            const ping = Date.now() - timeStart;

            updateMetric("ping", ping);
            return ping;
        } catch (err) {
            handleError("An unknown error occurred while checking the ping");
            return 0;
        }
    };

    // This function works by downloading a file and measuring the time it takes to download it
    const getDownloadSpeed = async () => {
        const timeStart = Date.now();
        let downloadSpeed = 0;

        try {
            const response = await fetch("http://localhost:3030/download", {
                method: "GET",
                cache: "no-cache",
            });

            if (!response.ok) throw new Error("Failed to download file");
            const fileSize = response.headers.get("content-length");

            if (fileSize) {
                const timeDuration = (Date.now() - timeStart) / 1000;
                const fileSizeInBits = parseInt(fileSize) * 8;
                downloadSpeed =
                    Math.round(
                        (fileSizeInBits / (1000 * 1000) / timeDuration) * 100,
                    ) / 100;
            }

            updateMetric("download", downloadSpeed);
            return downloadSpeed;
        } catch (error) {
            handleError("An error occurred while checking for download speed");
            return 0;
        }
    };

    // This function works by sending a file and measuring the time it takes to upload it
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

            updateMetric("upload", uploadSpeed);
            return uploadSpeed;
        } catch (error) {
            handleError("An error occurred while checking for upload speed");
            return 0;
        }
    };

    // This function calls the three functions above and updates the state with the results
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

        setTimeout(() => {
            setMeasuring(false);
        }, 5750);
    };

    return (
        <div className="flex h-screen min-h-[768px] w-screen items-center justify-center bg-cp-red bg-[radial-gradient(#55ead4,transparent_2px)] [background-size:32px_32px]">
            <div className="relative flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:min-w-max md:border-4 md:border-cp-blue md:bg-cp-yellow md:px-10">
                <div className="relative mx-10 my-7 flex h-full w-full max-w-xl flex-col items-center justify-center text-center text-lg text-cp-blue md:text-xl md:text-cp-red lg:px-0 xl:text-2xl">
                    <div className="flex flex-row justify-center space-x-10">
                        <div className="relative flex flex-col">
                            <p>Ping</p>
                            <div className="flex w-32 flex-row justify-center">
                                <CountUp
                                    duration={5}
                                    end={metrics.ping}
                                    key={metrics.ping}
                                    preserveValue={true}
                                    separator="."
                                    suffix=" ms"
                                />
                            </div>
                        </div>
                        <div className="relative flex flex-col">
                            <p>Download</p>
                            <div className="flex w-32 flex-row justify-center">
                                <CountUp
                                    duration={5}
                                    end={metrics.downloadSpeed}
                                    key={metrics.downloadSpeed}
                                    preserveValue={true}
                                    separator="."
                                    suffix=" MB/s"
                                />
                            </div>
                        </div>
                        <div className="relative flex flex-col">
                            <p>Upload</p>
                            <div className="flex w-32 flex-row justify-center">
                                <CountUp
                                    duration={5}
                                    end={metrics.uploadSpeed}
                                    key={metrics.uploadSpeed}
                                    preserveValue={true}
                                    separator="."
                                    suffix=" MB/s"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 w-fit">
                        <FormButton
                            text={
                                measuring
                                    ? "Measuring..."
                                    : "Measure your internet speed"
                            }
                            onClick={getInternetSpeed}
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

export default Measure;
