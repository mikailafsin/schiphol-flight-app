import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSavedFlights } from "../../features/flights/savedFlightsAPI";
import Flight from "./Flight";
import Spinner from "../Spinners/ClipSpinner";

function Flights() {
    const { savedFlights, status: savedFlightsStatus } = useSelector((state) => state.savedFlights);
    const dispatch = useDispatch();

    useEffect(() => {
        if (savedFlightsStatus === "idle") {
            dispatch(fetchSavedFlights());
        }
    }, [savedFlightsStatus, dispatch]);

    return (
        <>
            {savedFlightsStatus === "loading" && <Spinner />}
            {savedFlightsStatus === "succeeded" && (
                <>
                    {savedFlights.map((flight, index) => (
                        <Flight key={index} flight={flight} />
                    ))}
                </>
            )}
            {savedFlightsStatus === "failed" && <p>Registered items could not be fetched.</p>}
        </>
    );
}

export default Flights;
