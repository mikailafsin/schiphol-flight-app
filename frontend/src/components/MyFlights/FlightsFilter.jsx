import { FaInfoCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../features/flights/themeSlice";

function FlightsFilter() {
    const dispatch = useDispatch();

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };
    return (
        <div className="mb-8 flex justify-between">
            <div className="text-left dark:text-white">
                <span>Sort by:</span>
                <select
                    name=""
                    id=""
                    className="sm:p0.5 border-none font-bold outline-none dark:bg-gray-700 lg:p-1"
                >
                    <option value="">Recommended</option>
                </select>
            </div>
            <div className="text-right sm:flex sm:gap-8">
                <div>
                    <button
                        onClick={handleThemeToggle}
                        className="h-3 w-3 bg-icon-moon bg-cover bg-no-repeat outline-none dark:bg-icon-sun"
                    ></button>
                    <span className="ml-2 dark:text-white">Theme</span>
                </div>
                <div>
                    <FaInfoCircle className="mr-2 inline-block text-blue-500 dark:text-blue-200" />
                    <span className="dark:text-white">Avg Fare: $225</span>
                </div>
            </div>
        </div>
    );
}

export default FlightsFilter;
