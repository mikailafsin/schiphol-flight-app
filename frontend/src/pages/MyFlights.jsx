import Flights from "../components/MyFlights/Flights";
import FlightsFilter from "../components/MyFlights/FlightsFilter";
import Header from "../components/MyFlights/Header";

function MyFlights() {
    return (
        <div className="min-h-screen bg-gray-100 font-poppins text-xs dark:bg-gray-600 sm:text-sm">
            {/* Header bileşenini render ediyoruz */}
            <Header />
            <div className="container mx-auto p-4 sm:p-8">
                {/* Uçuşları filtrelemek için kullanılan bileşeni render ediyoruz */}
                <FlightsFilter />
                {/* Kullanıcının uçuşlarını listeleyen bileşeni render ediyoruz */}
                <Flights />
            </div>
        </div>
    );
}

export default MyFlights;
