import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../features/flights/flightsAPI";
import { saveFlightsToDatabase } from "../../features/flights/savedFlightsAPI";
import { toast } from "react-toastify";
import FlightResult from "./FlightResult";
import Spinner from "../Spinners/ClipSpinner";

function FlightResults() {
    const { filteredFlights, status: flightsStatus } = useSelector((state) => state.flights);
    const dispatch = useDispatch();

    useEffect(() => {
        if (flightsStatus === "idle") {
            dispatch(fetchFlights());
        }
    }, [flightsStatus, dispatch]);

    useEffect(() => {
        if (flightsStatus === "succeeded" && filteredFlights.length === 0) {
            toast.error("No flights were found according to your search criteria.", {
                className: "dark:bg-gray-700 dark:text-white",
            });
        }
    }, [flightsStatus, filteredFlights]);

    const saveFlight = (flight) => {
        dispatch(
            saveFlightsToDatabase({
                scheduleDateTime: flight.scheduleDateTime,
                actualLandingTime: flight.actualLandingTime,
                flightNumber: flight.flightNumber,
                flightDirection: flight.flightDirection,
                routeDestinations: flight.route.destinations,
                flightName: flight.flightName,
            })
        );
    };

    return (
        <div className="scrollbar-thin scrollbar-thumb max-h-[48rem] overflow-y-auto lg:w-4/5">
            {flightsStatus === "loading" && <Spinner />}
            {flightsStatus === "succeeded" && (
                <>
                    {filteredFlights.map((flight, index) => (
                        <FlightResult key={index} saveFlight={saveFlight} flight={flight} />
                    ))}
                </>
            )}
            {flightsStatus === "failed" && <p>Items could not be fetched.</p>}
        </div>
    );
}

export default FlightResults;
