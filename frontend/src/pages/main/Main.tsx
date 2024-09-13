import About from "./About";
import Skills from "./Skills";
import Header from "./Header";
import Projects from "./Projects";

import FooterUniversal from "../../components/FooterUniversal";

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
