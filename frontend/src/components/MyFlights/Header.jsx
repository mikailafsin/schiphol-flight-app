import { FaStar, FaRegStar } from "react-icons/fa";

function Header() {
    return (
        <header className="mb-8 bg-white shadow-sm dark:bg-gray-700 dark:text-white">
            <div className="container mx-auto p-4 sm:p-8 lg:flex lg:justify-between lg:gap-4">
                <ul className="mb-5 flex flex-wrap items-center gap-2 lg:mb-0">
                    <li className="cursor-pointer rounded-md border border-gray-400 p-2">
                        <span>Times</span>
                    </li>
                    <li className="cursor-pointer rounded-md border border-gray-400 p-2">
                        <span>Stops</span>
                    </li>
                    <li className="cursor-pointer rounded-md border border-gray-400 p-2">
                        <span>Airlines</span>
                    </li>
                    <li className="cursor-pointer rounded-md border border-gray-400 p-2">
                        <span>Airports</span>
                    </li>
                    <li className="cursor-pointer rounded-md border border-gray-400 p-2">
                        <span>Amenities</span>
                    </li>
                    <li className="text-nowrap rounded-md p-2 text-blue-500 dark:text-blue-200">
                        <select
                            name=""
                            id=""
                            className="sm:p0.5 cursor-pointer border-none outline-none dark:bg-gray-700 lg:p-1"
                        >
                            <option value="">Edit Search</option>
                        </select>
                    </li>
                </ul>
                <ul className="flex flex-wrap items-center gap-2 divide-x">
                    <li className="cursor-pointer px-2 py-1.5">
                        <div>
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaRegStar className="inline-block" />
                        </div>
                        <div>
                            <FaRegStar className="inline-block" />
                            <FaRegStar className="inline-block" />
                            <FaRegStar className="inline-block" />
                        </div>
                    </li>
                    <li className="cursor-pointer px-2 py-1.5">
                        <div>
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                        </div>
                        <div>
                            <FaRegStar className="inline-block" />
                            <FaRegStar className="inline-block" />
                            <FaRegStar className="inline-block" />
                        </div>
                    </li>
                    <li className="cursor-pointer px-2 py-1.5">
                        <div>
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                        </div>
                        <div>
                            <FaStar className="inline-block" />
                            <FaRegStar className="inline-block" />
                            <FaRegStar className="inline-block" />
                        </div>
                    </li>
                    <li className="cursor-pointer px-2 py-1.5">
                        <div>
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                        </div>
                        <div>
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaRegStar className="inline-block" />
                        </div>
                    </li>
                    <li className="cursor-pointer px-2 py-1.5">
                        <div>
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                        </div>
                        <div>
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                            <FaStar className="inline-block" />
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
