import Feed from "./Feed";

import HeaderUniversal from "../../components/HeaderUniversal";
import FooterUniversal from "../../components/FooterUniversal";

/**
 * This is the news page.
 */
const News = () => {
    return (
        <div>
            <HeaderUniversal title="News" />
            <Feed />
            <FooterUniversal />
        </div>
    );
};

export default News;
