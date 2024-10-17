import React, { useCallback, useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

import Throbber from "../../components/Throbber";
import ButtonScrollToTop from "../../components/ButtonScrollToTop";

import useLoader from "../../hooks/useLoader";
import delay from "../../utils/delay";

interface FeedButtonInterface {
    url: string;
}

/**
 * This component is a button that will redirect to the article.
 * @param url - the url of the article
 */
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

/**
 * This component is a block that will display the news.
 * @param author - the author of the article
 * @param title - the title of the article
 * @param publisher - the publisher of the article
 * @param description - the description of the article
 * @param url - the url of the article
 * @param urlToImage - the image of the article
 * @param publishedAt - the date of the article
 */
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
        <div className="relative h-[472px] w-[312px] items-center justify-center border-2 border-dark-gray bg-cream-white text-start text-dark-gray shadow-dark-black drop-shadow-2xl dark:border-cream-white dark:bg-dark-gray dark:text-cream-white">
            <div className="flex flex-col">
                <div className="relative flex h-[172px] w-full">
                    <p className="absolute bottom-6 bg-dark-gray px-5 text-cream-white dark:bg-cream-white dark:text-dark-gray">
                        {publisher}
                    </p>
                    <img
                        className="flex w-full items-center justify-center"
                        src={urlToImage}
                        alt="News from the API"
                    />
                </div>
                <div className="flex h-[268px] w-full flex-col p-3 text-start md:mx-3 md:w-fit md:p-1">
                    <>
                        <p className="my-3 font-blenderpro text-lg">{title}</p>
                        <div className="overflow-scroll">
                            <p>{description}</p>
                        </div>
                    </>
                </div>
                <div className="absolute bottom-1 left-3 h-6 w-[90%] overflow-x-scroll">
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

/**
 * This component is the feed page that will display the news.
 * @constructor
 */
const Feed = () => {
    // Loading is true while fetching the news
    // Or if no news are available
    const { loader, toggleLoader, updateMessage } = useLoader({
        visible: true,
        throbber: true,
        message: "Fetching articles...",
    });

    const [keyword, setKeyword] = useState(String);

    // News are visible on the website
    // Storage are all news from the API
    const [news, setNews] = useState<FeedBlockProps[]>([]);
    const [storage, setStorage] = useState<FeedBlockProps[]>([]);

    /**
     * This function will handle the input change event.
     */
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setKeyword(e.target.value); // Save the search keyword
        },
        [],
    );

    /**
     * This function will handle the key down event.
     * @param e - the event
     */
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            filterNews();
        }
    };

    // This will be the url for our backend
    // For localhost it will be an empty string
    const url = process.env.REACT_APP_RENDER_URL || "";

    /**
     * This function will fetch the news from the NewsAPI.
     */
    const fetchNews = async () => {
        try {
            const response = await fetch(`${url}/articles`);
            if (!response.ok) {
                console.error(response);
                toggleLoader(true, "There was an error fetching the articles!");
            }

            // Set the data and reverse it
            const data = await response.json();

            if (!data) {
                updateMessage("There are currently no articles available!");
            }

            data.reverse();

            // Backup data and set the news
            setStorage(data);
            setNews(data);

            // Toggle throbber to false
            await delay(500);
            toggleLoader(false, "");
        } catch (err) {
            console.log(err);
            updateMessage("There was an error fetching the articles!");
        }
    };

    useEffect(() => {
        fetchNews().then((r) => r);
    }, []);

    /**
     * This function will filter the news based on the keyword.
     */
    const filterNews = () => {
        if (!keyword) {
            setNews(storage);
            return;
        }

        const filtered = storage.filter((article) =>
            article.title.toLowerCase().includes(keyword.toLowerCase()),
        );

        setNews(filtered);
    };

    return (
        <div className="relative flex w-screen flex-col items-center justify-center bg-cream-white bg-[radial-gradient(#3c3c3c,transparent_2px)] py-8 [background-size:32px_32px] dark:bg-dark-gray dark:bg-[radial-gradient(#dbdbd5,transparent_2px)]">
            <div className="mx-5 flex w-3/4 min-w-[342px] items-center justify-center pt-8 md:w-[512px]">
                <div className="mb-16 flex h-12 w-full flex-row items-center border-2 border-dark-gray bg-cream-white pl-3 text-lg text-dark-gray dark:border-dark-white dark:bg-dark-gray dark:text-cream-white">
                    <input
                        className="mr-10 w-full overflow-auto bg-transparent placeholder-dark-gray placeholder-opacity-75 focus:outline-none dark:placeholder-cream-white dark:placeholder-opacity-75"
                        placeholder="Filter for keywords!"
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <div className="mr-5 flex items-center justify-center">
                        <button onClick={filterNews}>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex min-h-[768px] flex-col gap-y-10 pb-8 sm:w-[612px] sm:grid-cols-2 sm:gap-x-3 md:grid lg:w-[1024px] lg:grid-cols-3">
                <Throbber
                    loading={loader.visible}
                    message={loader.message}
                    throbber={loader.throbber}
                />
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
            <ButtonScrollToTop />
        </div>
    );
};

export default Feed;
