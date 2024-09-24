import { FaAngleDown, FaPlane } from "react-icons/fa";
import moment from "moment";

function Flight({ flight }) {
    const flyingTime = () => {
        const departureTime = moment(flight.scheduleDateTime);
        const landingTime = moment(flight.actualLandingTime);
        const duration = moment.duration(landingTime.diff(departureTime));
        const hours = duration.hours();
        const minutes = duration.minutes();
        return `${hours === 0 ? "" : `${hours}h`} ${minutes}m `;
    };
    return (
        <div className="mb-5 rounded-md bg-white p-4 shadow-sm dark:bg-gray-700 dark:text-white sm:p-8 lg:flex lg:justify-between lg:gap-14">
            <div className="lg:w-2/4 xl:w-2/5">
                <div className="mb-8 flex gap-8 lg:mb-0">
                    <div>
                        <FaPlane className="text-4xl" />
                    </div>
                    <div className="w-full">
                        <div className="mb-2">
                            <p className="text-xl font-bold">
                                {moment(flight.scheduleDateTime).format("hh:mm A")} -{" "}
                                {moment(flight.actualLandingTime).format("hh:mm A")}
                            </p>
                        </div>
                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div className="mb-2">
                                <p className="font-semibold">Delta Airlines</p>
                                <div className="flex items-center gap-2 text-blue-500 dark:text-blue-200">
                                    <a href="#">Flight Details</a>
                                    <FaAngleDown />
                                </div>
                            </div>
                            <div className="mb-2">
                                <p className="font-semibold">Nonstop</p>
                                <p className="text-gray-500 dark:text-gray-200">{flyingTime()}</p>
                            </div>
                            <div>
                                <p className="font-semibold">
                                    {flight.flightDirection === "A"
                                        ? flight.routeDestinations
                                        : "AMS"}{" "}
                                    to{" "}
                                    {flight.flightDirection === "A"
                                        ? "AMS"
                                        : flight.routeDestinations}
                                </p>
                                <p className="text-gray-500 dark:text-gray-200">
                                    {flight.flightName}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/5 xl:w-2/5">
                <ul className="flex gap-4">
                    <li className="flex-1 rounded-md border border-gray-400 p-2">
                        <p className="mb-1 font-bold">$156</p>
                        <p>Main</p>
                    </li>
                    <li className="flex-1 rounded-md border border-gray-400 p-2">
                        <p className="mb-1 font-bold">$204</p>
                        <p>Comfort+</p>
                    </li>
                    <li className="flex-1 rounded-md bg-gray-200 p-2 dark:bg-gray-500">
                        <p></p>
                        <p></p>
                    </li>
                    <li className="flex-1 rounded-md border border-gray-400 p-2">
                        <p className="mb-1 font-bold">$386</p>
                        <p>Delta One</p>
                    </li>
                    <li className="flex-1 rounded-md bg-gray-200 p-2 dark:bg-gray-500">
                        <p></p>
                        <p></p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Flight;
