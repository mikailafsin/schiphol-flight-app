import { FaPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setFilters } from "../../features/flights/flightsSlice";
import { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarDay } from "react-icons/fa";

function FlightSearch() {
    const dispatch = useDispatch();

    const [localFilters, setLocalFilters] = useState({
        departure: "",
        arrival: "",
        startDate: "",
        endDate: "",
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setLocalFilters((prevLocalFilters) => ({ ...prevLocalFilters, [name]: value }));
    };

    const handleSubmit = () => {
        dispatch(setFilters(localFilters));
    };

    return (
        <div className="mb-8 rounded-md bg-white p-4 dark:bg-gray-700 sm:rounded-xl sm:p-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 dark:text-white">
                    <FaPlane />
                    <span className="font-bold">BOOK YOUR FLIGHT</span>
                </div>
                <div className="flex items-center">
                    <button className="text-nowrap rounded-bl-2xl rounded-tl-2xl bg-purple-900 p-2 text-[0.625rem] text-white dark:bg-purple-500 sm:rounded-bl-3xl sm:rounded-tl-3xl sm:p-4 sm:text-sm">
                        Round Trip
                    </button>
                    <button className="text-nowrap rounded-br-2xl rounded-tr-2xl bg-slate-200 p-2 text-[0.625rem] text-purple-900 dark:bg-slate-400 dark:text-white sm:rounded-br-3xl sm:rounded-tr-3xl sm:p-4 sm:text-sm">
                        One way
                    </button>
                </div>
            </div>
            <div className="sm:flex sm:items-center sm:gap-4">
                <div className="mb-2 gap-1 sm:mb-0 sm:flex sm:w-1/2">
                    <div className="relative w-full">
                        <input
                            type="text"
                            name="departure"
                            onChange={handleFilterChange}
                            placeholder="Departure (e.g HER)"
                            value={localFilters.departure}
                            className="mb-2 w-full rounded-lg bg-slate-200 p-2 pl-12 dark:bg-slate-500 dark:text-white sm:mb-0 sm:rounded-2xl sm:rounded-br-none sm:rounded-tr-none"
                        />
                        <FaPlaneDeparture className="absolute left-2.5 top-2 text-purple-900 lg:text-xl" />
                    </div>
                    <div className="relative w-full">
                        <input
                            type="text"
                            name="arrival"
                            onChange={handleFilterChange}
                            placeholder="Departure (e.g AMS)"
                            value={localFilters.arrival}
                            className="w-full rounded-lg bg-slate-200 p-2 pl-12 dark:bg-slate-500 dark:text-white sm:rounded-2xl sm:rounded-bl-none sm:rounded-tl-none"
                        />
                        <FaPlaneArrival className="absolute left-2.5 top-2 text-purple-900 lg:text-xl" />
                    </div>
                </div>
                <div className="gap-1 sm:flex sm:w-1/2">
                    <div className="relative w-full">
                        <input
                            type="date"
                            name="startDate"
                            onChange={handleFilterChange}
                            value={localFilters.startDate}
                            className="mb-2 w-full rounded-lg bg-slate-200 p-2 pl-12 text-gray-400 dark:bg-slate-500 sm:mb-0 sm:rounded-2xl sm:rounded-br-none sm:rounded-tr-none"
                        />
                        <FaCalendarDay className="absolute left-2.5 top-2 text-purple-900 lg:text-xl" />
                    </div>
                    <div className="relative w-full">
                        <input
                            type="date"
                            name="endDate"
                            onChange={handleFilterChange}
                            value={localFilters.endDate}
                            className="w-full rounded-lg bg-slate-200 p-2 pl-12 text-gray-400 dark:bg-slate-500 sm:rounded-2xl sm:rounded-bl-none sm:rounded-tl-none"
                        />
                        <FaCalendarDay className="absolute left-2.5 top-2 text-purple-900 lg:text-xl" />
                    </div>
                </div>
            </div>
            <button
                onClick={handleSubmit}
                className="mt-4 rounded-md bg-purple-900 p-2 text-white dark:bg-purple-500 sm:mt-8"
            >
                Show Flights
            </button>
        </div>
    );
}

export default FlightSearch;
