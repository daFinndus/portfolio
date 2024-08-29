const Motivation = () => {
    return (
        <div className="bg-dark-gray flex h-screen min-h-[768px] w-screen items-center justify-center bg-[radial-gradient(#fcfbf4,transparent_2px)] [background-size:32px_32px]">
            <div className="md:border-cream-white md:bg-dark-gray flex max-h-screen flex-row items-center justify-center drop-shadow-2xl md:h-auto md:w-3/5 md:min-w-max md:border-4 md:px-10 md:pb-10">
                <div className="text-cream-white bg-dark-gray mx-10 mt-7 flex h-full w-full max-w-xl flex-col items-center justify-center pb-5 text-center text-lg md:p-0 lg:px-0">
                    <h1 className="shadow-light-black mb-7 font-cyberpunk text-3xl text-shadow-sm">
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
