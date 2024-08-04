import React from "react";

const Inspiration = () => {
    return (
        <div className="flex h-screen min-h-[768px] w-screen items-center justify-center bg-cp-red bg-[radial-gradient(#55ead4,transparent_1px)] [background-size:32px_32px] md:bg-[radial-gradient(#55ead4,transparent_2px)]">
            <div className="flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:border-cp-blue md:bg-cp-yellow md:px-10 md:pb-10">
                <div className="flex h-full w-full max-w-xl flex-col items-center justify-center px-10 pt-10 text-center text-lg text-cp-blue md:text-xl md:text-cp-red lg:px-0 xl:text-2xl">
                    <h1 className="mb-7 font-cyberpunk text-2xl shadow-cp-dark-blue text-shadow-sm md:shadow-cp-dark-red lg:text-3xl">
                        Motivations
                    </h1>
                    <p className="mb-5">
                        I've created this page because I want to visualize my
                        progress as a programmer. I began coding this page with
                        React, Tailwind, and Node.js while having nearly no
                        knowledge about them.
                    </p>
                    <p className="mb-5">
                        I'm also not that familiar with cybersecurity. I know
                        some basics, but nothing more than that. By implementing
                        my knowledge into this website through adding different
                        features or blog entries, I'll be able to see how much
                        I've improved and I can present my current understanding
                        of these topics.
                    </p>
                    <p className="mb-5">
                        Last but not least, this website has a unique style. It
                        is based on a video game I absolutely enjoy:
                    </p>
                    <p className="mb-5 shadow-cp-dark-red text-shadow-lg">
                        Cyberpunk 2077
                    </p>
                    <p>
                        If CD Projekt Red sees this, for whatever reason, please
                        don't sue me. I just really like your game.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Inspiration;
