import { useState, useCallback, useEffect } from "react";

import PopupMessage from "../../components/PopupMessage";

interface FeedBlockProps {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

const FeedBlock = ({
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
}: FeedBlockProps) => {
    return (
        <div className="relative mb-10 flex min-h-56 min-w-[296px] items-center justify-center bg-cream-white p-5 text-start text-dark-gray shadow-dark-black drop-shadow-2xl md:max-w-2xl md:border-4 md:border-dark-gray md:p-0">
            <a href={url}>
                <div className="flex flex-row md:mx-1">
                    <div className="flex h-full w-0 drop-shadow-2xl md:min-w-56">
                        <img
                            className="hidden h-52 w-52 md:block"
                            src={urlToImage}
                            alt="News from the API"
                        />
                    </div>
                    <div className="flex h-full w-full flex-col p-1 text-start md:ml-3 md:w-fit">
                        <>
                            <strong className="my-3 font-blenderpro text-xl">
                                {title}
                            </strong>
                            <div className="overflow-scroll">
                                <p>{description}</p>
                            </div>
                            <p className="absolute bottom-1 right-1">
                                Published {publishedAt} by {author}
                            </p>
                        </>
                    </div>
                </div>
            </a>
        </div>
    );
};

const Feed = () => {
    const [news, setNews] = useState<FeedBlockProps[]>([]);
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
    };

    const fetchNews = async () => {
        try {
            const response = await fetch("/news");
            if (!response.ok) throw new Error("Failed to fetch news");

            const data = await response.json();
            setNews(data);
        } catch (err) {
            handleError("An error occurred while fetching news");

            console.log(err);
        }
    };

    useEffect(() => {
        fetchNews();
    });

    return (
        <>
            <div className="flex min-h-[768px] w-screen flex-col items-center justify-center bg-cream-white bg-[radial-gradient(#060606,transparent_2px)] pt-16 [background-size:32px_32px]">
                {news.length > 0 ? (
                    news.map((data, index) => (
                        <div>
                            <FeedBlock
                                author={data.author}
                                title={data.title}
                                description={data.description}
                                url={data.url}
                                urlToImage={data.urlToImage}
                                publishedAt={data.publishedAt}
                            />
                        </div>
                    ))
                ) : (
                    <div className="bg-cream-white p-7 drop-shadow-lg">
                        <p>No news available</p>
                    </div>
                )}
                <PopupMessage
                    id="err-message"
                    text={error.message}
                    visible={error.visible}
                />
            </div>
        </>
    );
};

export default Feed;
