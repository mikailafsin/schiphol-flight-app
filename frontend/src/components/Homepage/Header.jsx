import { FaPlane, FaTag, FaGlobeAmericas, FaUserCircle } from "react-icons/fa";
import HeaderItem from "./HeaderItem";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../features/flights/themeSlice";

function Header() {
    const dispatch = useDispatch();

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };
    return (
        <header className="mb-8 flex items-center justify-between lg:text-lg">
            <div className="flex items-center gap-1 sm:gap-3">
                <FaPlane className="text-purple-900 dark:text-purple-500" />
                <span className="text-sm font-bold dark:text-white sm:text-lg">PLANE SCAPE</span>
            </div>
            <ul className="sm:flex sm:items-center sm:gap-5">
                <HeaderItem>
                    <button
                        onClick={handleThemeToggle}
                        className="h-3 w-3 bg-icon-moon bg-cover bg-no-repeat outline-none dark:bg-icon-sun"
                    ></button>
                    <span className="dark:text-white">Theme</span>
                </HeaderItem>
                <HeaderItem>
                    <FaTag className="text-purple-900 dark:text-purple-500" />
                    <span className="dark:text-white">Deals</span>
                </HeaderItem>
                <HeaderItem>
                    <FaGlobeAmericas className="text-purple-900 dark:text-purple-500" />
                    <span className="dark:text-white">Discover</span>
                </HeaderItem>
                <HeaderItem>
                    <FaUserCircle className="text-purple-900 dark:text-purple-500" />
                    <span className="dark:text-white">Joane Smith</span>
                </HeaderItem>
            </ul>
        </header>
    );
}

export default Header;
