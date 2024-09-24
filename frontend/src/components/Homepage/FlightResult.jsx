import { FaPlaneDeparture, FaPlane, FaPlaneArrival } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
import CheckTheDetails from "./CheckTheDetails";

const generateRandomPrice = () => {
    const min = 100;
    const max = 300;
    const randomPrice = (Math.random() * (max - min) + min).toFixed(2);
    return `$${randomPrice}`;
};

function FlightResult({ saveFlight, flight }) {
    const navigate = useNavigate();

    const flyingTime = () => {
        const departureTime = moment(flight.scheduleDateTime);
        const landingTime = moment(flight.actualLandingTime);
        const duration = moment.duration(landingTime.diff(departureTime));
        const hours = duration.hours();
        const minutes = duration.minutes();
        return `${hours === 0 ? "" : `${hours}h`} ${minutes}m `;
    };

    const handleBook = (flight) => {
        saveFlight(flight);
        toast.success("Your flight has been successfully registered", {
            className: "dark:bg-gray-600 dark:text-white",
        });
        navigate("/my-flights");
    };

    return (
        <div className="relative mb-14 rounded-md bg-white px-4 pb-2.5 pt-4 dark:bg-gray-700 sm:mb-20 sm:rounded-xl sm:px-8 sm:pb-10 sm:pt-8">
            <span className="mb-4 inline-block font-bold dark:text-white sm:mb-8">
                Flight Number: {flight.flightNumber}
            </span>
            <div className="mb-4 flex justify-between sm:mb-8">
                <div className="w-1/3 dark:text-white">
                    <div className="mb-1">
                        <FaPlaneDeparture />
                        <span>Departure</span>
                    </div>
                    <div className="mb-1 font-bold">
                        {moment(flight.scheduleDateTime).format("hh:mm A")}
                    </div>
                    <div>
                        Airport:{" "}
                        {flight.flightDirection === "A" ? flight.route.destinations : "AMS"}
                    </div>
                </div>
                <div className="w-1/3 text-center dark:text-white">
                    <div className="mb-1 text-green-600">Alitalia</div>
                    <div className="flex justify-center">
                        <FaPlane className="mb-1" />
                    </div>
                    <p>{flyingTime()}(Nonstop)</p>
                </div>
                <div className="w-1/3 text-right dark:text-white">
                    <div className="mb-1 flex flex-col items-end">
                        <FaPlaneArrival />
                        <span>Arrival</span>
                    </div>
                    <div className="mb-1 font-bold">
                        {moment(flight.actualLandingTime).format("hh:mm A")}
                    </div>
                    <div>
                        Airport:{" "}
                        {flight.flightDirection === "A" ? "AMS" : flight.route.destinations}
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="font-bold text-purple-900 dark:text-purple-500 sm:text-lg">
                        Price: {generateRandomPrice()}
                    </p>
                    <p className="text-[0.625rem] dark:text-white sm:text-base">Round Trip</p>
                </div>
                <button
                    onClick={() => handleBook(flight)}
                    className="absolute bottom-0 right-0 rounded-br-md rounded-tl-md bg-purple-900 px-2 pb-3.5 pt-2.5 text-white dark:bg-purple-500 sm:rounded-br-xl sm:rounded-tl-xl sm:p-8"
                >
                    Book Flight
                </button>
            </div>
            <CheckTheDetails />
        </div>
    );
}

export default FlightResult;
