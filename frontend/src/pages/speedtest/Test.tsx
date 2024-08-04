import React, { useState, useCallback, useEffect } from "react";

import FormButton from "../../components/FormButton";
import PopupMessage from "../../components/PopupMessage";

const Test = () => {
    const [downloadSpeed, setDownloadSpeed] = useState(0);
    const [uploadSpeed, setUploadSpeed] = useState(0);
    const [ping, setPing] = useState(0);

    const [error, setError] = useState({ visible: false, message: "" });

    // This is for showing the error message
    const showError = useCallback((message: string) => {
        setError({ visible: true, message: message });
    }, []);

    useEffect(() => {
        if (error.visible) {
            const timer = setTimeout(() => {
                setError({ visible: false, message: error.message });
            }, 3000); // Hide after 3 seconds

            return () => clearTimeout(timer);
        }
    }, [error]);

    const getPing = async () => {
        const timeStart = new Date().getTime();
        await fetch("/ping");
        const timeDuration = new Date().getTime() - timeStart;
        console.log(`Ping: ${timeDuration} ms`);
        return timeDuration;
    };

    const getDownloadSpeed = async () => {
        let fileURL = "/dummies/50MB.zip";
        let timeStart = new Date().getTime();

        let download = 0;

        try {
            let response = await fetch(fileURL);
            let fileSize = response.headers.get("content-length");

            // Check if the header isn't empty or faulty
            if (fileSize != null) {
                let timeDuration = (new Date().getTime() - timeStart) / 1000; // Time in seconds

                let fileBits = parseInt(fileSize) * 8;
                let speedInBits = fileBits / timeDuration;
                let speedInBytes = speedInBits / 8;
                let speedInKBytes = speedInBytes / 1024;
                let speedInMBytes = speedInKBytes / 1024;
                download = Math.round(speedInMBytes * 100) / 100;

                console.log(`Tracked download speed: ${download} MB/s`);
            }
        } catch (error) {
            console.error("Error fetching the file:", error);
            showError("An error occured while checking for download speed");
        }

        return download;
    };

    const getUploadSpeed = async () => {
        // Handle upload here
        return Math.round(Math.random() * 100);
    };

    const getInternetSpeed = async () => {
        setPing(await getPing());
        setDownloadSpeed(await getDownloadSpeed());
        setUploadSpeed(await getUploadSpeed());
    };

    return (
        <div className="flex h-screen min-h-[768px] w-screen items-center justify-center bg-cp-red bg-[radial-gradient(#55ead4,transparent_2px)] [background-size:32px_32px]">
            <div className="relative flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:border-cp-blue md:bg-cp-yellow md:px-10">
                <div className="relative mx-10 my-7 flex h-full w-full max-w-xl flex-col items-center justify-center text-center text-lg text-cp-blue md:text-xl md:text-cp-red lg:px-0 xl:text-2xl">
                    <p>Ping: {ping}</p>
                    <p>Download Speed: {downloadSpeed}</p>
                    <p>Upload Speed: {uploadSpeed}</p>
                    <FormButton
                        onClick={getInternetSpeed}
                        text="Measure your internet"
                        title="Measure your internet"
                    />
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
