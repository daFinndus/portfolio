import Feed from "./Feed";

import HeaderUniversal from "../../components/HeaderUniversal";
import FooterUniversal from "../../components/FooterUniversal";

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
