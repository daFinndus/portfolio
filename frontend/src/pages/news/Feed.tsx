import { useState, useCallback, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

import Throbber from "../../components/Throbber";

interface FeedButtonInterface {
    url: string;
}

const FeedButton = ({ url }: FeedButtonInterface) => {
    return (
        <div className="group w-fit cursor-link border-2 border-transparent duration-700 hover:bg-opacity-25 hover:duration-0">
            <a href={url} className="flex flex-row items-center justify-center">
                <TbExternalLink className="size-5 group-hover:animate-blink" />
            </a>
        </div>
    );
};

interface FeedBlockProps {
    author: string;
    title: string;
    publisher: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

const FeedBlock = ({
    author,
    title,
    publisher,
    description,
    url,
    urlToImage,
    publishedAt,
}: FeedBlockProps) => {
    return (
        <div className="relative h-[472px] w-[312px] items-center justify-center border-2 border-dark-gray bg-cream-white text-start text-dark-gray shadow-dark-black drop-shadow-2xl">
            <div className="flex flex-col">
                <div className="relative flex h-[172px] w-full">
                    <p className="absolute bottom-6 bg-dark-gray px-5 text-cream-white">
                        {publisher}
                    </p>
                    <img
                        className="flex w-full items-center justify-center"
                        src={urlToImage}
                        alt="News from the API"
                    />
                </div>
                <div className="flex h-full w-full flex-col p-3 text-start md:mx-3 md:w-fit md:p-1">
                    <>
                        <p className="my-3 font-blenderpro text-lg text-dark-black">
                            {title}
                        </p>
                        <div className="overflow-scroll bg-black">
                            <p>{description}</p>
                        </div>
                    </>
                </div>
                <div className="absolute bottom-1 left-3">
                    <p>
                        {author} - {publishedAt}
                    </p>
                </div>
                <div className="absolute bottom-1 right-1">
                    <FeedButton url={url} />
                </div>
            </div>
        </div>
    );
};

const Feed = () => {
    // Loading is true while fetching the news
    // Or if no news are available
    const [loading, setLoading] = useState(true);
    const [throbber, setThrobber] = useState(true);

    const [parameter, setParameter] = useState("");
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

    // Function for showing the error message
    const handleError = useCallback(
        (message: string) => {
            console.error(message);
            showError(message);
        },
        [showError],
    );

    // This function will handle the input change
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setParameter(e.target.value);
            sortNews(news);
        },
        [],
    );

    // Function for toggling the throbber
    const toggleThrobber = (state: boolean) => {
        if (state === false) {
            setLoading(false);

            setTimeout(() => {
                setThrobber(false);
            }, 1500);
        } else if (state === true) {
            setThrobber(true);

            setTimeout(() => {
                setLoading(true);
            }, 500);
        }
    };

    // This will be the url for our backend
    // For localhost it will be an empty string
    const url = process.env.REACT_APP_RENDER_URL || "";

    const fetchNews = async () => {
        try {
            const response = await fetch(`${url}/articles`);
            if (!response.ok) throw new Error("Failed to fetch news");

            const data = await response.json();
            console.log(typeof data);

            // Sort the news by date
            sortNews(data);
            setNews(data);

            // Toggle throbber to false
            toggleThrobber(false);
        } catch (err) {
            handleError("An error occurred while fetching news");

            console.log(err);
        }
    };

    useEffect(() => {
        fetchNews();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleError]);

    // This function sorts the news by date - latest first
    // It can also sort by an user entered parameter
    const sortNews = (news) => {
        news.sort((a, b) => {
            return (
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
            );
        });
    };

    return (
        <div className="flex w-screen flex-col items-center justify-center bg-cream-white bg-[radial-gradient(#060606,transparent_2px)] py-16 [background-size:32px_32px]">
            <div className="mx-5 flex w-[512px] items-center justify-center">
                <div className="relative mb-10 flex h-12 w-full flex-row items-center border-2 border-dark-gray bg-cream-white pl-3 text-lg text-dark-gray">
                    <input
                        className="mr-10 w-full bg-transparent placeholder-dark-gray placeholder-opacity-75 focus:outline-none"
                        placeholder="Enter something to search for"
                        onChange={handleInputChange}
                    />
                    <div className="mr-5">
                        <FaSearch />
                    </div>
                </div>
            </div>
            <div className="flex min-h-[768px] flex-col gap-y-10 sm:w-[612px] sm:grid-cols-2 sm:gap-x-3 md:grid lg:w-[1024px] lg:grid-cols-3">
                <Throbber loading={loading} throbber={throbber} />
                {news.map((article, _) => (
                    <div className="flex items-center justify-center">
                        <FeedBlock
                            author={article.author || "Unknown author"}
                            title={article.title || "No title"}
                            publisher={article.publisher || "No publisher"}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                            publishedAt={article.publishedAt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
