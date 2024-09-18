import { grid } from "ldrs";

grid.register();

interface ThrobberProps {
    loading: boolean;
    throbber: boolean;
}

const Throbber = ({ loading, throbber }: ThrobberProps) => {
    return (
        <div
            className={`absolute z-10 ${
                loading ? "opacity-100" : "opacity-0"
            } ${throbber ? "block" : "hidden"} left-0 top-40 flex h-screen w-screen items-center justify-center bg-cream-white transition-opacity duration-1000`}
        >
            <l-grid size="128" speed="1.5" color="#3c3c3c"></l-grid>
        </div>
    );
};

export default Throbber;
