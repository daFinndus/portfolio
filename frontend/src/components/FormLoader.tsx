import { grid } from "ldrs";

grid.register();

interface ThrobberProps {
    loading: boolean;
    throbber: boolean;
    message: string;
}

const FormLoader = ({ loading, throbber, message }: ThrobberProps) => {
    return (
        <div
            className={`${
                loading ? "opacity-100" : "opacity-0"
            } fixed z-10 ${throbber ? "block" : "hidden"} left-0 top-0 flex h-full min-h-[100%] w-screen flex-col items-center justify-center bg-dark-gray bg-[radial-gradient(#fcfbf4,transparent_2px)] py-16 text-center transition-opacity duration-1000 [background-size:32px_32px]`}
        >
            <div className="relative flex h-52 w-52 flex-col items-center justify-center rounded-full bg-dark-gray p-8 shadow-dark-black drop-shadow-2xl">
                <div className="absolute top-12">
                    <l-grid size="128" speed="1.5" color="#fcfbf4"></l-grid>
                </div>
            </div>
            <div className="absolute bottom-[286px] h-fit w-max bg-dark-gray px-4 py-2 text-center shadow-dark-black drop-shadow-2xl">
                <p className="animate-blink text-xl">{message}</p>
            </div>
        </div>
    );
};

export default FormLoader;
