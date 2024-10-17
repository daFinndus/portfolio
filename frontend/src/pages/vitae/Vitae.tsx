import Timeline from "./Timeline";

import FooterUniversal from "../../components/FooterUniversal";
import HeaderUniversal from "../../components/HeaderUniversal";

/**
 * This is the page for the curriculum vitae.
 */
const Vitae = () => {
    return (
        <div>
            <HeaderUniversal title="Vitae" />
            <Timeline />
            <FooterUniversal />
        </div>
    );
};

export default Vitae;
