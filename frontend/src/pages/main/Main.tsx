import About from "./About";
import Skills from "./Skills";
import Header from "./Header";
import Projects from "./Projects";

import FooterUniversal from "../../components/FooterUniversal";

/**
 * This is the main page, which will be rendered when the user visits the website.
 */
const Main = () => {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Projects />
            <FooterUniversal />
        </>
    );
};

export default Main;
