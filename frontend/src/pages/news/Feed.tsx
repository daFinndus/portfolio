import React from "react";

interface FeedBlockProps {
    title: string;
    description: string;
    href: string;
    src: string;
    alt: string;
    date: string;
    author: string;
}

const FeedBlock = ({
    title,
    description,
    href,
    src,
    alt,
    date,
    author,
}: FeedBlockProps) => {
    return (
        <div className="mb-10 flex h-56 w-3/5 min-w-[296px] bg-cream-white p-5 text-start text-dark-gray shadow-dark-black drop-shadow-2xl md:max-w-2xl md:border-4 md:border-dark-gray md:p-0">
            <div className="flex flex-row items-center md:mr-3">
                <div className="flex h-full w-0 items-center justify-center md:min-w-56">
                    <img
                        className="hidden h-48 w-52 drop-shadow-2xl md:block"
                        src={src}
                        alt={alt}
                    />
                </div>
                <div className="flex h-full w-full flex-col p-1 text-start md:ml-3 md:w-fit">
                    <>
                        <h1 className="my-3 font-blenderpro text-xl shadow-dark-gray text-shadow-sm">
                            {title}
                        </h1>
                        <div className="overflow-scroll">
                            <p>{description}</p>
                        </div>
                        <p className="mt-5 text-end">
                            Published {date} by {author}
                        </p>
                    </>
                </div>
            </div>
        </div>
    );
};

const Feed = () => {
    return (
        <div className="flex min-h-[768px] w-screen flex-col items-center justify-center bg-cream-white bg-[radial-gradient(#060606,transparent_2px)] pt-16 [background-size:32px_32px]">
            <FeedBlock
                title="Title"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. This is just some kinda placeholder text for the news descriptions."
                href="https://x.com/moktriplea"
                src="https://picsum.photos/200/300"
                alt="Alt"
                date="10.11.2002"
                author="daFinndus"
            />
        </div>
    );
};

export default Feed;
