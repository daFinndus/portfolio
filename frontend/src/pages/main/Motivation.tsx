const Motivation = () => {
    return (
        <div className="flex h-screen min-h-[768px] w-screen items-center justify-center bg-dark-gray bg-[radial-gradient(#fcfbf4,transparent_2px)] [background-size:32px_32px]">
            <div className="flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:border-cream-white md:bg-dark-gray md:px-10 md:pb-10">
                <div className="mx-3 flex h-full w-full max-w-xl flex-col items-center justify-center bg-dark-gray py-10 text-center text-lg text-cream-white">
                    <h1 className="mb-7 font-cyberpunk text-3xl shadow-light-black text-shadow-sm">
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
                </div>
            </div>
        </div>
    );
};

export default Motivation;
